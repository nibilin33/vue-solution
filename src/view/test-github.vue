<template>
  <div class="border">
    <p>上一次异常页：{{lastError}} </p>
    <p>当前页：<el-input-number v-model="currentPage"></el-input-number></p>
    <!-- {{ result }} -->
    <p>Github's user language: 
      <el-radio v-model="radio" label="js">JS</el-radio>
      <!-- <el-radio v-model="radio" label="java">Java</el-radio> -->
    </p>
    <el-button @click="importUser">导入</el-button>
    总数据：{{total}}<br/>
      <br/>
    <el-progress type="circle" :percentage="percent"></el-progress>
    <br/>
    <br/>
    <el-button @click="update">清洗数据</el-button>
    <p>需要清理数据：{{clearCount}}</p>
    <p>异常：{{error}}</p>
    <el-progress type="circle" :percentage="percentCycle"></el-progress>
      <div class="img-list" v-for="(it,index) in userdata" :key="index">
        <img
          :src="it.avatar_url"/>
          <span class="img-info">
          {{it.url}}<br/>
          Name：{{it.name||'No name'}}<br/>
          分支:{{it.public_repos}}<br/>
          Followers:{{it.followers||'No followers'}}<br/>
          邮箱:{{it.email||'No email'}}<br/>
          公司:{{it.company||'No company'}}<br/>
          地址：{{it.location||'No location'}}<br/>
          </span>
      </div>
  </div>
</template>
<script>
//https://api.github.com/search/repositories?q=tetris+language:js&sort=stars&order=desc
//Link: <https://api.github.com/resource?page=2>; rel="next", 一页30调
//<https://api.github.com/resource?page=5>; rel="last"
// url 字段获取用户信息
import request from "@/request.js";
import {addUsers,updateUsers} from './db.js';
import userdata from './GitHub_user.json';
export default {
  data() {
    return {
      radio:'js',
      currentPage:0,
      result: {},
      lastError:0,
      total:0,
      percentCycle:0,
      error:'',
      clearCount:0,
      userdata:Object.freeze(userdata.map((it)=>JSON.parse(it.user)))
    };
  },
  mounted() {
    this.lastError = localStorage.getItem('gitHubErrorPage')||0;
    request.get('/v1/clear/end');
    //request.post('/v1/clear/add',{items:[]});
  },
  computed: {
    percent() {
      let resultLen = this.result.items?this.result.items.length:0;
      return Number(((this.total?(this.currentPage*30+resultLen)/this.total:0)*100).toFixed(2));
    }
  },
  methods: {
    updateProgress(skip,count,error='') {
      this.clearCount  = count;
      this.percentCycle = Number(((count?skip/count:0)*100).toFixed(2));
      if(error) {
        this.error = error.toString();
      }
    },
    async update(){
      try {
        await updateUsers(this.updateProgress);
      } catch (error) {
        console.log(error);
      }
    },
    async importUser() {
      await this.getList(this.currentPage);
    },
    async getList(page) {
      this.currentPage = page;
      // "total_count": 6395,
      //"incomplete_results": true,
      try {
        const rest = await request
        .get(
          `https://api.github.com/search/repositories?q=language:js+followers:%3E1+size:%3E30000&sort=stars&order=asc&page=${page}>;rel=next`
        ); 
        this.result = rest.data;
        if(!this.total) {
          this.total = rest.data.total_count;
        }
        
       
        if(this.result.items && this.result.items.length) {
            request.post('/v1/clear/add',this.result)
          //await addUsers(this.result);
          //tmpList.concat(this.result.items);
        }
        if(page*30+this.result.items.length<this.total) {
          page++;
          setTimeout(async()=>{
            await this.getList(page);
          },500);
        }else{
          // tmpList = uniqBy(tmpList,'userId');
          // await addUsers({items:tmpList});
          request.get('/v1/clear/end');
        }
      } catch (error) {
          this.$message.error(`request:${error.toString()}`);
          localStorage.setItem('gitHubErrorPage',this.currentPage);
          console.log(error.toString());
          setTimeout(()=>{
            this.getList(this.currentPage);
          },1000)
      }

    },
  }
};
</script>
<style lang="scss" scoped>
.border{
  text-align: center;
}
.img-list{
  text-align: left;
  height: 200px;
}
img{
  width:100px;
  height: 100%;
  position: relative;
  -webkit-user-select: none;
  display: inline-block;
}
.img-info{
  display: inline-block;
  height: 100%;
  position: relative;
  padding-left: 10px;
  border-bottom: 1px dashed #212;
  vertical-align: top;
}
</style>

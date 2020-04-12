<template>
  <div id="app">
    <div
      class="link-list"
      :title="open?'点击收起':'点击展开'"
      :class="open?'link-open':'link-fold'"
      @click="changePosition">
      <div class="before"></div>
      <div class="after"></div>
      <a 
      class="link"
      v-for="(it,index) in btns"
      :style="(activeIndex === it.path?'text-decoration: underline;':'')+getColor(index)"
      @click.stop="goNext(it.path)"
      :key="index">{{it.name}}</a>
    </div>
    <transition>
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
const colorList = ["#f56c6c","#67c23a","#e33ce6","#409eff","#8E0A83","#FF9640"];
export default {
  name: 'App',
  data() {
    return {
      activeIndex:this.$router.currentRoute.path,
      open:true,
      btns: [
        {
          name: this.$t('在线打包'),
          path: '/webpack'
        },
        {
          name: this.$t('测试离线资源'),
          path: '/ume/test-resource'
        },
        {
          name: this.$t('测试定制'),
          path: '/test-plan'
        },
        {
          name: this.$t('webpack多彩'),
          path: '/test-color'
        },
        {
          name: this.$t('序列化反序列化'),
          path: '/serialize'
        },
        {
          name: this.$t('Github用户数据'),
          path: '/git'
        },
        {
          name: this.$t('登录'),
          path: '/login'
        },
        {
          name: this.$t('权限')
        },
        {
          name: this.$t('服务端渲染')
        }
      ]
    }
  },
  mounted() {
    this.setActive();
  },
  watch:{
    '$route.path':function(from,to){
      this.setActive();
      //this.activeIndex=to;
    }
  },
  methods: {
    changePosition() {
      this.open = !this.open;
    },
    setActive() {
      setTimeout(()=>{
        this.activeIndex=this.$router.currentRoute.path;
      },200);
    },
    goNext(it) {
      if(!it) {
        this.$message.error('未支持');
        return;
      }
      this.$router.push(it);
      this.changePosition();
    },
    getColor(index) {
      return `color:${colorList[index%colorList.length]};`;
    }
  }
}
</script>

<style lang="scss">
@import 'assets/color.scss';
body{
  background-color:#f9f9f996;
  padding-top:5px;
  margin: 0;
}
.link-list{
  position: fixed;
  bottom:0;
  right:0;
  background:#d9ff66;
  z-index:200;
  border-radius: 50%;
  padding: 25px;
  text-align: justify;
}
.link-open{
  width:240px;
  height: 320px;
}
.link-fold{
  width: 30px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.link{
  cursor: pointer;
  font-weight: bold;
  &:hover{
    text-decoration: underline;
  }
  padding:10px 5px;
}
.before {
    float: left;
    width: 35%;
    height: 100%;
    shape-outside: radial-gradient(farthest-side ellipse at right, transparent 100%, #c1f7d473);
    z-index:-1;
}
.after {
    float: right;
    width: 35%; height: 100%;
    shape-outside: radial-gradient(farthest-side ellipse at left, transparent 100%, #c1f7d473);
    z-index:-1;
}
</style>

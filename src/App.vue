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
      v-show="open"
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
const colorList = ["#f56c6c","#67c23a","#e33ce6","#409eff","#8E0A83","#FF9640","#3ac2aa"];
export default {
  name: 'App',
  data() {
    return {
      activeIndex:this.$router.currentRoute.path,
      open:true,
      btns: this.$router.options.routes||[]
    }
  },
  mounted() {
    this.setActive();
  },
  watch:{
    '$route.path':function(){
      this.setActive();
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
      console.log(it);
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
  background:#edf396;
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

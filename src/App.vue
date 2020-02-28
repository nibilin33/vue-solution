<template>
  <div id="app">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="goNext">
      <el-menu-item v-for="(it,index) in btns" :key="index" :index="it.path">{{it.name}}</el-menu-item>
    </el-menu>
    <transition>
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      activeIndex:this.$router.currentRoute.path,
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
          name: this.$t('webpack多彩plugin'),
          path: '/test-color'
        }
      ]
    }
  },
  created(){
  },
  methods: {
    goNext(it) {
      this.$router.push(it);
    }
  }
}
</script>

<style lang="scss">
@import 'assets/color.scss';
body{
  background-color:#f9f9f996;
}
.pager{
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  width:95vw;
  height: 50%;
  overflow-y:auto;
  position: absolute;
}
.left-enter{
 transform-origin: right right;
 transform:rotateY(0);
}
.left-enter-to{
 transform-origin: left left;
 transform:rotateY(-360deg);
}
 
.left-enter-active{
 transition: 1.5s;
}
.left-leave{
 transform-origin: left left;
 transform:rotateY(0deg);
}
.left-leave-to{
 transform-origin: right right;
 transform:rotateY(-360deg);
}
.left-leave-active{
 transition: 2s;
}
</style>

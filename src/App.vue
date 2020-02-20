<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br>
    <button v-for="(it,index) in btns" :key="index" @click="goNext(it)">
      {{it.name}}
      </button>
    <transition name="left">
    <router-view class="pager"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      btns: [
        {
          name: this.$t('测试离线资源'),
          path: '/ume/test-resource'
        },
        {
          name: this.$t('测试定制'),
          path: '/test-plan'
        }
      ]
    }
  },
  methods: {
    goNext(it) {
      this.$router.push(it.path);
    }
  }
}
</script>

<style lang="scss">
@import 'assets/color.scss';
.pager{
  transform-origin: left center;
  border: 1px solid var(--color-primary);
}
.left-enter{
 transform:rotateY(0);
}
.left-enter-to{
 transform:rotateY(-180deg);
}
 
.left-enter-active{
 transition: 1s;
}
// .left-leave{
//  transform:rotateY(90deg);
// }
// .left-leave-to{
//  transform:rotateY(0);
// }
// .left-leave-active{
//  transition: 1s;
// }
</style>

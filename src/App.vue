<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"></br>
    <button v-for="(it,index) in btns" :key="index" @click="$router.push(it.path)">
      {{it.name}}
      </button>
    <router-view></router-view>
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

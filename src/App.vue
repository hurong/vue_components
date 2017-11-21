<template>
  <div id="app">
    <img src="./assets/logo.png" class="vue-img">
    <router-link to="/ComponentsCat">
    <span v-tooltip="'学习vue2.0,自定义组件和自定义指令'">components/directives目录</span>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue-img {
  vertical-align: middle;
}
</style>

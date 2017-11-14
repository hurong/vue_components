<template>
  <div id="app">
    <img src="./assets/logo.png" class="vue-img">
    <router-link to="/ComponentsCat">components/directives目录</router-link>
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

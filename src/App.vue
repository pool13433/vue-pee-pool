<template>
  <div id="app">
    <div class="ui inverted menu">
      <router-link class="active item" to="/navbar">navbar</router-link>
      <router-link class="item" to="/register">register</router-link>
      <router-link class="item" to="/profile/pool*pee">profile</router-link>
      <router-link class="item" to="/page1">Page1</router-link>
      <router-link class="item" to="/page2">Page2</router-link>
    </div>

    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

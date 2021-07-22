<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
  
  },
  created() {
  
  }
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
/*@media screen and (max-width:960px) {
  body {
    background: url("../public/刻晴.png");
    background-size: cover;
    background-repeat: repeat-y;
  }
}
@media screen and (min-width:961px) {
  body {
    background: url("../public/神里绫华和八重神子.jpg");
    background-size: 100%, auto;
    background-repeat: repeat-y;
  }
}*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  height: 100%;
}
</style>

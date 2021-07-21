<template>
  <div class="navBar">
    <el-menu mode="horizontal" :default-active="activeIndex" class="mainIndex" @select="goto">
      <el-menu-item v-for="item in url" :index="item.index" :key="item.index">{{item.label}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "navBar",
    props: [
      'activeIndex',
      'url'
    ],
    data() {
      return {
      
      }
    },
    methods: {
      goto(key) {
        console.log(key, this.url[key].path);
        console.log(this.$route.path)
        console.log(window.location.host);
        // let url = window.location.protocol + window.location.host + window.location.pathname
        // this.$router.push(this.url[key].path)
        window.open('#'+this.url[key].path, '_self')
      }
    }
  }
</script>

<style scoped>
  .navBar {
    margin-bottom: 2rem;
  }
</style>

<template>
  <div class="pictrues">
    <nav-bar :url="navUrl" :activeIndex="activeIndex" />
    <el-page-header @back="$router.push('/mainIndex')" content="图片"></el-page-header>
    <img :src="require('public/插羽毛.gif')"/>
    <br>
    <img :src="require('public/gm.gif')"/>
  </div>
</template>

<script>
  import NavBar from "@/components/navBar";
  import {navUrl} from '@/json/url'
  
  export default {
    name: "pictrues",
    components: {
      NavBar
    },
    data() {
      return {
        navUrl,
        activeIndex: '3'
      }
    }
  }
</script>

<style scoped>

</style>

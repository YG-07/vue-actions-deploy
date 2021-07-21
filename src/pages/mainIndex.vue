<template>
  <div class="mainIndex">
    <nav-bar :url="navUrl" :activeIndex="activeIndex"/>
    <test01/>
    <item-scroll/>
    <hello-world />
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Test01 from '../components/test01'
  import ItemScroll from '../components/ItemScroll'
  import navBar from '../components/navBar'
  import {navUrl} from '../json/url'

  export default {
    name: "mainIndex",
    components: {
      HelloWorld,
      Test01,
      ItemScroll,
      navBar
    },
    data() {
      return {
        activeIndex: '0',
        navUrl,
      }
    },
    methods: {
    
    },
    created() {
      console.log('Hello! Welcome to YG-07 个人主页');
    }
  }
</script>

<style scoped>

</style>

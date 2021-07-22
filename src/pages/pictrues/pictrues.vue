<template>
  <div class="pictrues">
    <nav-bar :url="navUrl" :activeIndex="activeIndex" />
    <el-page-header @back="$router.push('/mainIndex')" content="图片"></el-page-header>
    <el-image v-for="(item, index) in picList"
      fit="scale-down"
      :src="item"
      :preview-src-list="[item]"
      :key="index"></el-image>
    <!--<img :src="require('public/插羽毛.gif')"/>-->
    <!--<img v-for="(item, index) in picList" :src="require('public/'+item)" :key="index"/>-->
  </div>
</template>

<script>
  import NavBar from "@/components/navBar";
  import {navUrl} from '@/json/url'
  import {picLen, setPic} from '../../util/common.js'
  
  export default {
    name: "pictrues",
    components: {
      NavBar
    },
    data() {
      return {
        navUrl,
        activeIndex: '3',
        picList: [],
      }
    },
    methods: {

    },
    created() {
      for(let i = 0; i < picLen ; ++i) {
        this.picList.push(require('public/' + setPic(i)))
      }
      console.log(this.picList);
    }
  }
</script>

<style lang="less">
.pictrues {
  .el-image {
    width: 100px;
    height: 100px;
    background: #eee;
    margin: 10px;
  }
}
</style>

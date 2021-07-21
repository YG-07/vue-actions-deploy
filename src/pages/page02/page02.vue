<template>
  <div class="page02">
    <nav-bar :url="navUrl" :activeIndex="activeIndex" />
    <div class="main" v-show="!isLoading">
      <el-page-header @back="$router.push('/mainIndex')" content="页面二"></el-page-header>
  
      <h2>这是页面二！</h2>
      <el-button type="primary" @click="loadAnim">点击加载</el-button>
      <el-alert
          title="成功提示的文案"
          type="success">
      </el-alert>
      <el-alert
          title="消息提示的文案"
          type="info">
      </el-alert>
      <el-alert
          title="警告提示的文案"
          type="warning">
      </el-alert>
      <el-alert
          title="错误提示的文案"
          type="error">
      </el-alert>
      <el-button @click="show = !show">fade淡入/淡出</el-button>
  
      <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
      </div>
  
      <el-button @click="show2 = !show2">Zoom缩放</el-button>
  
      <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="el-zoom-in-center">
          <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
        </transition>
    
        <transition name="el-zoom-in-top">
          <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
        </transition>
    
        <transition name="el-zoom-in-bottom">
          <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
        </transition>
      </div>
  
      <el-button @click="show3 = !show3">collapse展开/折叠</el-button>
  
      <div style="margin-top: 20px; height: 200px;">
        <el-collapse-transition>
          <div v-show="show3" style="display: flex">
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
            <div class="transition-box">el-collapse-transition</div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <two-ball v-show="isLoading" />
  </div>
</template>

<script>
  import twoBall from '../../components/towBall'
  import NavBar from "../../components/navBar";
  import {navUrl} from '../../json/url'


  export default {
    name: "page02",
    components: {
      twoBall,
      NavBar
    },
    data() {
      return {
        activeIndex: '2',
        isLoading: false,
        show: true,
        show1: true,
        show2: true,
        show3: true,
        navUrl,
      }
    },
    methods: {
      loadAnim() {
        let sec = (Math.random() * 3000).toFixed(0)
        console.log(sec)
        this.isLoading = true
        setTimeout(()=>{
          window.location.reload()
        }, sec)
      }
    }
  }
</script>

<style lang="less">
  .page02 {
    .el-alert {
      width: 30%;
    }
    .main > * {
      margin-top: 2rem;
    }
    .transition-box {
      margin-bottom: 10px;
      width: 200px;
      height: 100px;
      border-radius: 4px;
      background-color: #409EFF;
      text-align: center;
      color: #fff;
      padding: 40px 20px;
      box-sizing: border-box;
      margin-right: 20px;
    }
  }
</style>
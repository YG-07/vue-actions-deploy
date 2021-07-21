<!-- 小球旋转 加载组件 -->
<template>
  <div class="towBall">
    <div class="ball">
      <div class="b1"></div>
      <div class="b2"></div>
    </div>
    <div class="ball txt">加载中...</div>
  </div>
</template>

<script>
  export default {
    name: "towBall"
  }
</script>

<style lang="less">
  .towBall {
    @w: 4rem;
    @h: 4rem;
    @x: 3.5rem;
    .ball {
      width: @w;
      height: @h;
      margin: 0 auto;
      position: fixed;
      top: 50% - 0.5*@h;
      left: 50% - 0.5*(2*@w+@x);
      div {
        width: @w;
        height: @h;
        border-radius: 50%;
        position: absolute;
      }
      div:nth-child(1){
        background: deeppink;
        animation: rotate 1.6s linear infinite;
      }
      div:nth-child(2){
        background: cyan;
        transform: translateX(2*@x);
        animation: rotate1 1.6s linear infinite;
      }
    }
    .txt {
      width: 100%;
      top: 60%;
      font-size: 3rem;
    }
  
    @keyframes rotate {
      0%{
        z-index: 2;
        transform: scale(1) translateX(0);
      }
      25%{
        transform: scale(1.6) translateX(@x);
      }
      50%{
        transform: scale(1) translateX(2*@x);
      }
      75%{
        z-index: 1;
        transform:scale(0.8) translateX(@x);
      }
    }
    @keyframes rotate1 {
      0%{
        z-index: 1;
        transform: scale(1) translateX(2*@x);
      }
      25%{
        transform: scale(0.8) translateX(@x);
      }
      50%{
        transform: scale(1) translateX(0);
      }
      75%{
        z-index: 2;
        transform: scale(1.6) translateX(@x);
      }
    }
  }
</style>
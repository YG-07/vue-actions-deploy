<template>
  <div class="mainIndex">
    <hello-world />
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: "mainIndex",
    components: {
      HelloWorld
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

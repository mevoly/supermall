<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:"BackTop"
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 8px;
    bottom: 55px;
    z-index: 10;
    text-align: right;
  }
  .back-top img{
    width: 50%;
    height: 50%;
  }
</style>
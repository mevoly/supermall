<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeView",
  props:{
    recommends:{
      type:Array,
      defult(){
        return []
      }
    }
  },
}
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 15px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    font-size: 12px;
  }
  .recommend img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
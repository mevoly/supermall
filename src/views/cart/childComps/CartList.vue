<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="item in cartList" :key="item.index" :itemInfo="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'
export default {
  name:"CartList",
  components:{
    Scroll,
    CartListItem
  },
  computed: {
    cartList(){
      return this.$store.state.cartList
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-list{
    height: calc(100vh - 44px - 49px -44px);
    position: relative;
    top: 44px;
    bottom: 93px;
    right: 0;
    left: 0;
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
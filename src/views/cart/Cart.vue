<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <div class="title" slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'
 import CartList from './childComps/CartList'
 import BottomBar from './childComps/BottomBar'
export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    BottomBar
  },
  computed:{
    cartLength(){
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped>
  .cart-nav-bar{
    background-color: var(--color-tint);
  }
  .title{
    color: #ffffff;
  }
</style>
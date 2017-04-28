<template>
<div calss="mainapp">
  <v-header></v-header>
  <div class="v-nav">
    <router-link to="/goods">商品</router-link>
    <router-link to="/more">商家</router-link>
    <router-link to="/ratings">评价</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header'

export default {
  name: 'app',
  components:{
    "v-header":Header
  }
}
</script>
<style lang="less">
body {
    margin: 0;
    padding: 0;
    .v-nav {
        display: flex;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #ccc;
        a {
            display: block;
            flex: 1;
            text-decoration: none;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            font-weight:normal;
        }
        a.active{
          color:red;
          background-color: #ecebeb;
        }  
    }
}
</style>

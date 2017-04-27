<template>
<div calss="mainapp">
  <v-header></v-header>
  <div>
    <router-link to="/goods">商品</router-link>
    <router-link to="/more">详情</router-link>
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
<style>
</style>

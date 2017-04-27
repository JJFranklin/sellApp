<template>
<div id="app">
  <v-header></v-header>
  <div>
    <router-link to="/goods"></router-link>
    <router-link to="/detai"></router-link>
    <router-link to="/ratings"></router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header';
import Nav from './components/nav/nav';
import 'normalize.css'
import Vue from 'vue';
import VueRouter from "vue-router";
import Goods from "./components/goods/goods";
import Detai from './components/details/details';
import Ratings from './components/ratings/ratings';

Vue.use(VueRouter)
const routes  = [
    {path:"/goods",component:Goods},
    {path:"/details",component:Detai},
    {path:"/ratings",component:Ratings}
];

const router = new VueRouter({
  routes
});
export default {
  name: 'app',
  router,
  components:{
    "v-header":Header,
    Goods,
    Detai,
    Ratings
  }
}
</script>
<style>
</style>

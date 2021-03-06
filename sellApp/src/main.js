// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Nav from './components/nav/nav';
import VueRouter from "vue-router";
import Goods from "./components/goods/goods";
import More from './components/more/more';
import Ratings from './components/ratings/ratings';
import 'normalize.css'


Vue.use(VueRouter)

const routes  = [
    {path:"/goods",component:Goods},
    {path:"/more",component:More},
    {path:"/ratings",component:Ratings}
];

const router = new VueRouter({
  routes,
  linkActiveClass:'active'
});

//初始化导航到某个点
router.push("/goods");
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components:{
    Goods,
    More,
    Ratings
  },
  router,
  render: h => h(App)
});


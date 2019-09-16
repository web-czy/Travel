import Vue from 'vue';
import Router from 'vue-router';
import Home from 'pages/home/home';
import City from 'pages/city/city';
import Detail from 'pages/detail/detail';
import Album from 'base/album/album';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/album/:id',
      name: 'album',
      component: Album
    }
  ]
});

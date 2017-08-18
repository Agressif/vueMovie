import Vue from 'vue';
import Router from 'vue-router';
import movietag from '@/view/movieTag';
import moviesingle from '@/view/movieSingle';
import star from '@/components/star';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    redirect: '/movie/home',
    component: movietag,
    meta: { keepAlive: true },
  }, {
    path: '/movie/home',
    name: 'movietag',
    component: movietag,
    meta: { keepAlive: true },
  }, {
    path: '/movie/detail/:id',
    name: 'moviesingle',
    component: moviesingle,
  }, {
    path: '/star',
    component: star,
  }],
});

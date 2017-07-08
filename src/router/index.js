import Vue from 'vue';
import Router from 'vue-router';
import movietag from '@/view/movietag';
import moviesingle from '@/view/moviesingle';
import star from '@/components/star';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    redirect: '/movie/home',
    component: movietag,
  }, {
    path: '/movie/home',
    name: 'movietag',
    component: movietag,
  }, {
    path: '/movie/detail/:id',
    name: 'moviesingle',
    component: moviesingle,
  }, {
    path: '/star',
    component: star,
  }],
});

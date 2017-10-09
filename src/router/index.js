import Vue from 'vue';
import Router from 'vue-router';
import movietheater from '@/view/movieTheater';
import moviesoon from '@/view/moviesoon';
import moviesingle from '@/view/moviesingle';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'movietheater',
    alias: '/movie/theater',
    component: movietheater,
    meta: { keepAlive: true },
  }, {
    path: '/movie/comingsoon',
    name: 'moviesoon',
    component: moviesoon,
    meta: { keepAlive: true },
  }, {
    path: '/movie/detail/:id',
    name: 'moviesingle',
    component: moviesingle,
  }],
});

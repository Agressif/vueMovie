import semantic from 'semantic-ui-css/semantic.min';
import 'semantic-ui-css/semantic.min.css';
import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
import App from './App';
import router from './router';

Vue.use(semantic);
Vue.use(VueLazyLoad, {
  // npm run build 时修改路径如下
  // error: './static/error.jpg',
  // loading: './static/load.gif',

  // npm run dev 时路径如下
  error: '/static/error.jpg',
  loading: '/static/load.gif',
  attempt: 1,
});
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

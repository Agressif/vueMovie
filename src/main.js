import semantic from 'semantic-ui-css/semantic.min';
import 'semantic-ui-css/semantic.min.css';
import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
import App from './App';
import router from './router';

Vue.use(semantic);
Vue.use(VueLazyLoad, {
  error: '/static/error.jpg',
  loading: '/static/load.gif',
  attempt: 3,
});
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

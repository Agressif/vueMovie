import semantic from 'semantic-ui-css/semantic.min';
import 'semantic-ui-css/semantic.min.css';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(semantic);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

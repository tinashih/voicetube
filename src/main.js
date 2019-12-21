import Vue from 'vue';

import api from './api';
import App from './App.vue';
import router from './router';
import store from './store';

import {
  Card,
  Tag,
} from './components';

Vue.use(api);

Vue.component('card', Card);
Vue.component('tag', Tag);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

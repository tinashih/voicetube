import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import {
  Card,
  Tag,
} from './components';

Vue.config.productionTip = false;

Vue.component('card', Card);
Vue.component('tag', Tag);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

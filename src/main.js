import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import {
  Tag,
} from './components';

Vue.config.productionTip = false;

Vue.component('tag', Tag);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

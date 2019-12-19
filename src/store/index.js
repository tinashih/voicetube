import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  modules,
  strict: debug,
});

if (module.hot) {
  module.hot.accept([
    './modules',
  ], () => {
    store.hotUpdate({
      modules,
    });
  });
}

export default store;

import {
  getFilms,
} from './films';

const api = {
  getFilms,
};

const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return api;
      },
    },
  });
};

export default install;

import Alert from '../packages/index';

const components = [Alert]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  Alert
}
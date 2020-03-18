import Alert from '../packages/alert/index';

const components = [Alert]
console.error('Alert')
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  Alert,
  install
}
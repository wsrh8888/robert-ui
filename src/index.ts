import Alert from "../packages/alert/index";
import "../packages/theme-chalk/src/index.scss";
const components = [Alert];
const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  version: "1.0.0",
  Alert,
  install
};

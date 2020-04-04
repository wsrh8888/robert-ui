import Alert from "../packages/alert/index";
import Badge from "../packages/badge/index";
import Icon from "../packages/icon/index";
import "../packages/theme-chalk/src/index.scss";
const components = [Alert, Badge, Icon];
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
  Badge,
  Icon,
  install
};

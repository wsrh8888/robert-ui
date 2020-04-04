import Alert from "./src/main.vue";
const _Alert: any = Alert;
// /* istanbul ignore next */
_Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;

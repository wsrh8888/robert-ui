import Icon from "./src/main.vue";
const _Icon: any = Icon;
// /* istanbul ignore next */
_Icon.install = function (Vue) {
  Vue.component(_Icon.name, _Icon);
};

export default _Icon;

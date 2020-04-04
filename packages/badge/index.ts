import Badge from "./src/main.vue";
const _Badge: any = Badge;
// /* istanbul ignore next */
_Badge.install = function(Vue) {
  Vue.component(_Badge.name, _Badge);
};

export default _Badge;

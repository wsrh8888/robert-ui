import Vue from "vue";
import Router from "vue-router";

let userLanguage = window.navigator.language || "en-US";
let defaultPath = "/en-US";
if (userLanguage.indexOf("zh-") !== -1) {
  defaultPath = "/zh-CN";
} else if (userLanguage.indexOf("es") !== -1) {
  defaultPath = "/es";
} else if (userLanguage.indexOf("fr") !== -1) {
  defaultPath = "/fr-FR";
}
export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: defaultPath
    },
    {
      path: "*"
    }
  ]
});

Vue.use(Router);

import Vue from 'vue';
import entry from './app.vue'
import router from './router'
import Robert from '../src/index'
import 'packages/theme-chalk/src/index.scss';



Vue.use(Robert);
new Vue({
  el: "#app",
  router,
  render: h => h(entry)
})
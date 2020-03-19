import Vue from 'vue';
import entry from './app.vue'
import router from './router'
Vue.config.productionTip = false
import Robert from '../src/index'
Vue.use(Robert);
// console.error(Element)
new Vue({ // eslint-disable-line
  el: "#app",
  router,
  render: h => h(entry)
})
import Vue from 'vue';
import entry from './app.vue'
Vue.config.productionTip = false
import Element from '../src/index'
Vue.use(Element);
// console.error(Element)
new Vue({ // eslint-disable-line
  el: "#app",
  render: h => h(entry)
})
import Vue from 'vue';
import entry from './app.vue'
import Element from '../src/index'
Vue.use(Element);
// console.error(Element)
new Vue({ // eslint-disable-line
  render: h => h(entry)
}).$mount('#app');
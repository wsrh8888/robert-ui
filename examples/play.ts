import Vue from 'vue';
import entry from './app.vue'
// Vue.use(Element);

new Vue({ // eslint-disable-line
  render: h => h(entry)
}).$mount('#app');
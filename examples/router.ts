import Vue from 'vue'
import Router from 'vue-router'
import Footer from './components/footer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'footer',
      component: Footer
    }
  ]
})

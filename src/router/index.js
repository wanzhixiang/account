import Vue from 'vue'
import Router from 'vue-router'
import Table from '../components/table/BasicTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table/basic',
      component: Table
    }
  ]
})

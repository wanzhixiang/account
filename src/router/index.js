import Vue from 'vue'
import Router from 'vue-router'
import Table from '../components/table/BasicTable'
import SettingSubject from '../pages/setting/SettingSubject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table',
      component: Table,
      children: [
        {
          path: 'basic',
          component: Table
        }
      ]
    },
    {
      path: '/setting',
      component: SettingSubject,
      children: [
        {
          path: 'subject',
          component: SettingSubject
        }
      ]
    }
  ]
})

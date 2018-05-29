import Vue from 'vue'
import Router from 'vue-router'
import VoucherList from '../pages/voucher/VoucherList'
import SettingSubject from '../pages/setting/SettingSubject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/voucher',
      component: VoucherList,
      children: [
        {
          path: 'list',
          component: VoucherList
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

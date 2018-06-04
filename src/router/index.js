import Vue from 'vue'
import Router from 'vue-router'
import Voucher from '../pages/voucher/Voucher'
import VoucherList from '../pages/voucher/VoucherList'
import SettingSubject from '../pages/setting/SettingSubject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/voucher/list',
      component: VoucherList
    },
    {
      path: '/voucher/add',
      component: Voucher
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

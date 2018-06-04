<template>
  <voucher-edit-table>
  </voucher-edit-table>
</template>
<script>
import VoucherEditTable from '../../components/table/VoucherEditTable'
export default {
  name: 'Voucher',
  components: {VoucherEditTable},
  data () {
    return {
      tableData: [
        {
          remark: '',
          subject: '',
          debit: '',
          lender: ''
        }
      ]
    }
  },
  methods: {
    inputClick: function ($event) {
      // 点击事件
    }
  }
}
</script>

<style scoped>
</style>

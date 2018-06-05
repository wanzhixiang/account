<template>
  <div>
    <el-row>
      <el-col :span="8">凭证字</el-col>
      <el-col :span="8"  class="voucherTitle"><span>记账凭证</span></el-col>
      <el-col :span="8" style="text-align: right">附单据<input style="width: 30px" />张</el-col>
    </el-row>
    <voucher-edit-table></voucher-edit-table>
  </div>
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
  .voucherTitle{
    display: inline;
    font: 28px/1.8 "Microsoft Yahei";
    text-align: center;
  }
</style>

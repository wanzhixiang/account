<template>
  <div>
    <el-row  style="text-align: center">
      <span class="voucherTitle">记账凭证</span>
    </el-row>
    <el-row style="height: 30px">
      <el-col :span="8" style="display: flex">
        <input style="width: 60px"/>
        <span>字第</span>
        <input style="width: 60px"/>号
        <div style="margin-left: 30px">
          <span>日期</span>
          <el-date-picker
            v-model="createTime"
            type="date"
            size="mini"
          >
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="8" style="text-align: center">
        <span>2018年第5期</span>
      </el-col>
      <el-col :span="8" style="text-align: right">附单据<input style="width: 30px" />张</el-col>
    </el-row>
    <voucher-edit-table class="editTable"></voucher-edit-table>
    <div class="tableFooter">
      <span>制单人:</span>
      <span></span>
    </div>
  </div>
</template>
<script>
import VoucherEditTable from '../../components/table/VoucherEditTable'
export default {
  name: 'Voucher',
  components: {VoucherEditTable},
  data () {
    return {
      createTime: new Date()
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
  .editTable{
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>

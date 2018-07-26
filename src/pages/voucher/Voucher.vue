<template>
  <div>
    <div style="text-align: right">
      <el-tooltip class="item" effect="light" :open-delay='500' content="删除一行" placement="bottom">
        <el-button type="danger" size="mini" @click="delRow" icon="el-icon-remove-outline"></el-button>
      </el-tooltip>
      <el-tooltip class="item" effect="light" :open-delay='500' content="添加一行" placement="bottom">
        <el-button type="primary" size="mini" @click="addRow"  icon="el-icon-circle-plus-outline"></el-button>
      </el-tooltip>
    </div>
    <el-row  style="text-align: center">
      <span class="voucherTitle">记账凭证</span>
    </el-row>
    <el-row style="height: 30px">
      <el-col :span="9" style="display: flex">
        <input style="width: 30px" />
        <span>字第</span>
        <input style="width: 30px" />号
        <div>
          <span>日期</span>
          <el-date-picker
            v-model="createTime"
            type="date"
            size="mini"
          >
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="7" style="text-align: center;margin-left: -25px">
        <span>2018年第5期</span>
      </el-col>
      <el-col :span="8" style="text-align: right">附单据<input style="width: 30px" />张</el-col>
    </el-row>
    <voucher-edit-table v-bind:tableData="tableData" v-model="tableData" class="editTable"></voucher-edit-table>
    <div class="tableFooter">
      <span>制单人:</span>
      <span></span>
    </div>
    <div style="text-align: right">
      <el-button type="success">保存</el-button>
      <el-button type="primary">保存并新增</el-button>
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
      createTime: new Date(),
      tableData: [
        {
          remark: '',
          subject: '',
          debit: '',
          lender: ''
        },
        {
          remark: '',
          subject: '',
          debit: '',
          lender: ''
        },
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
    },
    addRow: function () {
      this.tableData.push({
        remark: '',
        subject: '',
        debit: '',
        lender: ''
      })
    },
    delRow: function () {
      if (this.tableData.length === 2) {
        this.$message('凭证至少保留2行')
        return false
      }
      this.tableData.splice(this.tableData.length - 1, 1)
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

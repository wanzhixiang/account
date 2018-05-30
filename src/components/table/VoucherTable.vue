<template>
  <div>
    <el-table
      :data="voucherTableData"
      border
      :span-method="objectSpanMethod"
      style="width: 100%; margin-top: 20px">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="voucherNum"
        label="凭证字号">
      </el-table-column>
      <el-table-column
        label="摘要">
      </el-table-column>
      <el-table-column
        label="科目">
      </el-table-column>
      <el-table-column
        label="借方金额">
      </el-table-column>
      <el-table-column
        label="贷方金额">
      </el-table-column>
      <el-table-column
        prop="createUser"
        label="制单人">
      </el-table-column>
      <el-table-column
        prop="auditor"
        label="审核人">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'VoucherTable',
  data () {
    return {
      voucherTableData: []
    }
  },
  mounted: function () {
    this.buildData()
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2 || columnIndex === 4 || columnIndex === 5) {
        return {
          rowspan: row.details.length,
          colspan: 1
        }
      }
    },
    buildData () {
      // 将tableData6构建成需要的数据
      this.$ajax.get('/static/api/voucherTable.json')
        .then(function (response) {
          const result = response.data
          // 解析result
          for (let i = 0; i < result.length; i++) {
            // 写代码
          }
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
}
</script>
<style>
  .hidden{
    display: none;width: 0;
  }
</style>

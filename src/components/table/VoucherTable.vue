<template>
  <div>
    <el-table
      :data="voucherTableData"
      border
      :span-method="objectSpanMethod"
      @cell-mouse-enter="enterCell"
      @cell-mouse-leave="leaveCell"
      :row-class-name="rowClassName"
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="createDate"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="voucherNum"
        label="凭证字号">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="摘要">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="科目">
      </el-table-column>
      <el-table-column
        prop="debit"
        label="借方金额">
      </el-table-column>
      <el-table-column
        prop="lender"
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
      // 表格数据
      voucherTableData: [],
      // 用于合并行
      rowspanArr: [],
      // 鼠标进入的行id
      enterId: ''
    }
  },
  mounted: function () {
    this.buildData()
  },
  methods: {
    // 合并单元格
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 6 || columnIndex === 7) {
        const _row = this.rowspanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },
    leaveCell (row, column, cell, event) {
      var _this = this
      _this.enterId = []
    },
    enterCell (row, column, cell, event) {
      var _this = this
      _this.enterId = row.id
    },
    rowClassName ({row, rowIndex}) {
      var _this = this
      if (row.id === _this.enterId) {
        return 'hover_class'
      }
    },
    buildData () {
      var _this = this
      // 将tableData6构建成需要的数据
      this.$ajax.get('/static/api/voucherTable.json')
        .then(function (response) {
          const result = response.data
          // 解析result
          let lastData = []
          for (let i = 0; i < result.length; i++) {
            // 写代码
            const details = result[i].details
            _this.rowspanArr.push(details.length)
            for (let j = 0; j < details.length; j++) {
              if (j !== 0) {
                _this.rowspanArr.push(0)
              }
              // lastData.push(result[i])
              var de = {}
              de.id = result[i].id
              de.createDate = result[i].createDate
              de.voucherNum = result[i].voucherNum
              de.createUser = result[i].createUser
              de.auditor = result[i].auditor
              de.remark = details[j].remark
              de.subject = details[j].subject
              de.debit = details[j].debit
              de.lender = details[j].lender
              lastData.push(de)
            }
          }
          _this.voucherTableData = lastData
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  }
}
</script>
<style scoped>
  .hover_class{
    background-color: brown;
  }
</style>

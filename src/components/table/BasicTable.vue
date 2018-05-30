<template>
  <el-table
    ref="multipleTable"
    :data="table.data"
    :border="true"
    tooltip-effect="dark"
    style="width: 100%;margin-top: 20px"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <template v-for="item in table.columns">
      <el-table-column
        :label="item.name"
        :prop="item.alias"
       >
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'BasicTable',
  props: {
    table: {}
  },
  data () {
    return {
      multipleSelection: []
    }
  },

  methods: {
    // toggleSelection (rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row)
    //     })
    //   } else {
    //     this.$refs.multipleTable.clearSelection()
    //   }
    // },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

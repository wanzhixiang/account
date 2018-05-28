<template>
  <!--按钮组-->
  <div>
    <el-row>
      <el-col :span="12">
        <el-radio-group v-model="parentMessage" @change="greet">
          <template v-for="item in subjectType">
            <el-radio-button :label="item.name"></el-radio-button>
          </template>
        </el-radio-group>
      </el-col>
      <el-col :span="12">
        <el-row justify="end" type="flex">
          <el-button type="success" round size="small">新增</el-button>
          <el-button type="info" round size="small">删除</el-button>
          <el-button type="warning" round size="small">导入</el-button>
          <el-button type="danger" round size="small">导出</el-button>
        </el-row>
      </el-col>
    </el-row>
    <basic-table v-bind:table="table" v-model="table" ref="BasicTable"></basic-table>
  </div>
</template>

<script>
import BasicTabs from '../../components/tabs/BasicTabs'

import BasicTable from '../../components/table/BasicTable'

export default {
  name: 'settingSubject',
  components: {BasicTabs, BasicTable},
  data () {
    return {
      table: {
        columns: [
          {
            name: '编码',
            alias: 'subjectNum'
          },
          {
            name: '名称',
            alias: 'subjectName'
          },
          {
            name: '类别',
            alias: 'subjectType'
          },
          {
            name: '余额方向',
            alias: 'subjectNum'
          },
          {
            name: '状态',
            alias: 'subjectNum'
          }
        ],
        data: [
          {
            subjectNum: '1001',
            subjectName: '钱',
            subjectType: '资产'
          }, {
            subjectNum: '1001',
            subjectName: '钱1',
            subjectType: '资产1'
          }, {
            subjectNum: '1001',
            subjectName: '钱2',
            subjectType: '资产2'
          }, {
            subjectNum: '1001',
            subjectName: '钱3',
            subjectType: '资产3'
          }, {
            subjectNum: '1001',
            subjectName: '钱4',
            subjectType: '资产4'
          }, {
            subjectNum: '1001',
            subjectName: '钱5',
            subjectType: '资产5'
          }, {
            subjectNum: '1001',
            subjectName: '钱6',
            subjectType: '资产6'
          }
        ]
      },
      parentMessage: '资产',
      subjectType: [
        {
          name: '资产'
        },
        {
          name: '负债'
        },
        {
          name: '权益'
        },
        {
          name: '成本'
        },
        {
          name: '损益'
        }
      ]
    }
  },
  methods: {
    greet: function (value) {
      // `this` 在方法里指向当前 Vue 实例
      // this.$refs.BasicTable.$data.multipleSelection
      alert('Hello ' + value + '!')
    }
  }
}
</script>

<style scoped>

</style>

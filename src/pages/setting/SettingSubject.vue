<template>
  <!--按钮组-->
  <div>
    <!--操作按钮区 start-->
    <el-row>
      <el-col :span="12">
        <el-radio-group v-model="parentMessage" @change="changeSubjectType">
          <template v-for="item in subjectType">
            <el-radio-button :label="item.name" :value="item.typeNum"></el-radio-button>
          </template>
        </el-radio-group>
      </el-col>
      <el-col :span="12">
        <el-row justify="end" type="flex">
          <el-button type="success" round size="small" @click="addSubject">新增</el-button>
          <el-button type="info" round size="small" @click="delSubject">删除</el-button>
          <el-button type="warning" round size="small">导入</el-button>
          <el-button type="danger" round size="small">导出</el-button>
        </el-row>
      </el-col>
    </el-row>
    <!--操作按钮区 end-->
    <!--table展示区 start-->
    <basic-table v-bind:table="table" v-model="table" ref="BasicTable"></basic-table>
    <!--table展示区 end-->
    <!--新增科目弹出框-->
    <subject-dialog ref="SubjectDialog" :data="form">
      <span slot="title"></span>
    </subject-dialog>
  </div>
</template>

<script>
import BasicTabs from '../../components/tabs/BasicTabs'
import SubjectDialog from '../../components/dialog/SubjectDialog'
import BasicTable from '../../components/table/BasicTable'

export default {
  name: 'settingSubject',
  components: {BasicTabs, BasicTable, SubjectDialog},
  data () {
    return {
      form: {
        id: '',
        subjectNum: '',
        subjectName: '',
        parentSubjectName: '',
        subjectType: '',
        subjectCategory: ''
      },
      table: {
        columns: [
          {
            name: '编码',
            alias: 'subjectNum',
            type: 'text'
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
          },
          {
            name: '创建日期',
            alias: 'createDate',
            type: 'date'
          }
        ],
        data: [
          {
            subjectNum: '1001',
            subjectName: '钱',
            subjectType: '资产',
            createDate: ''
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
          name: '资产',
          typeNum: '1'
        },
        {
          name: '负债',
          typeNum: '2'
        },
        {
          name: '权益',
          typeNum: '3'
        },
        {
          name: '成本',
          typeNum: '4'
        },
        {
          name: '损益',
          typeNum: '5'
        }
      ]
    }
  },
  methods: {
    // 切换科目
    changeSubjectType: function (value) {
      // `this` 在方法里指向当前 Vue 实例
      // this.$refs.BasicTable.$data.multipleSelection
      alert('Hello ' + value + '!')
    },
    // 新增科目
    addSubject: function () {
      this.$refs.SubjectDialog.$data.dialogFormVisible = true
      this.$refs.SubjectDialog.$data.title = '新增科目'
    },
    // 删除科目
    delSubject: function () {
      const multipleSelection = this.$refs.BasicTable.$data.multipleSelection
      if (multipleSelection.length < 1) {
        // 弹出提示框
        this.$message({
          showClose: true,
          message: '请选择需要删除的数据',
          type: 'error'
        })
      } else {
        this.$confirm('此操作将删除该' + multipleSelection.length + '条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>

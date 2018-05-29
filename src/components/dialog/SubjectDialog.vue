<template>
  <el-dialog :title="title" :visible.sync="dialogFormVisible"  :center="true" width="20%" >
    <el-form :model="data">
      <el-input v-model="data.id" type="hidden" auto-complete="off"></el-input>
      <el-form-item label="科目编码" :label-width="formLabelWidth">
        <el-input v-model="data.subjectNum" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="科目名称" :label-width="formLabelWidth">
        <el-input v-model="data.subjectName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="上级科目" :label-width="formLabelWidth">
        <el-input v-model="data.parentSubjectName" disabled></el-input>
      </el-form-item>
      <el-form-item label="科目类别" :label-width="formLabelWidth">
        <el-select v-model="data.subjectType" placeholder="请选择科目类别" disabled>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="余额方向"  :label-width="formLabelWidth">
        <el-radio label="借" v-model="data.subjectCategory"></el-radio>
        <el-radio label="贷" v-model="data.subjectCategory"></el-radio>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:show', false)">取 消</el-button>
      <el-button type="primary" @click="$emit('update:show', false)">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'SubjectDialog',
  props: {
    data: {
      id: '',
      subjectNum: '',
      subjectName: '',
      parentSubjectName: '',
      subjectType: '',
      subjectCategory: ''
    }
  },
  data () {
    return {
      title: '',
      dialogFormVisible: false,
      formLabelWidth: '80px'
    }
  }
}
</script>

<style scoped>

</style>

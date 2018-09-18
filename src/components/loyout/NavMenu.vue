<template>
  <el-row class="wzx-header">
    <el-col :span="10">
      <div class="logo" index="0">
        <img src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png" width="40">
        <span class="site-name">{{companyName}}</span>
      </div>
    </el-col>
    <el-col :span="8">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">基础系统</el-menu-item>
        <el-menu-item index="2">财务系统</el-menu-item>
        <el-menu-item index="3">工资系统</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      companyName: '成都小胖子会计有限责任公司',
      activeIndex: '2'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  el-menu-wzx {
    text-decoration:none;
  }
  .logo {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
  }
  .logo:hover{
    background: none;
  }
  .site-name {
    margin-left: 10px;
  }
  .el-menu--horizontal{
    border-bottom: none;
  }
  .wzx-header{
    box-shadow: 1px 1px 1px #888;
    z-index: 99;
  }
</style>

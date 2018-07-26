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
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me">订单管理</a></el-menu-item>
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
      activeIndex: '1'
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

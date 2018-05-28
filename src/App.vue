<template>
  <el-container>
    <Aside-Menu></Aside-Menu>
    <el-container style="left: 202px; right: 0;position: absolute;top: 0;bottom: 0;">
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <el-main>
        <transition name="fade" mode="out-in">
          <!-- <router-view :key="key"></router-view> -->
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AsideMenu from './components/loyout/AsideMenu'
import NavMenu from './components/loyout/NavMenu'

export default {
  components: {AsideMenu, NavMenu},
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
<style>
  .el-header {
    color: #333;
    text-color: #fff;
    active-text-color: #ffd04b;
    line-height: 60px;
  }
</style>

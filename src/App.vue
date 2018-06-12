<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <nav-menu></nav-menu>
    </el-header>
    <el-container class="main_container">
      <Aside-Menu></Aside-Menu>
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
  body{
    margin: 0;
    padding: 0;
  }
  .main_container{
    position: absolute;
    left: 0px;
    right: 0px;
    top: 60px;
    bottom: 0px;
  }
  .el-header{
    padding: 0px;
  }
</style>

<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <nav-menu></nav-menu>
    </el-header>
    <el-container class="main_container">
      <Aside-Menu v-bind:asideMenuConfig="asideMenuConfig"></Aside-Menu>
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
  mounted: function () {
    this.buildData()
  },
  data () {
    return {
      asideMenuConfig: []
    }
  },
  methods: {
    buildData: function () {
      var _this = this
      // 将tableData6构建成需要的数据
      this.$ajax.get('/static/api/menu.json')
        .then(function (response) {
          const result = response.data
          _this.asideMenuConfig = result.data
        })
        .catch(function (response) {
          console.log(response)
        })
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

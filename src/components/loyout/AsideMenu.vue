<template>
  <el-aside width="200px">
    <div class="logo">
      <img src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png" width="40">
      <span class="site-name">小胖子</span>
    </div>
    <el-menu
      :default-openeds="['1','2', '3']"
      style="border: none"
    >
      <template v-for="item in asideMenuConfig">
        <router-link v-if="!item.children" :to="item.path" :key="item.name">
          <el-menu-item :index="item.path">
            <i v-if="item.icon" :class="item.icon"></i>
            <span v-if="item.name" slot="title">{{item.name}}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-else :index="item.name || item.path" :key="item.name">
          <template slot="title">
            <i v-if="item && item.icon" :class="item.icon"></i>
            <span v-if="item && item.name" slot="title">{{item.name}}</span>
          </template>
          <template v-for="child in item.children" v-if="!child.hidden">
            <router-link :to="item.path + child.path" :key="child.name">
              <el-menu-item :index="item.path + child.path">
                <span v-if="child && child.name" slot="title">{{child.name}}</span>
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'AsideMenu',
  data: function () {
    return {
      asideMenuConfig: [{
        path: '/table',
        name: '凭证管理',
        icon: 'el-icon-menu',
        children: [
          {
            path: '/basic',
            name: '分析页'
          },
          {
            path: '/monitor',
            name: '监控页'
          },
          {
            path: '/workplace',
            name: '工作台'
          }
        ]
      },
      {
        path: '/setting',
        name: '设置',
        icon: 'el-icon-date',
        children: [
          {
            path: '/subject',
            name: '科目'
          },
          {
            path: '/fixed',
            name: '凭证字'
          }
        ]
      }
      ]
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration:none;
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
  }
  .site-name {
    margin-left: 10px;
  }
  .el-aside{
    height: 100%;
    position: fixed;
    z-index: 1001;
    overflow: hidden;
    border-right: solid 1px #e6e6e6;
  }
</style>

<template>
  <el-aside width="202px">
    <el-menu
      style="border: none"
      :default-active="$route.path"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
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
        path: '/voucher',
        name: '凭证管理',
        icon: 'el-icon-menu',
        children: [
          {
            path: '/add',
            name: '新增凭证'
          },
          {
            path: '/list',
            name: '凭证清单'
          },
          {
            path: '/template',
            name: '凭证模板'
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
  .el-aside{
    border-right: solid 1px #e6e6e6;
    box-shadow: 2px 2px 5px #888;
  }
</style>

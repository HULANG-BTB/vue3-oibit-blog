<template>
  <el-container class="app-container">
    <el-aside v-show="settings.showSideBar" :width="settings.showSideBar ? '300px' : '0px'">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from './components/aside'
import NavBar from './components/nav-bar'

import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar
  },
  setup() {
    const {
      state: { settings }
    } = useStore()
    return {
      settings
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .el-aside {
    animation: side-bar-in 0.3s ease-in-out 1;
  }
  .el-footer {
    background-color: #fff;
  }
}
</style>

<template>
  <div class="menu">
    <ul class="menu-list">
      <li class="menu-item" v-for="menu in menus" :key="menu.name">{{ menu.name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SideMenu',
  setup() {
    const menus = ref([
      {
        name: 'Home'
      },
      {
        name: 'Category'
      },
      {
        name: 'Tags'
      },
      {
        name: 'Archive'
      },
      {
        name: 'About'
      }
    ])

    return {
      menus
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: unset;
  border: unset;
}
</style>

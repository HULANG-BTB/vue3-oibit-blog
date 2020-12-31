<template>
  <div class="nav-bar">
    <div class="menu-button" :class="{ active: showSideBar }" @click="toggleSideBar">
      <i class="el-icon-s-operation"></i>
    </div>
    <div class="search-bar">
      <div class="search-form">
        <el-input v-model="search.keyword" @keyup.enter="search.search"></el-input>
      </div>
      <div class="search-icon">
        <i class="el-icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'

export default {
  name: 'NavBar',
  setup() {
    const store = useStore()
    const toggleSideBar = () => {
      store.dispatch('settings/toggolSideBar')
    }

    const showSideBar = computed(() => {
      return store.state.settings.showSideBar
    })

    const search = reactive({
      keyword: null,
      search() {
        console.log(this)
      }
    })

    return {
      toggleSideBar,
      showSideBar,
      search
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; // 纵向居中

  .menu-button {
    margin-left: 1rem;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: rotate(45deg);
    }

    &.active {
      transform: rotate(90deg);

      &:hover {
        transform: rotate(45deg);
      }
    }
  }

  .search-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    transition: all 0.3s ease-in;

    .search-icon {
      z-index: 10;
      font-size: 1.2rem;
      transition: all 0.4s ease-in;
    }

    .search-form {
      display: inline-block;
      transition: all 0.4s ease-in;
      width: 0;
      overflow: hidden;

      /deep/ .el-input__inner {
        height: 28px;
        line-height: 28px;
        border-radius: 14px;
      }
    }

    &:hover {
      .search-form {
        transform: translateX(1.5rem);
        width: 15rem;
      }
    }
  }
}
</style>

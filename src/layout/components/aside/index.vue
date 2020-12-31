<template>
  <div class="side-bar">
    <div class="avatar">
      <el-avatar v-bind="avatar"></el-avatar>
    </div>
    <div class="author">AloneH</div>
    <side-menu></side-menu>
  </div>
</template>

<script>
import { reactive } from 'vue'
import SideMenu from './components/menu'
import { useStore } from 'vuex'

export default {
  name: 'SideBar',
  components: {
    SideMenu
  },
  setup() {
    const avatar = reactive({
      size: 150,
      src: './static/img/avatar.jpg',
      shape: 'circle'
    })
    const {
      state: { settings }
    } = useStore()

    return {
      avatar,
      settings
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  width: 100%;
  background-image: url('../../../assets/img/side-bar-bg.jpg');
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; // 垂直居中
  align-items: center; // 水平居中
  overflow-y: scroll;
  color: #f4f5f5;

  /*transition: all 0.3s ease-in 1s;*/

  &::-webkit-scrollbar {
    display: none;
  }

  .avatar {
    box-sizing: border-box;

    &:hover {
      animation: avatar 0.7s ease-in 1;
    }
  }

  .author {
    padding: 0.5rem 0;
    font-size: 2rem;
  }
}
</style>

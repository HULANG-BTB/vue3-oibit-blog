<template>
  <div class="app-home">
    <div class="article-list">
      <article-item v-for="i in 30" :key="i"></article-item>
    </div>
  </div>
</template>

<script>
import ArticleItem from './components/article-item'

export default {
  name: 'Home',
  components: {
    ArticleItem
  }
}
</script>

<style lang="scss" scoped>
.app-home {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  max-height: calc(100vh - 120px - 40px);
  overflow-y: scroll;

  .article-list {
    flex-grow: 1;
    margin-right: 0.5rem;
  }

  .tag-list {
    width: 15rem;
  }
}
</style>

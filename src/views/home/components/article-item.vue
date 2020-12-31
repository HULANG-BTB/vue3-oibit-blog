<template>
  <div class="article-item">
    <div class="thumbnail">缩略图</div>
    <div class="meta">
      <div class="title">标题</div>
      <div class="description">描述</div>
      <div class="comment">
        <div class="time">
          <i class="el-icon-time"></i>
          时间
        </div>
        <div class="views">
          <i class="el-icon-view"></i>
          阅读
        </div>
        <div class="comments">
          <i class="el-icon-chat-square"></i>
          评论
        </div>
        <div class="likes">
          <i class="el-icon-thumb"></i>
          点赞
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem'
}
</script>

<style lang="scss" scoped>
.article-item {
  width: 100%;
  height: 12rem;
  background-color: #fff;
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  transition: all 0.3s ease-in;

  &:hover {
    animation: shake 0.3s ease-in 1;
  }

  .thumbnail {
    background-color: aliceblue;
    width: 14rem;
    height: 11rem;
    overflow: hidden;
  }

  .meta {
    flex-grow: 1;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 1.5rem;
    }

    .description {
      margin: 0.5rem 0;
      flex-grow: 1;
      overflow: hidden;
    }

    .comment {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>

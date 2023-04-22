<template>
  <van-cell :title="name" :label="author + ' - ' + name">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon name="play-circle-o" size="20" />
    </template>
  </van-cell>
</template>
<script>
export default {
  props: {
    name: String, //歌名
    author: String, //歌手
  },
};
</script>
<style scoped>
</style>
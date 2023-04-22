<template>
  <van-cell
    :title="name"
    :label="author + ' - ' + name"
    @click="$router.push({ path: '/comment', query: { id: id } })"
  >
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon name="play-circle-o" size="20" @click="playFn" />
    </template>
  </van-cell>
</template>
<script>
export default {
  props: {
    name: String, //歌名
    author: String, //歌手
    id: Number,
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id, //歌曲id,通过路由跳转传递
        },
      });
    },
  },
};
</script>
<style scoped>
</style>
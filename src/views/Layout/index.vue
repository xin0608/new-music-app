<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed />
    <div class="main">
      <!-- 组件缓存 -->
      <keep-alive>
        <!-- 二级路由-挂载点 -->
        <router-view></router-view>
      </keep-alive>
    </div>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title, //获取当前路由所在信息对象里的meta里的title
    };
  },
  // 侦听路由改变
  watch: {
    $route() {
      //直接侦听组件对象身上的任意属性
      // 路由改变时
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
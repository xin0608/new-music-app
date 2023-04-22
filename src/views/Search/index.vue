<template>
  <div>
    <van-search
      v-model="searchValue"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <!-- 搜索容器 -->
    <div class="search_wrap" v-if="searchValue === ''">
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索关键词 -->
        <span
          class="hot_item"
          v-for="(obj, index) in hotList"
          :key="index"
          @click="btn(obj.first)"
        >
          {{ obj.first }}
        </span>
      </div>
    </div>
    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <SongItem
        v-for="obj in resultList"
        :key="obj.id"
        :name="obj.name"
        :author="obj.artists[0].name"
      />
    </div>
  </div>
</template>
<script>
import { hotSearchAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";
export default {
  data() {
    return {
      searchValue: "",
      hotList: [], //热搜关键字
      resultList: [], //搜索结果列表
    };
  },
  async created() {
    const res = await hotSearchAPI();
    // console.log(res);
    this.hotList = res.data.result.hots;
  },
  methods: {
    async btn(str) {
      // console.log(str);
      this.searchValue = str; //将点击的关键字赋给输入框显示
      // 直接点击关键词，立马发送请求，并且清除输入框的定时器，防止二次请求
      const res = await searchResultAPI({
        type: 1,
        keywords: this.searchValue,
      });
      console.log(res);
      this.resultList = res.data.result.songs;
      clearTimeout(this.timer);
    },
  },
  // 侦听输入框变化
  watch: {
    searchValue(val) {
      clearTimeout(this.timer); //防止输入框空，还显示请求回来的数据
      // 清空输入框时，不执行请求
      if (val.length === 0) {
        return (this.resultList = []);
      }
      //输入框内容改变，立即执行
      // 请求过于频繁，可以进行性能优化 ->防抖（执行最后一次）

      this.timer = setTimeout(async () => {
        const res = await searchResultAPI({
          type: 1,
          keywords: val,
        });
        console.log(res);
        this.resultList = res.data.result.songs;
      }, 1000);
    },
  },
  components: { SongItem },
};
</script>
<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}
/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}
/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
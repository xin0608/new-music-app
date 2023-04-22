<template>
  <div>
    <van-nav-bar title="评论" fixed left-arrow @click-left="$router.back()" />
    <!-- 下拉刷新，可以做做上拉刷新TODO -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- List 组件通过 loading 和 finished 两个变量控制加载状态，当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。若数据已全部加载完毕，则直接将 finished 设置成 true 即可。 -->
      <div class="main">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="wrap" v-for="(obj, index) in commentList" :key="index">
            <div class="img_wrap">
              <img :src="obj.user.avatarUrl" alt="" />
            </div>
            <div class="content_wrap">
              <div class="header_wrap">
                <div class="info_wrap">
                  <p class="nickname">{{ obj.user.nickname }}</p>
                  <p class="comment_id">{{ obj.commentId }}</p>
                  <p class="comment">{{ obj.content }}</p>
                </div>
              </div>
            </div>
            <div class="footer_wrap">
              <p>{{ obj.likedCount }}点赞</p>
            </div>
          </div>
        </van-list>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getCommentListAPI } from "@/api";
export default {
  data() {
    return {
      id: this.$route.query.id,
      commentList: [], //评论列表
      refreshing: false, //下拉加载状态
      loading: false, //底部加载
      finished: false,
      pageNo: 1, //页数
      time: Date.now(), //上一条数据的时间，查看历史记录使用
    };
  },
  methods: {
    // 下拉刷新->重新刷新，以当前时间为准
    async onRefresh() {
      const res = await getCommentListAPI({
        id: this.id,
        pageNo: this.pageNo,
        cursor: Date.now(),
      });
      const newList = res.data.data.comments;

      this.commentList = [...newList, ...this.commentList];
      // 加载状态结束
      this.refreshing = false;

      // 如果请求的数据为空
      if (newList.length === 0) this.finished = true;
    },
    // 上拉看历史记录
    async onLoad() {
      const res = await getCommentListAPI({
        id: this.id,
        pageNo: this.pageNo,
        cursor: this.time,
      });
      console.log(res);
      const newList = res.data.data.comments;

      this.commentList = [...this.commentList, ...newList];
      // 加载状态结束
      this.loading = false;
      // 下一页
      this.pageNo++;
      // 记住上一个请求的最后一个数据
      this.time = newList[19].time;

      if (newList.length === 0) this.finished = true;
      console.log(this.commentList);
    },
  },
};
</script>
<style scoped>
.main {
  padding-top: 46px;
}
.wrap {
  display: flex;
}
.wrap p {
  font-size: 14px;
  line-height: 20px;
  color: #999;
}
.img_wrap {
  padding: 10px;
  width: 30px;
  height: 30px;
}
img {
  width: 100%;
  border-radius: 50%;
}
.content_wrap {
  flex: 1;
}

.content_wrap .comment_id {
  font-size: 10px;
}
.footer_wrap {
  padding: 10px;
  width: 50px;
  height: 50px;
}
</style>
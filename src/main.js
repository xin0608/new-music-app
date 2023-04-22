import Vue from 'vue'
import App from './App.vue'
// @表示绝对路径
import "@/mobile/flexible" // 适配
import "@/styles/reset.css" // 初始化样式
import router from '@/router' // 路由对象
import { NavBar, Tabbar, TabbarItem, Col, Row, Image as VanImage, Cell, CellGroup, Icon, Search, PullRefresh, List } from 'vant';

// 全局注册vant组件（按需引入）
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);//重命名，避免与内置标签重名
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon)
Vue.use(Search)
Vue.use(PullRefresh)
Vue.use(List)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入移动端适配插件
import "amfe-flexible";

//引入全局样式
import "./assets/style/public.css";

//轮播图样式
import "./assets/style/banner.css";

//引入vant-ui插件
import {
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  NavBar,
  Grid,
  GridItem,
  Image as VanImage,
  Card,
} from "vant";

Vue.use(Card);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);

//关闭开发环境的提示信息
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

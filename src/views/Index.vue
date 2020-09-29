<template>
  <div>
    <van-nav-bar title="首页" :fixed="true" :placeholder="true" />
    <swipe :bannerList="bannerList"></swipe>

    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(item, index) in gridList" :key="index">
        <van-image :src="item.imgUrl" />
        <span class="grid-span">{{ item.title }}</span>
      </van-grid-item>
    </van-grid>

    <div>
      <van-card
        :price="item.currentPrice | format"
        :origin-price="item.originalPrice"
        :title="item.productName"
        :thumb="item.imgUrl"
        v-for="(item, index) in mainList"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import Swipe from "../components/index/Swipe";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      gridList: [
        {
          imgUrl: "https://img.yzcdn.cn/vant/apple-1.jpg",
          title: "每日福利",
        },
        {
          imgUrl: "https://img.yzcdn.cn/vant/apple-2.jpg",
          title: "热销榜",
        },
        {
          imgUrl: "https://img.yzcdn.cn/vant/apple-3.jpg",
          title: "会员中心",
        },
        {
          imgUrl: "https://img.yzcdn.cn/vant/apple-1.jpg",
          title: "皮噜甄选",
        },
      ],
    };
  },
  computed: mapState({
    bannerList: "bannerList",
    mainList: "mainList",
  }),
  components: {
    Swipe,
  },
  filters: {
    format(value) {
      return value.toFixed(2);
    },
  },
  mounted() {
    this.getBannerList();
    this.getMainList();
  },
  methods: {
    // getBannerList() {
    //   this.$store.dispatch("getBannerList");
    // },
    // getMainList() {
    //   this.$st ore.dispatch("getMainList");
    // },
    ...mapActions(["getBannerList", "getMainList"]),
  },
};
</script>

<style lang="less" scoped>
.grid-span {
  font-size: 12px;
  margin-top: 5px;
}
</style>
import Vue from "vue";
import Vuex from "vuex";
import { getBanner, getMain } from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bannerList: [],
    mainList: [],
  },
  mutations: {
    getBannerList(state, payload) {
      state.bannerList = payload.list;
    },
    getMainList(state, payload) {
      state.mainList = payload.list;
    },
  },
  actions: {
    async getBannerList({ commit }) {
      const res = await getBanner({});
      commit("getBannerList", res.result);
    },
    async getMainList({ commit }) {
      const res = await getMain({});
      commit("getMainList", res.result);
    },
  },
  modules: {},
});

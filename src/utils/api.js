import http from "./http";

//轮播图数据
export function getBanner(params) {
  return http.get("/home/banner", params);
}

//首页的推荐
export function getMain(data) {
  return http.post("/home/recommend", data);
}

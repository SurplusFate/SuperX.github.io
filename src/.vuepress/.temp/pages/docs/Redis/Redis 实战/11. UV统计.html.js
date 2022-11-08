export const data = JSON.parse("{\"key\":\"v-f6aa5eba\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/11.%20UV%E7%BB%9F%E8%AE%A1.html\",\"title\":\"UV 统计\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"UV 统计 HyperLogLog 首先我们搞懂两个概念：\\rUV：全称 Unique Visitor，也叫独立访客量，是指通过互联网访问、浏览这个网页的自然人。1 天内同一个用户多次访问该网站，只记录 1 次。; \\rPV：全称 Page View，也叫页面访问量或点击量，用户每访问网站的一个页面，记录 1 次 PV，用户多次打开页面，则记录多次 PV。往往用\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/11.%20UV%E7%BB%9F%E8%AE%A1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"UV 统计\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"HyperLogLog\",\"slug\":\"hyperloglog\",\"link\":\"#hyperloglog\",\"children\":[]},{\"level\":2,\"title\":\"测试百万数据的统计\",\"slug\":\"测试百万数据的统计\",\"link\":\"#测试百万数据的统计\",\"children\":[]}],\"readingTime\":{\"minutes\":1.68,\"words\":505},\"filePathRelative\":\"docs/Redis/Redis 实战/11. UV统计.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

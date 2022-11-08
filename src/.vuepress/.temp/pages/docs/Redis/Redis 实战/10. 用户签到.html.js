export const data = JSON.parse("{\"key\":\"v-44ec9ffe\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/10.%20%E7%94%A8%E6%88%B7%E7%AD%BE%E5%88%B0.html\",\"title\":\"用户签到\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"用户签到 BitMap 功能演示 我们针对签到功能完全可以通过 mysql 来完成，比如说以下这张表 用户一次签到，就是一条记录，假如有 1000 万用户，平均每人每年签到次数为 10 次，则这张表一年的数据量为 1 亿条 每签到一次需要使用（8 + 8 + 1 + 1 + 3 + 1）共 22 字节的内存，一个月则最多需要 600 多字节 我们如何能够简化\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/10.%20%E7%94%A8%E6%88%B7%E7%AD%BE%E5%88%B0.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"用户签到\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"BitMap 功能演示\",\"slug\":\"bitmap-功能演示\",\"link\":\"#bitmap-功能演示\",\"children\":[]},{\"level\":2,\"title\":\"实现签到功能\",\"slug\":\"实现签到功能\",\"link\":\"#实现签到功能\",\"children\":[]},{\"level\":2,\"title\":\"签到统计\",\"slug\":\"签到统计\",\"link\":\"#签到统计\",\"children\":[]},{\"level\":2,\"title\":\"额外加餐-关于使用 bitmap 来解决缓存穿透的方案\",\"slug\":\"额外加餐-关于使用-bitmap-来解决缓存穿透的方案\",\"link\":\"#额外加餐-关于使用-bitmap-来解决缓存穿透的方案\",\"children\":[]}],\"readingTime\":{\"minutes\":7.55,\"words\":2265},\"filePathRelative\":\"docs/Redis/Redis 实战/10. 用户签到.md\"}")

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

export const data = JSON.parse("{\"key\":\"v-5aa45e56\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/2.%20%E5%95%86%E6%88%B7%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98.html\",\"title\":\"商户查询缓存\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"date\":\"2022-10-26T00:00:00.000Z\",\"order\":2,\"category\":[\"Redis\"],\"summary\":\"商户查询缓存 缓存(Cache),就是数据交换的缓冲区,俗称的缓存就是缓冲区内的数据,一般从数据库中获取,存储于本地代码 缓存数据存储于代码中,而代码运行在内存中,内存的读写性能远高于磁盘,缓存可以大大 降低用户访问并发量带来的服务器读写压力 实际开发过程中,企业的数据量,少则几十万,多则几千万,这么大数据量,如果没有缓存来 作为\\\"避震器\\\",系统是几乎撑不住\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/2.%20%E5%95%86%E6%88%B7%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"商户查询缓存\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-26T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"添加商户缓存\",\"slug\":\"添加商户缓存\",\"link\":\"#添加商户缓存\",\"children\":[]},{\"level\":2,\"title\":\"缓存更新策略\",\"slug\":\"缓存更新策略\",\"link\":\"#缓存更新策略\",\"children\":[{\"level\":3,\"title\":\"数据库缓存不一致解决方案\",\"slug\":\"数据库缓存不一致解决方案\",\"link\":\"#数据库缓存不一致解决方案\",\"children\":[]},{\"level\":3,\"title\":\"实现商铺和缓存与数据库双写一致\",\"slug\":\"实现商铺和缓存与数据库双写一致\",\"link\":\"#实现商铺和缓存与数据库双写一致\",\"children\":[]}]},{\"level\":2,\"title\":\"缓存穿透\",\"slug\":\"缓存穿透\",\"link\":\"#缓存穿透\",\"children\":[]},{\"level\":2,\"title\":\"缓存雪崩\",\"slug\":\"缓存雪崩\",\"link\":\"#缓存雪崩\",\"children\":[]},{\"level\":2,\"title\":\"缓存击穿\",\"slug\":\"缓存击穿\",\"link\":\"#缓存击穿\",\"children\":[{\"level\":3,\"title\":\"互斥锁\",\"slug\":\"互斥锁\",\"link\":\"#互斥锁\",\"children\":[]},{\"level\":3,\"title\":\"逻辑过期\",\"slug\":\"逻辑过期\",\"link\":\"#逻辑过期\",\"children\":[]}]},{\"level\":2,\"title\":\"封装工具类\",\"slug\":\"封装工具类\",\"link\":\"#封装工具类\",\"children\":[]}],\"readingTime\":{\"minutes\":16.83,\"words\":5049},\"filePathRelative\":\"docs/Redis/Redis 实战/2. 商户查询缓存.md\",\"localizedDate\":\"2022年10月26日\"}")

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

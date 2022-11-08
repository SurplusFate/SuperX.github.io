export const data = JSON.parse("{\"key\":\"v-d6b988de\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/5.%20%E7%A7%92%E6%9D%80%E4%BC%98%E5%8C%96.html\",\"title\":\"秒杀优化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"秒杀优化 异步秒杀思路 我们来回顾一下下单流程 当用户发起请求，此时会请求 nginx，nginx 会访问到 tomcat，而 tomcat 中的程序，会进行串行操作，分成如下几个步骤\\r\\\" 1. 查询优惠卷\\\"\\r\\\"\\\"\\r\\\" 2. 判断秒杀库存是否足够\\\"\\r\\\"\\\"\\r\\\" 3. 查询订单\\\"\\r\\\"\\\"\\r\\\" 4. 校验是否是一人一单\\\"\\r\\\"\\\"\\r\\\" 5. 扣减库存\\\"\\r\\\"\\\"\\r\\\" 6. \",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/5.%20%E7%A7%92%E6%9D%80%E4%BC%98%E5%8C%96.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"秒杀优化\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"异步秒杀思路\",\"slug\":\"异步秒杀思路\",\"link\":\"#异步秒杀思路\",\"children\":[]},{\"level\":2,\"title\":\"Redis 完成秒杀资格判断\",\"slug\":\"redis-完成秒杀资格判断\",\"link\":\"#redis-完成秒杀资格判断\",\"children\":[]},{\"level\":2,\"title\":\"基于阻塞队列实现秒杀优化\",\"slug\":\"基于阻塞队列实现秒杀优化\",\"link\":\"#基于阻塞队列实现秒杀优化\",\"children\":[]}],\"readingTime\":{\"minutes\":7.44,\"words\":2232},\"filePathRelative\":\"docs/Redis/Redis 实战/5. 秒杀优化.md\"}")

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

export const data = JSON.parse("{\"key\":\"v-601f751a\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/6.%20Redis%20%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html\",\"title\":\"Redis 消息队列\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"Redis 消息队列 认识消息队列 什么是消息队列：字面意思就是存放消息的队列。最简单的消息队列模型包括 3 个角色：\\r消息队列：存储和管理消息，也被称为消息代理（Message Broker）; \\r生产者：发送消息到消息队列; \\r消费者：从消息队列获取消息并处理消息; 使用队列的好处在于 解耦：所谓解耦，举一个生活中的例子就是：快递员(生产者)把快递放到快\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/6.%20Redis%20%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis 消息队列\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"认识消息队列\",\"slug\":\"认识消息队列\",\"link\":\"#认识消息队列\",\"children\":[]},{\"level\":2,\"title\":\"基于 List 实现消息队列\",\"slug\":\"基于-list-实现消息队列\",\"link\":\"#基于-list-实现消息队列\",\"children\":[]},{\"level\":2,\"title\":\"基于 PubSub 的消息队列\",\"slug\":\"基于-pubsub-的消息队列\",\"link\":\"#基于-pubsub-的消息队列\",\"children\":[]},{\"level\":2,\"title\":\"基于 Stream 的消息队列\",\"slug\":\"基于-stream-的消息队列\",\"link\":\"#基于-stream-的消息队列\",\"children\":[{\"level\":3,\"title\":\"消费者组\",\"slug\":\"消费者组\",\"link\":\"#消费者组\",\"children\":[]},{\"level\":3,\"title\":\"实现异步秒杀下单\",\"slug\":\"实现异步秒杀下单\",\"link\":\"#实现异步秒杀下单\",\"children\":[]}]}],\"readingTime\":{\"minutes\":7.31,\"words\":2193},\"filePathRelative\":\"docs/Redis/Redis 实战/6. Redis 消息队列.md\"}")

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

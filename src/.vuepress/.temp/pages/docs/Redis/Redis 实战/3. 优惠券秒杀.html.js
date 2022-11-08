export const data = JSON.parse("{\"key\":\"v-daa15a76\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/3.%20%E4%BC%98%E6%83%A0%E5%88%B8%E7%A7%92%E6%9D%80.html\",\"title\":\"优惠卷秒杀\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"优惠卷秒杀 全局唯一 ID 当用户抢购时，就会生成订单并保存到 tbvoucherorder 这张表中，而订单表如果使用数据库自增 ID 就存在一些问题：\\rid 的规律性太明显; \\r受单表数据量的限制; 如果我们的 id 具有太明显的规则，用户或者说商业对手很容易猜测出来我们的一些敏感信息，比如商城在一天时间内，卖出了多少单，这明显不合适。 随着我们商城规模\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/3.%20%E4%BC%98%E6%83%A0%E5%88%B8%E7%A7%92%E6%9D%80.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"优惠卷秒杀\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"全局唯一 ID\",\"slug\":\"全局唯一-id\",\"link\":\"#全局唯一-id\",\"children\":[{\"level\":3,\"title\":\"Redis 实现全局唯一 Id\",\"slug\":\"redis-实现全局唯一-id\",\"link\":\"#redis-实现全局唯一-id\",\"children\":[]}]},{\"level\":2,\"title\":\"添加优惠卷\",\"slug\":\"添加优惠卷\",\"link\":\"#添加优惠卷\",\"children\":[]},{\"level\":2,\"title\":\"实现秒杀\",\"slug\":\"实现秒杀\",\"link\":\"#实现秒杀\",\"children\":[]},{\"level\":2,\"title\":\"库存超卖问题\",\"slug\":\"库存超卖问题\",\"link\":\"#库存超卖问题\",\"children\":[]},{\"level\":2,\"title\":\"一人一单\",\"slug\":\"一人一单\",\"link\":\"#一人一单\",\"children\":[]},{\"level\":2,\"title\":\"集群环境下的并发问题\",\"slug\":\"集群环境下的并发问题\",\"link\":\"#集群环境下的并发问题\",\"children\":[]}],\"readingTime\":{\"minutes\":14.15,\"words\":4245},\"filePathRelative\":\"docs/Redis/Redis 实战/3. 优惠券秒杀.md\"}")

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

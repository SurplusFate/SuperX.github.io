export const data = JSON.parse("{\"key\":\"v-273c2260\",\"path\":\"/docs/Spring%E7%B3%BB%E5%88%97/SpringCloud/4.%20Ribbon%20%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html\",\"title\":\"4. Ribbon 负载均衡\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"date\":\"2022-11-07T00:00:00.000Z\",\"order\":4,\"category\":[\"SpringCloud\"],\"summary\":\"4. Ribbon 负载均衡 上一节中，我们添加了@LoadBalanced 注解，即可实现负载均衡功能，这是什么原理呢？ 4.1.负载均衡原理 SpringCloud 底层其实是利用了一个名为 Ribbon 的组件，来实现负载均衡功能的。 那么我们发出的请求明明是 ，怎么变成了 的呢？ 4.2.源码跟踪 为什么我们只输入了 service 名称就可以访问了\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Spring%E7%B3%BB%E5%88%97/SpringCloud/4.%20Ribbon%20%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"4. Ribbon 负载均衡\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-11-07T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"4.1.负载均衡原理\",\"slug\":\"_4-1-负载均衡原理\",\"link\":\"#_4-1-负载均衡原理\",\"children\":[]},{\"level\":2,\"title\":\"4.2.源码跟踪\",\"slug\":\"_4-2-源码跟踪\",\"link\":\"#_4-2-源码跟踪\",\"children\":[{\"level\":3,\"title\":\"4.2.1.LoadBalancerIntercepor\",\"slug\":\"_4-2-1-loadbalancerintercepor\",\"link\":\"#_4-2-1-loadbalancerintercepor\",\"children\":[]},{\"level\":3,\"title\":\"4.2.2.LoadBalancerClient\",\"slug\":\"_4-2-2-loadbalancerclient\",\"link\":\"#_4-2-2-loadbalancerclient\",\"children\":[]},{\"level\":3,\"title\":\"4.2.3.负载均衡策略 IRule\",\"slug\":\"_4-2-3-负载均衡策略-irule\",\"link\":\"#_4-2-3-负载均衡策略-irule\",\"children\":[]},{\"level\":3,\"title\":\"4.2.4.总结\",\"slug\":\"_4-2-4-总结\",\"link\":\"#_4-2-4-总结\",\"children\":[]}]},{\"level\":2,\"title\":\"4.3.负载均衡策略\",\"slug\":\"_4-3-负载均衡策略\",\"link\":\"#_4-3-负载均衡策略\",\"children\":[{\"level\":3,\"title\":\"4.3.1.负载均衡策略\",\"slug\":\"_4-3-1-负载均衡策略\",\"link\":\"#_4-3-1-负载均衡策略\",\"children\":[]},{\"level\":3,\"title\":\"4.3.2.自定义负载均衡策略\",\"slug\":\"_4-3-2-自定义负载均衡策略\",\"link\":\"#_4-3-2-自定义负载均衡策略\",\"children\":[]}]},{\"level\":2,\"title\":\"4.4.饥饿加载\",\"slug\":\"_4-4-饥饿加载\",\"link\":\"#_4-4-饥饿加载\",\"children\":[]}],\"readingTime\":{\"minutes\":4.77,\"words\":1430},\"filePathRelative\":\"docs/Spring系列/SpringCloud/4. Ribbon 负载均衡.md\",\"localizedDate\":\"2022年11月7日\"}")

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

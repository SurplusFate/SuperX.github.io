export const data = JSON.parse("{\"key\":\"v-539e4d22\",\"path\":\"/docs/Dubbo/7.%20Dubbo%20%E7%9A%84%E9%85%8D%E7%BD%AE.html\",\"title\":\"Dubbo 的配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"date\":\"2022-10-09T00:00:00.000Z\",\"order\":7,\"category\":[\"Dubbo\"],\"summary\":\"Dubbo 的配置 关闭检查 dubbo 缺省会在启动时检查依赖的服务是否可用，不可用时会抛出异常，阻止 Spring 初始化完成，以便上线时，能及早发现问题，默认 check=true。通过 check=\\\"false\\\"关闭检查，比如，测试时，有些服务不关心，或者出现了循环依赖，必须有一方先启动。 关闭某个服务的启动时检查: 关闭注册中心启动时检查: 默认启\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Dubbo/7.%20Dubbo%20%E7%9A%84%E9%85%8D%E7%BD%AE.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Dubbo 的配置\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-09T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"关闭检查\",\"slug\":\"关闭检查\",\"link\":\"#关闭检查\",\"children\":[]},{\"level\":2,\"title\":\"重试次数\",\"slug\":\"重试次数\",\"link\":\"#重试次数\",\"children\":[]},{\"level\":2,\"title\":\"超时时间\",\"slug\":\"超时时间\",\"link\":\"#超时时间\",\"children\":[{\"level\":3,\"title\":\"dubbo 消费端\",\"slug\":\"dubbo-消费端\",\"link\":\"#dubbo-消费端\",\"children\":[]},{\"level\":3,\"title\":\"dubbo 服务端\",\"slug\":\"dubbo-服务端\",\"link\":\"#dubbo-服务端\",\"children\":[]}]},{\"level\":2,\"title\":\"版本号\",\"slug\":\"版本号\",\"link\":\"#版本号\",\"children\":[]}],\"readingTime\":{\"minutes\":1.82,\"words\":546},\"filePathRelative\":\"docs/Dubbo/7. Dubbo 的配置.md\",\"localizedDate\":\"2022年10月9日\"}")

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

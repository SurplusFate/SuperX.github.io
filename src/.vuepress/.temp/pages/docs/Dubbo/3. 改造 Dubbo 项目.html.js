export const data = JSON.parse("{\"key\":\"v-a8070a8e\",\"path\":\"/docs/Dubbo/3.%20%E6%94%B9%E9%80%A0%20Dubbo%20%E9%A1%B9%E7%9B%AE.html\",\"title\":\"改造 dubbo 项目\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"date\":\"2022-10-09T00:00:00.000Z\",\"order\":3,\"category\":[\"Dubbo\"],\"summary\":\"改造 dubbo 项目 抽象分散在多个项目中的公共接口，实体类，异常，工具类到一个项目中，在其他项目如服务提供者，消费者共用公共的资源。\\r\\\" 抽取公共部分\\\" 公共部分 建立一个普通的 maven 项目, 放置实体类, 接口等. link-orderservice-provider maven 依赖 实体类 mapper 接口 接口实现 link-orders\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Dubbo/3.%20%E6%94%B9%E9%80%A0%20Dubbo%20%E9%A1%B9%E7%9B%AE.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"改造 dubbo 项目\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-09T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"公共部分\",\"slug\":\"公共部分\",\"link\":\"#公共部分\",\"children\":[]},{\"level\":2,\"title\":\"接口实现\",\"slug\":\"接口实现\",\"link\":\"#接口实现\",\"children\":[]},{\"level\":2,\"title\":\"访问层\",\"slug\":\"访问层\",\"link\":\"#访问层\",\"children\":[]}],\"readingTime\":{\"minutes\":3.38,\"words\":1013},\"filePathRelative\":\"docs/Dubbo/3. 改造 Dubbo 项目.md\",\"localizedDate\":\"2022年10月9日\"}")

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

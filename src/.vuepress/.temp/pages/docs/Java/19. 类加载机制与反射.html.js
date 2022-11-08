export const data = JSON.parse("{\"key\":\"v-0310d85c\",\"path\":\"/docs/Java/19.%20%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%9C%BA%E5%88%B6%E4%B8%8E%E5%8F%8D%E5%B0%84.html\",\"title\":\"19. 类加载机制与反射\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"date\":\"2022-08-18T00:00:00.000Z\",\"order\":19,\"category\":[\"java\"],\"summary\":\"19. 类加载机制与反射 类的加载、连接和初始化 系统可能在第一次使用某个类时加载该类，也可能采用预加载机制来加载某个类。 JVM 和类 当我们调用 Java 命令运行某个 Java 程序时，该命令将会启动一个 Java 虚拟机进程，不管该 Java 程序有多么复杂，该程序启动了多少个线程，它们都处于该 Java 虚拟机进程里。 同一个 JVM 的所有线程、\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Java/19.%20%E7%B1%BB%E5%8A%A0%E8%BD%BD%E6%9C%BA%E5%88%B6%E4%B8%8E%E5%8F%8D%E5%B0%84.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"19. 类加载机制与反射\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-08-18T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"类的加载、连接和初始化\",\"slug\":\"类的加载、连接和初始化\",\"link\":\"#类的加载、连接和初始化\",\"children\":[{\"level\":3,\"title\":\"JVM 和类\",\"slug\":\"jvm-和类\",\"link\":\"#jvm-和类\",\"children\":[]},{\"level\":3,\"title\":\"类的加载\",\"slug\":\"类的加载\",\"link\":\"#类的加载\",\"children\":[]},{\"level\":3,\"title\":\"类的连接\",\"slug\":\"类的连接\",\"link\":\"#类的连接\",\"children\":[]},{\"level\":3,\"title\":\"类的初始化\",\"slug\":\"类的初始化\",\"link\":\"#类的初始化\",\"children\":[]},{\"level\":3,\"title\":\"类初始化的时机\",\"slug\":\"类初始化的时机\",\"link\":\"#类初始化的时机\",\"children\":[]}]},{\"level\":2,\"title\":\"类加载器\",\"slug\":\"类加载器\",\"link\":\"#类加载器\",\"children\":[{\"level\":3,\"title\":\"类加载器简介\",\"slug\":\"类加载器简介\",\"link\":\"#类加载器简介\",\"children\":[]},{\"level\":3,\"title\":\"类加载机制\",\"slug\":\"类加载机制\",\"link\":\"#类加载机制\",\"children\":[]},{\"level\":3,\"title\":\"创建并使用自定义的类加载器\",\"slug\":\"创建并使用自定义的类加载器\",\"link\":\"#创建并使用自定义的类加载器\",\"children\":[]},{\"level\":3,\"title\":\"URLClassLoader 类\",\"slug\":\"urlclassloader-类\",\"link\":\"#urlclassloader-类\",\"children\":[]}]},{\"level\":2,\"title\":\"反射\",\"slug\":\"反射\",\"link\":\"#反射\",\"children\":[{\"level\":3,\"title\":\"Class 类\",\"slug\":\"class-类\",\"link\":\"#class-类\",\"children\":[]},{\"level\":3,\"title\":\"访问字段\",\"slug\":\"访问字段\",\"link\":\"#访问字段\",\"children\":[]},{\"level\":3,\"title\":\"调用方法\",\"slug\":\"调用方法\",\"link\":\"#调用方法\",\"children\":[]},{\"level\":3,\"title\":\"调用构造方法\",\"slug\":\"调用构造方法\",\"link\":\"#调用构造方法\",\"children\":[]},{\"level\":3,\"title\":\"获取继承关系\",\"slug\":\"获取继承关系\",\"link\":\"#获取继承关系\",\"children\":[]},{\"level\":3,\"title\":\"获取父类的 Class\",\"slug\":\"获取父类的-class\",\"link\":\"#获取父类的-class\",\"children\":[]},{\"level\":3,\"title\":\"动态代理\",\"slug\":\"动态代理\",\"link\":\"#动态代理\",\"children\":[]}]}],\"readingTime\":{\"minutes\":39.24,\"words\":11773},\"filePathRelative\":\"docs/Java/19. 类加载机制与反射.md\",\"localizedDate\":\"2022年8月18日\"}")

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

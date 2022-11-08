export const data = JSON.parse("{\"key\":\"v-8767b658\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/4.%20%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html\",\"title\":\"分布式锁\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"分布式锁 基本原理和实现 分布式锁：满足分布式系统或集群模式下多进程可见并且互斥的锁。 分布式锁的核心思想就是让大家都使用同一把锁，只要大家使用的是同一把锁，那么我们就能锁住线程，不让线程进行，让程序串行执行，这就是分布式锁的核心思路 那么分布式锁他应该满足一些什么样的条件呢？ 可见性：多个线程都能看到相同的结果，注意：这个地方说的可见性并不是并发编程中指的\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/4.%20%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"分布式锁\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"基本原理和实现\",\"slug\":\"基本原理和实现\",\"link\":\"#基本原理和实现\",\"children\":[{\"level\":3,\"title\":\"核心思路\",\"slug\":\"核心思路\",\"link\":\"#核心思路\",\"children\":[]},{\"level\":3,\"title\":\"实现分布式锁\",\"slug\":\"实现分布式锁\",\"link\":\"#实现分布式锁\",\"children\":[]}]},{\"level\":2,\"title\":\"分布式锁误删情况\",\"slug\":\"分布式锁误删情况\",\"link\":\"#分布式锁误删情况\",\"children\":[{\"level\":3,\"title\":\"解决误删问题\",\"slug\":\"解决误删问题\",\"link\":\"#解决误删问题\",\"children\":[]}]},{\"level\":2,\"title\":\"原子性问题\",\"slug\":\"原子性问题\",\"link\":\"#原子性问题\",\"children\":[{\"level\":3,\"title\":\"Lua 脚本\",\"slug\":\"lua-脚本\",\"link\":\"#lua-脚本\",\"children\":[]},{\"level\":3,\"title\":\"Java 调用 Lua 脚本\",\"slug\":\"java-调用-lua-脚本\",\"link\":\"#java-调用-lua-脚本\",\"children\":[]}]},{\"level\":2,\"title\":\"分布式锁-redission\",\"slug\":\"分布式锁-redission\",\"link\":\"#分布式锁-redission\",\"children\":[{\"level\":3,\"title\":\"功能介绍\",\"slug\":\"功能介绍\",\"link\":\"#功能介绍\",\"children\":[]},{\"level\":3,\"title\":\"快速入门\",\"slug\":\"快速入门\",\"link\":\"#快速入门\",\"children\":[]},{\"level\":3,\"title\":\"可重入锁原理\",\"slug\":\"可重入锁原理\",\"link\":\"#可重入锁原理\",\"children\":[]},{\"level\":3,\"title\":\"锁重试和 WatchDog 机制\",\"slug\":\"锁重试和-watchdog-机制\",\"link\":\"#锁重试和-watchdog-机制\",\"children\":[]},{\"level\":3,\"title\":\"锁的 MutiLock 原理\",\"slug\":\"锁的-mutilock-原理\",\"link\":\"#锁的-mutilock-原理\",\"children\":[]}]}],\"readingTime\":{\"minutes\":18.62,\"words\":5586},\"filePathRelative\":\"docs/Redis/Redis 实战/4. 分布式锁.md\"}")

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

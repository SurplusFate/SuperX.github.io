export const data = JSON.parse("{\"key\":\"v-0e141eb0\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/1.%20%E7%9F%AD%E4%BF%A1%E7%99%BB%E5%BD%95.html\",\"title\":\"短信登录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"date\":\"2022-10-25T00:00:00.000Z\",\"order\":1,\"category\":[\"Redis\"],\"summary\":\"短信登录 基本流程 发送验证码： 用户在提交手机号后，会校验手机号是否合法，如果不合法，则要求用户重新输入手机号，如果手机号合法，后台此时生成对应的验证码，同时将验证码进行保存，然后再通过短信的方式将验证码发送给用户 短信验证码登录、注册： 用户将验证码和手机号进行输入，后台从 session 中拿到当前验证码，然后和用户输入的验证码进行校验，如果不一致，则\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/1.%20%E7%9F%AD%E4%BF%A1%E7%99%BB%E5%BD%95.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"短信登录\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-25T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"基本流程\",\"slug\":\"基本流程\",\"link\":\"#基本流程\",\"children\":[]},{\"level\":2,\"title\":\"Redis 代替 session\",\"slug\":\"redis-代替-session\",\"link\":\"#redis-代替-session\",\"children\":[{\"level\":3,\"title\":\"设计 key 的结构\",\"slug\":\"设计-key-的结构\",\"link\":\"#设计-key-的结构\",\"children\":[]},{\"level\":3,\"title\":\"设计 key 的具体细节\",\"slug\":\"设计-key-的具体细节\",\"link\":\"#设计-key-的具体细节\",\"children\":[]},{\"level\":3,\"title\":\"整体访问流程\",\"slug\":\"整体访问流程\",\"link\":\"#整体访问流程\",\"children\":[]}]},{\"level\":2,\"title\":\"基于 Redis 实现短信登录\",\"slug\":\"基于-redis-实现短信登录\",\"link\":\"#基于-redis-实现短信登录\",\"children\":[{\"level\":3,\"title\":\"生成验证码\",\"slug\":\"生成验证码\",\"link\":\"#生成验证码\",\"children\":[]},{\"level\":3,\"title\":\"登录\",\"slug\":\"登录\",\"link\":\"#登录\",\"children\":[]},{\"level\":3,\"title\":\"拦截\",\"slug\":\"拦截\",\"link\":\"#拦截\",\"children\":[]},{\"level\":3,\"title\":\"解决状态登录刷新问题\",\"slug\":\"解决状态登录刷新问题\",\"link\":\"#解决状态登录刷新问题\",\"children\":[]}]}],\"readingTime\":{\"minutes\":7.02,\"words\":2105},\"filePathRelative\":\"docs/Redis/Redis 实战/1. 短信登录.md\",\"localizedDate\":\"2022年10月25日\"}")

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

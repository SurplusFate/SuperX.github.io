export const data = JSON.parse("{\"key\":\"v-2e736faa\",\"path\":\"/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/8.%20%E5%A5%BD%E5%8F%8B%E5%85%B3%E6%B3%A8.html\",\"title\":\"好友关注\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"好友关注 关注和取消关注 针对用户的操作：可以对用户进行关注和取消关注功能。 实现思路： 需求：基于该表数据结构，实现两个接口：\\r关注和取关接口; \\r判断是否关注的接口; 关注是 User 之间的关系，是博主与粉丝的关系，数据库中有一张 tb_follow 表来标示： 注意: 这里需要把主键修改为自增长，简化开发。 FollowController Foll\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Redis/Redis%20%E5%AE%9E%E6%88%98/8.%20%E5%A5%BD%E5%8F%8B%E5%85%B3%E6%B3%A8.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"好友关注\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"关注和取消关注\",\"slug\":\"关注和取消关注\",\"link\":\"#关注和取消关注\",\"children\":[]},{\"level\":2,\"title\":\"共同关注\",\"slug\":\"共同关注\",\"link\":\"#共同关注\",\"children\":[]},{\"level\":2,\"title\":\"Feed 流实现方案\",\"slug\":\"feed-流实现方案\",\"link\":\"#feed-流实现方案\",\"children\":[]},{\"level\":2,\"title\":\"推送到粉丝收件箱\",\"slug\":\"推送到粉丝收件箱\",\"link\":\"#推送到粉丝收件箱\",\"children\":[]},{\"level\":2,\"title\":\"实现分页查询收邮箱\",\"slug\":\"实现分页查询收邮箱\",\"link\":\"#实现分页查询收邮箱\",\"children\":[]}],\"readingTime\":{\"minutes\":10.86,\"words\":3259},\"filePathRelative\":\"docs/Redis/Redis 实战/8. 好友关注.md\"}")

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

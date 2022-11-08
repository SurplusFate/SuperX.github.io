export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"空~\",\"description\":\"学习记录\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/logo.png\"}],[\"script\",{\"type\":\"text/javascript\",\"src\":\"/base.js\"}],[\"link\",{\"rel\":\"stylesheet\",\"type\":\"text/css\",\"href\":\"//at.alicdn.com/t/c/font_3721935_vu3qq5p7wsp.css\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

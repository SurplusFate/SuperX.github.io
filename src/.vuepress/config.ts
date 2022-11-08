import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  base: "/",
  title: "空~",
  description: "学习记录",
  lang: "zh-CN",
  theme: theme,
  head: [
    // 设置 favor.ico，.vuepress/public 下
    ["link", { rel: "icon", href: "/logo.png" }],
    ["script", { type: "text/javascript", src: "/base.js" }],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "//at.alicdn.com/t/c/font_3721935_vu3qq5p7wsp.css",
      },
    ],
  ],
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== "/",
    }),
    mdEnhancePlugin({
      // 开启标记
      mark: true,
      // 启用代码块分组
      codetabs: true,
      // 启用自定义容器
      container: true,
    }),
  ],
});

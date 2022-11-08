import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  //是否在页面标题旁显示图标。
  titleIcon: true,
  //是否显示页面最后更新时间
  lastUpdated: true,
  //是否展示编辑此页链接
  editLink: true,
  //是否显示页面贡献者
  contributors: false,
  // 当前网站部署到的域名。
  hostname: "https://SurplusFate.github.io",
  // 文章显示的默认作者
  author: {
    name: "空~",
    url: "https://SurplusFate.github.io",
  },
  // 图标资源cdn
  iconAssets: "iconfont",
  // logo
  logo: "/logo.svg",
  // 源码仓库
  repo: "https://github.com/SurplusFate/SurplusFate.github.io",

  docsDir: "src",

  sidebar: sidebar,
  navbar: navbar,
  toc: true,
  darkmode: "switch",
  themeColor: {
    blue: "#cc21f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  plugins: {
    blog: {
      autoExcerpt: true,
    },
  },
  // 页脚
  footer: "嗨~~",
  // 显示页脚
  displayFooter: false,
  // 页面信息
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
});

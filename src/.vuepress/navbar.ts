import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "home",
    link: "/",
  },
  {
    text: "学习指南",
    icon: "creative",
    link: "/docs/guide/",
  },
  {
    text: "Java 基础",
    icon: "java",
    prefix: "/docs/Java 基础",
    children: [
      {
        text: "JavaSE",
        icon: "java",
        link: "/java/1. Java语言概述与开发环境",
      },
      {
        text: "MySQL",
        icon: "mysql",
        link: "/MySQL/1. 创建与管理数据库",
      },
      {
        text: "JavaWeb",
        icon: "Apache",
        link: "/JavaWeb/0. Maven",
      },
      {
        text: "Mybatis",
        icon: "stack",
        link: "/Mybatis/",
      },
    ],
  },
  {
    text: "Spring系列",
    icon: "stack",
    prefix: "/docs/Spring 系列/",
    children: [
      {
        text: "Spring",
        icon: "module",
        link: "Spring/1. IOC",
      },
      {
        text: "SpringMVC",
        icon: "module",
        link: "SpringMVC/",
      },
      {
        text: "SpringBoot",
        icon: "module",
        children: [
          {
            text: "SpringBoot",
            icon: "module",
            link: "SpringBoot/",
          },
          {
            text: "Dubbo",
            icon: "tool",
            link: "SpringBoot/Dubbo/",
          },
        ],
      },
      {
        text: "SpringCloud",
        icon: "module",
        link: "SpringCloud/1. 认识微服务",
      },
    ],
  },
  {
    text: "Git",
    icon: "git",
    link: "/docs/Git/",
  },
  {
    text: "Vue",
    icon: "vue",
    link: "/docs/Vue/",
  },
  {
    text: "Linux",
    icon: "linux",
    link: "/docs/Linux/",
  },
  {
    text: "Redis",
    icon: "redis",
    prefix: "/docs/Redis/",
    children: [
      {
        text: "Redis 基础",
        icon: "redis",
        link: "Redis 基础/",
      },
      {
        text: "Redis 实战",
        icon: "redis",
        link: "Redis 实战/1. 短信登录",
      },
    ],
  },
  {
    text: "设计模式",
    icon: "tool",
    link: "/docs/设计模式/1.设计模式七大原则",
  },
  {
    text: "项目笔记",
    icon: "tool",
    link: "/docs/项目笔记/谷粒商城",
  },
  {
    text: "小记",
    icon: "write",
    link: "/docs/小记/",
  },
]);

export const data = JSON.parse("{\"key\":\"v-8d685680\",\"path\":\"/docs/Linux/6.%20JavaEE%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html\",\"title\":\"JavaEE 环境搭建\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"date\":\"2022-10-12T00:00:00.000Z\",\"order\":6,\"category\":[\"linux\"],\"summary\":\"JavaEE 环境搭建 检查当前环境是否已经安装对应的软件包 如 java mysql 安装 JDK 原文: Linux CentOS 7 安装 JDK 详细步骤 - 腾讯云开发者社区 - 腾讯云 (tencent.com) 第一种方式：yum 命令安装 检索包含 java 的列表 如果有结果类似如下： 选择需要的 JDK 版本 yum 命令安装： 检查版本\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/Linux/6.%20JavaEE%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"JavaEE 环境搭建\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-12T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"安装 JDK\",\"slug\":\"安装-jdk\",\"link\":\"#安装-jdk\",\"children\":[{\"level\":3,\"title\":\"第一种方式：yum 命令安装\",\"slug\":\"第一种方式-yum-命令安装\",\"link\":\"#第一种方式-yum-命令安装\",\"children\":[]},{\"level\":3,\"title\":\"第二种方式：下载后安装\",\"slug\":\"第二种方式-下载后安装\",\"link\":\"#第二种方式-下载后安装\",\"children\":[]}]},{\"level\":2,\"title\":\"安装 MySQL\",\"slug\":\"安装-mysql\",\"link\":\"#安装-mysql\",\"children\":[{\"level\":3,\"title\":\"更新 yum\",\"slug\":\"更新-yum\",\"link\":\"#更新-yum\",\"children\":[]},{\"level\":3,\"title\":\"安装 wget 工具\",\"slug\":\"安装-wget-工具\",\"link\":\"#安装-wget-工具\",\"children\":[]},{\"level\":3,\"title\":\"使用 wget 下载 mysql yum 源\",\"slug\":\"使用-wget-下载-mysql-yum-源\",\"link\":\"#使用-wget-下载-mysql-yum-源\",\"children\":[]},{\"level\":3,\"title\":\"添加 mysql yum 源\",\"slug\":\"添加-mysql-yum-源\",\"link\":\"#添加-mysql-yum-源\",\"children\":[]},{\"level\":3,\"title\":\"安装 yum 工具 yum-utils\",\"slug\":\"安装-yum-工具-yum-utils\",\"link\":\"#安装-yum-工具-yum-utils\",\"children\":[]},{\"level\":3,\"title\":\"查看可用的 mysql\",\"slug\":\"查看可用的-mysql\",\"link\":\"#查看可用的-mysql\",\"children\":[]},{\"level\":3,\"title\":\"查看所有的 mysql 版本\",\"slug\":\"查看所有的-mysql-版本\",\"link\":\"#查看所有的-mysql-版本\",\"children\":[]},{\"level\":3,\"title\":\"使用指定版本 MySQL\",\"slug\":\"使用指定版本-mysql\",\"link\":\"#使用指定版本-mysql\",\"children\":[]},{\"level\":3,\"title\":\"查看当前启用的 MySQL 版本\",\"slug\":\"查看当前启用的-mysql-版本\",\"link\":\"#查看当前启用的-mysql-版本\",\"children\":[]},{\"level\":3,\"title\":\"安装 MySQL\",\"slug\":\"安装-mysql-1\",\"link\":\"#安装-mysql-1\",\"children\":[]},{\"level\":3,\"title\":\"有些同学会出现此问题\",\"slug\":\"有些同学会出现此问题\",\"link\":\"#有些同学会出现此问题\",\"children\":[]},{\"level\":3,\"title\":\"启动 MySQL\",\"slug\":\"启动-mysql\",\"link\":\"#启动-mysql\",\"children\":[]},{\"level\":3,\"title\":\"查看 MySQL 服务状态\",\"slug\":\"查看-mysql-服务状态\",\"link\":\"#查看-mysql-服务状态\",\"children\":[]},{\"level\":3,\"title\":\"初始化 MySQL\",\"slug\":\"初始化-mysql\",\"link\":\"#初始化-mysql\",\"children\":[]},{\"level\":3,\"title\":\"设置 MySQL 密码策略\",\"slug\":\"设置-mysql-密码策略\",\"link\":\"#设置-mysql-密码策略\",\"children\":[]},{\"level\":3,\"title\":\"设置简单密码\",\"slug\":\"设置简单密码\",\"link\":\"#设置简单密码\",\"children\":[]},{\"level\":3,\"title\":\"远程连接\",\"slug\":\"远程连接\",\"link\":\"#远程连接\",\"children\":[]},{\"level\":3,\"title\":\"刷新权限\",\"slug\":\"刷新权限\",\"link\":\"#刷新权限\",\"children\":[]},{\"level\":3,\"title\":\"开机启动\",\"slug\":\"开机启动\",\"link\":\"#开机启动\",\"children\":[]},{\"level\":3,\"title\":\"配置防火墙\",\"slug\":\"配置防火墙\",\"link\":\"#配置防火墙\",\"children\":[]},{\"level\":3,\"title\":\"测试链接\",\"slug\":\"测试链接\",\"link\":\"#测试链接\",\"children\":[]}]},{\"level\":2,\"title\":\"安装 TOMCAT\",\"slug\":\"安装-tomcat\",\"link\":\"#安装-tomcat\",\"children\":[]},{\"level\":2,\"title\":\"查看文件安装路径\",\"slug\":\"查看文件安装路径\",\"link\":\"#查看文件安装路径\",\"children\":[]},{\"level\":2,\"title\":\"查询运行文件所在路径\",\"slug\":\"查询运行文件所在路径\",\"link\":\"#查询运行文件所在路径\",\"children\":[]}],\"readingTime\":{\"minutes\":5.31,\"words\":1594},\"filePathRelative\":\"docs/Linux/6. JavaEE环境搭建.md\",\"localizedDate\":\"2022年10月12日\"}")

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

export const data = JSON.parse("{\"key\":\"v-2772d6b3\",\"path\":\"/docs/MySQL/3.%20%E7%BA%A6%E6%9D%9F%E7%AE%A1%E7%90%86.html\",\"title\":\"3. 约束管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"note\",\"date\":\"2022-08-22T00:00:00.000Z\",\"order\":3,\"category\":[\"MySQL\"],\"summary\":\"3. 约束管理 约束的作用： 确保数据的完整性：数据的一致性和正确性。 约束分类：\\r单列约束：每个约束只约束一列。; \\r多列约束：每个约束约束多列数据。; MySQL 中常用的六类约束： 1. 主键约束 主键约束是使用最频繁的约束。在设计数据表时，一般情况下，都会要求表中设置一个主键。 主键是表的一个特殊字段，该字段能唯一标识该表中的每条信息。例如，学生信息\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://SurplusFate.github.io/docs/MySQL/3.%20%E7%BA%A6%E6%9D%9F%E7%AE%A1%E7%90%86.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"空~\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"3. 约束管理\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-08-22T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"主键约束\",\"slug\":\"主键约束\",\"link\":\"#主键约束\",\"children\":[{\"level\":3,\"title\":\"在创建表时设置主键约束\",\"slug\":\"在创建表时设置主键约束\",\"link\":\"#在创建表时设置主键约束\",\"children\":[]},{\"level\":3,\"title\":\"在修改表时添加主键约束\",\"slug\":\"在修改表时添加主键约束\",\"link\":\"#在修改表时添加主键约束\",\"children\":[]},{\"level\":3,\"title\":\"删除主键约束\",\"slug\":\"删除主键约束\",\"link\":\"#删除主键约束\",\"children\":[]}]},{\"level\":2,\"title\":\"主键自增\",\"slug\":\"主键自增\",\"link\":\"#主键自增\",\"children\":[{\"level\":3,\"title\":\"指定自增字段初始值\",\"slug\":\"指定自增字段初始值\",\"link\":\"#指定自增字段初始值\",\"children\":[]},{\"level\":3,\"title\":\"自增字段值不连续\",\"slug\":\"自增字段值不连续\",\"link\":\"#自增字段值不连续\",\"children\":[]}]},{\"level\":2,\"title\":\"外键约束\",\"slug\":\"外键约束\",\"link\":\"#外键约束\",\"children\":[{\"level\":3,\"title\":\"在创建表时设置外键约束\",\"slug\":\"在创建表时设置外键约束\",\"link\":\"#在创建表时设置外键约束\",\"children\":[]},{\"level\":3,\"title\":\"在修改表时添加外键约束\",\"slug\":\"在修改表时添加外键约束\",\"link\":\"#在修改表时添加外键约束\",\"children\":[]},{\"level\":3,\"title\":\"删除外键约束\",\"slug\":\"删除外键约束\",\"link\":\"#删除外键约束\",\"children\":[]}]},{\"level\":2,\"title\":\"唯一约束\",\"slug\":\"唯一约束\",\"link\":\"#唯一约束\",\"children\":[{\"level\":3,\"title\":\"在创建表时设置唯一约束\",\"slug\":\"在创建表时设置唯一约束\",\"link\":\"#在创建表时设置唯一约束\",\"children\":[]},{\"level\":3,\"title\":\"在修改表时添加唯一约束\",\"slug\":\"在修改表时添加唯一约束\",\"link\":\"#在修改表时添加唯一约束\",\"children\":[]},{\"level\":3,\"title\":\"删除唯一约束\",\"slug\":\"删除唯一约束\",\"link\":\"#删除唯一约束\",\"children\":[]}]},{\"level\":2,\"title\":\"检查约束\",\"slug\":\"检查约束\",\"link\":\"#检查约束\",\"children\":[{\"level\":3,\"title\":\"选取设置检查约束的字段\",\"slug\":\"选取设置检查约束的字段\",\"link\":\"#选取设置检查约束的字段\",\"children\":[]},{\"level\":3,\"title\":\"在创建表时设置检查约束\",\"slug\":\"在创建表时设置检查约束\",\"link\":\"#在创建表时设置检查约束\",\"children\":[]},{\"level\":3,\"title\":\"在修改表时添加检查约束\",\"slug\":\"在修改表时添加检查约束\",\"link\":\"#在修改表时添加检查约束\",\"children\":[]},{\"level\":3,\"title\":\"删除检查约束\",\"slug\":\"删除检查约束\",\"link\":\"#删除检查约束\",\"children\":[]}]},{\"level\":2,\"title\":\"默认值约束\",\"slug\":\"默认值约束\",\"link\":\"#默认值约束\",\"children\":[{\"level\":3,\"title\":\"在创建表时设置默认值约束\",\"slug\":\"在创建表时设置默认值约束\",\"link\":\"#在创建表时设置默认值约束\",\"children\":[]},{\"level\":3,\"title\":\"在修改表时添加默认值约束\",\"slug\":\"在修改表时添加默认值约束\",\"link\":\"#在修改表时添加默认值约束\",\"children\":[]},{\"level\":3,\"title\":\"删除默认值约束\",\"slug\":\"删除默认值约束\",\"link\":\"#删除默认值约束\",\"children\":[]}]},{\"level\":2,\"title\":\"非空约束\",\"slug\":\"非空约束\",\"link\":\"#非空约束\",\"children\":[{\"level\":3,\"title\":\"在创建表时设置非空约束\",\"slug\":\"在创建表时设置非空约束\",\"link\":\"#在创建表时设置非空约束\",\"children\":[]},{\"level\":3,\"title\":\"在修改表时添加非空约束\",\"slug\":\"在修改表时添加非空约束\",\"link\":\"#在修改表时添加非空约束\",\"children\":[]},{\"level\":3,\"title\":\"删除非空约束\",\"slug\":\"删除非空约束\",\"link\":\"#删除非空约束\",\"children\":[]}]},{\"level\":2,\"title\":\"查看表中的约束\",\"slug\":\"查看表中的约束\",\"link\":\"#查看表中的约束\",\"children\":[]}],\"readingTime\":{\"minutes\":22.08,\"words\":6623},\"filePathRelative\":\"docs/MySQL/3. 约束管理.md\",\"localizedDate\":\"2022年8月22日\"}")

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

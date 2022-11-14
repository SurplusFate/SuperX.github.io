---
icon: note
category:
  - note
---

# @RestController 指定主路径无效踩坑

指定路径时写成了 `@RestController("user")`, 测试接口的时候发现无效.

查看源码关于 `value` 的说明:

![image](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211140837741.png)

这仅仅是建议值, 实际应该使用 `@RequestMapping("/user")` 指定.

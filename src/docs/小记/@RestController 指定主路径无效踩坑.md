指定路径时写成了 `@RestController("user")`, 测试接口的时候发现无效.

查看源码关于 `value` 的说明:

![image](https://img2022.cnblogs.com/blog/2451333/202210/2451333-20221029150635222-1973883434.png)

这仅仅是建议值, 实际应该使用 `@RequestMapping("/user")` 指定.

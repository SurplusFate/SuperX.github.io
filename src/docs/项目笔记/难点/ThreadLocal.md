# ThreadLocal

[ThreadLocal 详解 | JavaGuide](https://javaguide.cn/java/concurrent/threadlocal.html#threadlocal项目中使用实战)

基于静态 ThreadLocal 封装了线程隔离的全局上下文对象，便于在请求内部存取用户信息，减少用户远程查询次数。

```java
@Slf4j
public class BaseContext {
    private BaseContext() {
    }

    private static final ThreadLocal<Long> threadLocal = new ThreadLocal<>();

    /**
     * 设置值
     * @param id
     */
    public static void setCurrentId(Long id){
        threadLocal.set(id);
    }

    /**
     * 获取值
     * @return
     */
    public static Long getCurrentId(){
        return threadLocal.get();
    }

    /**
     * 删除值
     */
    public static void removeCurrentId(){
        log.info("清空threadLocal:{}",threadLocal.get());
        threadLocal.remove();
    }
}
```

在每次请求的时候时候创建

```java
public boolean isLogin(FilterChain filterChain, HttpServletRequest request, HttpServletResponse response, String objKey) throws IOException, ServletException {
    if (request.getSession().getAttribute(objKey) != null) {
        log.info("用户已登录，用户id为：{}", request.getSession().getAttribute(objKey));

        Long empId = (Long) request.getSession().getAttribute(objKey);

        BaseContext.setCurrentId(empId);

        filterChain.doFilter(request, response);
        return true;
    }
    return false;
}
```

用完就删除

```java
@Override
public void insertFill(MetaObject metaObject) {
    log.info("公共字段自动填充[insert]...");
    log.info(metaObject.toString());

    metaObject.setValue("createTime", LocalDateTime.now());
    metaObject.setValue("updateTime",LocalDateTime.now());
    metaObject.setValue("createUser",BaseContext.getCurrentId());
    metaObject.setValue("updateUser",BaseContext.getCurrentId());
    BaseContext.removeCurrentId();
}
```

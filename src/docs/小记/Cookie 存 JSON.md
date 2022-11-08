---
icon: note
date: 2022-09-24
order: 3
category:
  - node
---

# Cookie 存 JSON

## JackJSON 的使用

相关依赖:

```xml
<!--        json工具-->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
    <version>2.9.0</version>
</dependency>
<!--        json工具-->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.0</version>
</dependency>
```

使用需要先创建一个 ObjectMapper 对象:

```xml
public static ObjectMapper objectMapper = new ObjectMapper();
```

使用 writeValueAsString 方法将对象转换成一个 JSON 字符串并返回.

```java
objectMapper.writeValueAsString(valueType)
```

使用 readValue 方法将一个 JSON 字符串转换成一个对象, 需要指定对象类型.

```java
objectMapper.readValue(JSONstring, Object.class);
```

## Cookie

回顾, 什么是 Cookie?

> 1. Cookie 翻译过来是饼干的意思。
> 2. Cookie 是服务器通知客户端保存键值对的一种技术。
> 3. 客户端有了 Cookie 后，每次请求都发送给服务器。
> 4. 每个 Cookie 的大小不能超过 4kb

### 创建 Cookie

Cookie 只能存普通字符串, 不能存特殊符号: 空格, 方括号, 圆括号, 等于号, 逗号, 双引号, 斜杠, 问号, @符号, 冒号, 分号都不能直接作为 Cookie 的内容.

存特殊符号可以先对字符串进行 URL 编码转化.

创建 Cookie:

```java
//1 创建 Cookie 对象
Cookie cookie = new Cookie("key", "value");
// 设置过期时间, 默认为(-1)浏览器关闭时过期
int maxAge = 60 * 60 * 24 * 10;
cookie.setMaxAge(maxAge);
// 设置生效目录(包含子目录)
cookie.setPath("/");
//2 通知客户端保存
httpServletResponse.addCookie(cookie);
```

Cookie 存 JSON:

JSON 中有特殊符号, 需要先对 JSON 字符串 进行 URL 编码转化:

```java
URLEncoder.encode(JSONstring, "utf-8");
```

1. URLEncoder.encode(String s, String enc)
   使用指定的编码机制将字符串转换为 application/x-www-form-urlencoded 格式
2. URLDecoder.decode(String s, String enc)
   使用指定的编码机制对 application/x-www-form-urlencoded 字符串解码

### 服务器获取 Cookie

先获取全部 Cookie 会返回一个数组, 然后遍历该数组.

> cookie.getName 返回 key 值.
>
> cookie.getValue 返回 value 值.

```java
Cookie[] requestCookies = request.getCookies();
for (Cookie cookie : requestCookies) {
    if (name.equals(cookie.getName())) {
        return cookie;
    }
}
```

封装为一个工具类:

```java
public static Cookie findCookie(String name, Cookie[] cookies) {
    if (name == null || cookies == null || cookies.length == 0) {
        return null;
    }
    for (Cookie cookie : cookies) {
        if (name.equals(cookie.getName())) {
            return cookie;
        }
    }
    return null;
}
```

### 修改或删除 Cookie

直接创建一个同名的 Cookie 即可覆盖旧 Cookie, 将过期时间设置为 0 将立即过期.

```java
 new Cookie("userCookie", "").setMaxAge(0);
```

### JSON 工具类处理 Cookie

```java
public class JSONUtils {
    public static ObjectMapper objectMapper = new ObjectMapper();

    public static String toJSON(Object obj) {
        try {
            return URLEncoder.encode(objectMapper.writeValueAsString(obj), "utf-8");
        } catch (JsonProcessingException | UnsupportedEncodingException e) {
            throw new RuntimeException(e + "JSONUtils: toJSON have a exception");
        }
    }

    public static <T> T faceJSON(String content, Class<T> objClass) {
        try {
            return objectMapper.readValue(URLDecoder.decode(content, "utf-8"), objClass);
        } catch (IOException e) {
            throw new RuntimeException(e + "JSONUtils: faceJSON have a exception");
        }
    }
}
```

### 实现自动登录

```java
// 是否开启自动登录
if (autoLogin) {
    int maxAge = 60 * 60 * 24 * 10;
    // 只保存账号密码, 不保存其他信息
    String s = JSONUtils.toJSON(new TblUser(username, password));
    Cookie cookie = new Cookie("userCookie", s);
    cookie.setMaxAge(maxAge);
    cookie.setPath("/");
    httpServletResponse.addCookie(cookie);
}
```

验证 Cookie:

```java
// 获取cookie
Cookie[] requestCookies = request.getCookies();
Cookie cookie = CookieUtils.findCookie("userCookie", requestCookies);
// 验证cookie
if (cookie != null) {
    TblUser user = JSONUtils.faceJSON(cookie.getValue(), TblUser.class);
    userLoginService = userService.verifyUserService(user.getLoginAct(), user.getLoginPwd());
    request.getSession().setAttribute("user", user);
}
```

## 保存与删除用户信息

- `request.setAttribute(“num”, value);`

> 有效范围是一个请求范围, 不发送请求的界面无法获取到 value 的值, jsp 界面获取使用 EL 表达式 `${num}`；
> 只能在一个 request 内有效, 如果重定向客户端, 将取不到值.
>
> request 在当次的请求的 URL 之间有效, 比如你在请求某个 servlet, 那么你提交的信息可以使用 `request.getAttribute(“num”)` 方式获得, 而当你再次跳转之后, 这些信息将不存在.

- `request.getSession().setAttribute(“num”, value)；`

> getSession() 将返回一个 HttpSession 对象.
>
> 有效范围是一个 session 周期, 在 session 过期之前或者用户关闭页面之前是有效的, jsp 界面获取使用 EL 表达式 `${num}`；
>
> 可以通过 sessionID 得到自己的 session，将参数存储在 session 中，即使重定向客户端也没事，这个值可以在多个页面上使用.
>
> 比如访问一个网站, 登录后用户信息被保存到 session 中, 在 session 过期之前或者用户关闭页面之前, 用户信息可以通过 `request.getSession().getAttribute();` 方式获得.

保存用户信息使用 session 较好(用户名, 头像, 购物车信息...).

```java
HttpSession session = request.getSession();
session.setAttribute("user", tblUser);
// 设置 session 过期时间
session.setMaxInactiveInterval(60 * 60 * 24 * 10);
// 删除信息
session.removeAttribute("user");
```

## 改密踢下线

```java
if (verifyUser != null) {
    // 密码更新
    int i = tblUserService.UpdatePassword(verifyUser.getLoginAct(), MD5Util.getMD5(newPwd));
    // 清除浏览器保存的数据
    new Cookie("userCookie", "").setMaxAge(0);
    request.getSession().removeAttribute("user");
}
```

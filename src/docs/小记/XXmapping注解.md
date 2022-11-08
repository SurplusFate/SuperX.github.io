---
icon: note
date: 2022-09-24
order: 2
category:
  - SSM
---

# @\*\*Mapping

使用 @\*\*Mapping 注解都是直接在他的括号中加 servlet 的名称.

默认只写一个参数的话，就是给 value 赋值.

第一个 `/` 可省略(访问根目录不能省).

```java
@RequestMapping("/hello")
// 等价于
@RequestMapping(value = "hello")
```

value 属性是一个字符串类型的**数组**，表示请求映射能够匹配多个请求地址所对应的请求.

```java
@RequestMapping(value = {"/other", "/other2", "/other3"})
public String toOther(){
    return "other";
```

## method 属性

@RequestMapping 的 method 属性通过请求的请求方式（get 或 post）匹配请求映射, 他也是一个**数组**, 但是是 RequestMethod 类的数组, 表示请求映射能够匹配多种请求方式的请求.

```java
@RequestMapping(value = "/",method = RequestMethod.POST)
// 等价于
@PostMapping("/")
```

@RequestMapping 的派生注解:

> **处理 get 请求的映射 —> @GetMapping
> 处理 post 请求的映射 —> @PostMapping
> 处理 put 请求的映射 —> @PutMapping
> 处理 delete 请求的映射 —> @DeleteMapping**

## params 属性

params 属性通过请求的请求参数匹配请求映射, params 属性也是一个字符串类型的数组, 可以通过以下四种表达式设置请求参数和请求映射的匹配关系:

> 1. "param": 表示要求请求映射所匹配的请求必须携带 param 请求参数
> 2. "!param": 表示要求请求映射所匹配的请求不能携带 param 请求参数
> 3. "param=value": 表示要求请求映射所匹配的请求必须携带 param 请求参数且 param=value
> 4. "param!=value": 表示要求请求映射所匹配的请求必须携带 param 请求参数且 param!=value

```java
@RequestMapping(
        value = {"/other", "other2", "other3"},
        method = {RequestMethod.GET, RequestMethod.POST},
        params = {"username=Keeling","password!=123456"}
)
public String toOther(){
    return "other";
}
```

要想访问就得把 username 和 password 给他(username **必须是** Keeling, password **必须不是** 123456).

## RequestParam 注解

设置处理器方法参数的默认值.

> value: 初始参数
>
> required: 是否必须有该参数
>
> defaultValue: 初始参数的值

```java
public ModelAndView getType(
    @RequestParam(value = "page", required = false, defaultValue = "1") Integer page,
    @RequestParam(value = "size", required = false) Integer size){}
```

没有传入 page 参数时将使用初始参数和初始值.

```java
public ModelAndView getType(@RequestParam(defaultValue = "1") int pn){}
```

pn 初始为 1.

## ant 风格的路径

这种路径的优先级比完整路径低, 可以用来做统一跳转.

> ? 表示任意的单个字符
>
> \* 表示任意的 0 个或多个字符
>
> \*\*/ 表示任意的一层或多层目录

```java
@RequestMapping("h?h/*")
public String toDemo(){
    return "demo";
}
```

匹配所有 html 后缀的请求.

```java
@Controller
public class ViewController {
    @RequestMapping("/**/*.html")
    public String pager(HttpServletRequest request) {
        // 从请求中截取路径名和页面名
        String requestURI = request.getRequestURI();
        //   /settings/dictionary/index.html  ----> settings/dictionary/index
        return requestURI.substring(1, requestURI.lastIndexOf("."));
    }
}
```

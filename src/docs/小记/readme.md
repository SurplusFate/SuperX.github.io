# 小记

## mysql 查不出 null

MYSQL 不能使用等于、不等于、大于、小于等算术运算符查询 NULL；

## mapper 文件与接口不在同一个文件夹下

```xml
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource"/>
    <property name="configLocation" value="classpath:mybatis.xml"/>
    <property name="mapperLocations" value="classpath:com/demo/mapper/xml/*.xml"/>
</bean>
```

## mybatis 中的 0 和空串

mybatis 中`<if>`判断会把 0 和空串划等号，底层源码会把空串转成 0.

## 常用注解

`@Autowired`: 自动装配, 如果装配失败则配合@Qualifier(value = "xxx")使用
`@Nullable`: 表示该字段可以为 null
`@Resource`: 自动装配
`@Component`:组件, 放在类上,说明该类被 Spring 管理了, 就是 bean

## mybatis 中集合自动映射的问题

```xml
<select id="getTeacherById" resultMap="teacher">
  select id, name
  from teacher
  where id = #{id};
</select>
<resultMap id="teacher" type="teacher">
  <collection property="studentList" column="id" ofType="student" select="studentByTeacher"/>
</resultMap>
<select id="studentByTeacher" resultType="student">
  select *
  from student
  where tid = #{id};
</select>
```

因为 id 属性名与数据库的字段名一样, 所以想让它自动映射,在 resultMap 中没有 resultSet,查询结果 id 为 0.在手动为 id 设置了映射
`<result property="id" column="id"/>`后正常.

**原因: 因为两张表都有 id 字段,自动映射到 student 了**
_新问题:为什么映射到 student 了?_
_猜测:自动映射会先映射后表,且不会分辨同名字段_

## Filter

1. Filter 过滤器它是 JavaWeb 的三大组件之一。三大组件分别是：Servlet 程序、Listener 监听器、Filter 过滤器
2. Filter 过滤器它是 JavaEE 的规范。也就是接口
3. Filter 过滤器它的作用是：拦截请求，过滤响应。

拦截请求常见的应用场景有：

1. 权限检查
2. 日记操作
3. 事务管理
   ……等等

Filter 过滤器的使用步骤：

1. 编写一个类去实现 Filter 接口
2. 实现过滤方法 doFilter()
3. 到 web.xml 中去配置 Filter 的拦截路径

```java
public class AdminFilter implements Filter {
    /**
    * doFilter 方法，专门用于拦截请求。可以做权限检查
    */
    @Override public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpSession session = httpServletRequest.getSession();
        Object user = session.getAttribute("user");
        // 如果等于 null，说明还没有登录
        if (user == null) {
            servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest,servletResponse); return;
        } else {
            // 让程序继续往下访问用户的目标资源
            filterChain.doFilter(servletRequest,servletResponse);
        }
    }
}
```

web.xml 中的配置：

```xml
<!--filter 标签用于配置一个 Filter 过滤器-->
    <filter>
    <!--给 filter 起一个别名-->
    <filter-name>AdminFilter</filter-name>
    <!--配置 filter 的全类名-->
    <filter-class>com.atguigu.filter.AdminFilter</filter-class>
    </filter>
<!--filter-mapping 配置 Filter 过滤器的拦截路径-->
        <filter-mapping>
        <!--filter-name 表示当前的拦截路径给哪个 filter 使用-->
        <filter-name>AdminFilter</filter-name>
        <!--url-pattern 配置拦截路径 / 表示请求地址为：http://ip:port/工程路径/ 映射到 IDEA 的 web 目录 /admin/* 表示请求地址为：http://ip:port/工程路径/admin/* -->
        <url-pattern>/admin/*</url-pattern>
        </filter-mapping>
```

### Filter 的生命周期

Filter 的生命周期包含几个方法

1. 构造器方法
2. init 初始化方法
   第 1，2 步，在 web 工程启动的时候执行（Filter 已经创建）
3. doFilter 过滤方法
   第 3 步，每次拦截到请求，就会执行
4. destroy 销毁
   第 4 步，停止 web 工程的时候，就会执行（停止 web 工程，也会销毁 Filter 过滤器）

### Filter 的拦截路径

#### 精确匹配

`<url-pattern>/target.jsp</url-pattern>`
以上配置的路径，表示请求地址必须为：<http://ip:port/工程路径/target.jsp>

#### 目录匹配

`<url-pattern>/admin/*</url-pattern>`
以上配置的路径，表示请求地址必须为：<http://ip:port/工程路径/admin/_>

#### 后缀名匹配

`<url-pattern>*.html</url-pattern>`
以上配置的路径，表示请求地址必须以.html 结尾才会拦截到

`<url-pattern>*.do</url-pattern>`
以上配置的路径，表示请求地址必须以.do 结尾才会拦截到

`<url-pattern>*.action</url-pattern>`
以上配置的路径，表示请求地址必须以.action 结尾才会拦截到

> Filter 过滤器它只关心请求的地址是否匹配，不关心请求的资源是否存在！！！

## Cookie

### 什么是 Cookie?

1. Cookie 翻译过来是饼干的意思。
2. Cookie 是服务器通知客户端保存键值对的一种技术。
3. 客户端有了 Cookie 后，每次请求都发送给服务器。
4. 每个 Cookie 的大小不能超过 4kb

### 如何创建 Cookie

```java
//1 创建 Cookie 对象
Cookie cookie = new Cookie("key4", "value4");
//2 通知客户端保存
Cookie resp.addCookie(cookie);
//1 创建 Cookie 对象
Cookie cookie1 = new Cookie("key5", "value5");
//2 通知客户端保存
Cookie resp.addCookie(cookie1);
resp.getWriter().write("Cookie 创建成功");
```

### 服务器如何获取 Cookie

服务器获取客户端的 Cookie 只需要一行代码：req.getCookies():Cookie[]
Cookie 的工具类：

```java
public class CookieUtils {
  /**
    * 查找指定名称的 Cookie 对象
    * @param name
    * @param cookies
    * @return
    */
    public static Cookie findCookie(String name , Cookie[] cookies){
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
}
```

Servlet 程序中的代码：

```java
protected void getCookie(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie[] cookies = req.getCookies();
    for (Cookie cookie : cookies) {
        // getName 方法返回 Cookie 的 key（名）
        // getValue 方法返回 Cookie 的 value 值
        resp.getWriter().write("Cookie[" + cookie.getName() + "=" + cookie.getValue() + "] <br/>");
    }
    Cookie iWantCookie = CookieUtils.findCookie("key1", cookies);
    // for (Cookie cookie : cookies) {
    // if ("key2".equals(cookie.getName())) {
    // iWantCookie = cookie; // break;
    // }
    // }
    // 如果不等于 null，说明赋过值，也就是找到了需要的  Cookie
    if (iWantCookie != null) {
        resp.getWriter().write("找到了需要的 Cookie");
    }
}
```

### Cookie 值的修改

方案一：

1. 先创建一个要修改的同名（指的就是 key）的 Cookie 对象
2. 在构造器，同时赋于新的 Cookie 值。
3. 调用 response.addCookie( Cookie );

```java
// 方案一：
// 1、先创建一个要修改的同名的 Cookie 对象
// 2、在构造器，同时赋于新的 Cookie 值。
Cookie cookie = new Cookie("key1","newValue1");
// 3、调用 response.addCookie( Cookie ); 通知 客户端 保存修改
resp.addCookie(cookie);
```

方案二：

1. 先查找到需要修改的 Cookie 对象
2. 调用 setValue()方法赋于新的 Cookie 值。 3.调用 response.addCookie()通知客户端保存修改

```java
// 方案二：
// 1、先查找到需要修改的 Cookie 对象
Cookie cookie = CookieUtils.findCookie("key2", req.getCookies());
if (cookie != null) {
    // 2、调用 setValue()方法赋于新的 Cookie 值。
    cookie.setValue("newValue2");
    // 3、调用 response.addCookie()通知客户端保存修改
    resp.addCookie(cookie);
}
```

### Cookie 生命控制

Cookie 的生命控制指的是如何管理 Cookie 什么时候被销毁（删除）
setMaxAge()
正数，表示在指定的秒数后过期
负数，表示浏览器一关，Cookie 就会被删除（默认值是-1）
零，表示马上删除 Cookie

```java
/**
* 设置存活 1 个小时的 Cooie
* @param req
* @param resp
* @throws ServletException
* @throws IOException
*/
protected void life3600(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie cookie = new Cookie("life3600", "life3600");
    cookie.setMaxAge(60 * 60);
    // 设置 Cookie 一小时之后被删除。无效
    resp.addCookie(cookie);
    resp.getWriter().write("已经创建了一个存活一小时的 Cookie");
}
/**
* 马上删除一个 Cookie
* @param req
* @param resp
* @throws ServletException
* @throws IOException
*/
protected void deleteNow(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
// 先找到你要删除的 Cookie 对象
    Cookie cookie = CookieUtils.findCookie("key4", req.getCookies());
    if (cookie != null) {
        // 调用 setMaxAge(0); cookie.setMaxAge(0);
        // 表示马上删除，都不需要等待浏览器关闭
        // 调用 response.addCookie(cookie);
        resp.addCookie(cookie);
        resp.getWriter().write("key4 的 Cookie 已经被删除");
    }
}
/**
* 默认的会话级别的 Cookie
* @param req
* @param resp
* @throws ServletException
* @throws IOException
*/
protected void defaultLife(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie cookie = new Cookie("defalutLife","defaultLife");
    cookie.setMaxAge(-1);//设置存活时间
    resp.addCookie(cookie);
    }
```

### Cookie 有效路径 Path 的设置

Cookie 的 path 属性可以有效的过滤哪些 Cookie 可以发送给服务器, 哪些不发。

path 属性是通过请求的地址来进行有效的过滤。

CookieA

path=/工程路径

CookieB

path=/工程路径/abc

请求地址如下：

`http://ip:port/工程路径/a.html`

CookieA 发送

CookieB 不发送

`http://ip:port/工程路径/abc/a.html`

CookieA 发送

CookieB 发送

```java
protected void testPath(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie cookie = new Cookie("path1", "path1");
    // getContextPath() ===>>>> 得到工程路径
    cookie.setPath( req.getContextPath() + "/abc" );
    // ===>>>> /工程路径/abc
    resp.addCookie(cookie);
    resp.getWriter().write("创建了一个带有 Path 路径的 Cookie"); }
```

### Cookie 存储 JSON

Cookie 限制大多数浏览器存储支持最大为 **4096 字节**的 Cookie。 由于这限制了 Cookie 的大小，最好用 Cookie 来存储少量数据，或者存储用户 ID 之类的标识符。

　　1. Cookie 的兼容性问题

Cookie 的格式有 2 个不同的版本，第一个版本，我们称为 Cookie Version 0，是最初由 Netscape 公司制定的，也被几乎所有的浏览器支持。而较新的版本，Cookie Version 1，则是根据 RFC 2109 文档制定的。为了确保兼容性，JAVA 规定，前面所提到的涉及 Cookie 的操作都是针对旧版本的 Cookie 进行的。而新版本的 Cookie 目前还不被 Javax.servlet.http.Cookie 包所支持。

　　2. Cookie 的内容

同样的 Cookie 的内容的字符限制针对不同的 Cookie 版本也有不同。在 Cookie Version 0 中，某些特殊的字符，例如：空格，方括号，圆括号，等于号（=），逗号，双引号，斜杠，问号，@符号，冒号，分号都不能作为 Cookie 的内容。

虽然在 Cookie Version 1 规定中放宽了限制，可以使用这些字符，但是考虑到新版本的 Cookie 规范目前仍然没有为所有的浏览器所支持，因而为保险起见，我们应该在 Cookie 的内容中尽量避免使用这些字符。

使用 Cookie 存储json 则需要对 json 字符串中的符号进行特殊处理: **把数据用 URL 编码转化**

#### URLEncoder和 URLDecoder 的作用和使用

1. URLEncoder.encode(String s, String enc)
   使用指定的编码机制将字符串转换为 application/x-www-form-urlencoded 格式
2. URLDecoder.decode(String s, String enc)
   使用指定的编码机制对 application/x-www-form-urlencoded 字符串解码

## 数据的封装和抽取 BeanUtils 的使用

BeanUtils 工具类，它可以一次性的把所有请求的参数注入到 JavaBean 中。
BeanUtils 工具类，经常用于把 Map 中的值注入到 JavaBean 中，或者是对象属性值的拷贝操作。
BeanUtils 它不是 Jdk 的类。而是第三方的工具类。所以需要导包。

1. 导入需要的 jar 包：
   commons-beanutils-1.8.0.jar
   commons-logging-1.1.1.jar
2. 编写 WebUtils 工具类使用：
   WebUtils 工具类：

```java
public class WebUtils {
/**
*
把 Map 中的值注入到对应的 JavaBean 属性中。
*
@param value* @param bean
*/
public static <T> T copyParamToBean( Map value , T bean ){
    try {
            System.out.println("注入之前：" + bean);
            /**
            * 把所有请求的参数都注入到 user 对象中
            */
            BeanUtils.populate(bean, value);
            System.out.println("注入之后：" + bean);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return bean;
    }
}
```

## 使用反射优化大量 else if 代码

```java
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    String action = req.getParameter("action");
    try {
        // 获取 action 业务鉴别字符串，获取相应的业务 方法反射对象
        Method method = this.getClass().getDeclaredMethod(action, HttpServletRequest.class, HttpServletResponse.class);
        // System.out.println(method);
        // 调用目标业务 方法
        method.invoke(this, req, resp);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

## web 项目层次说明

**Servlet**层用于接收请求并且调用对应 service 层处理请求，是 Java 各层中最接近浏览器的一层
**Service**层主要编写具体业务逻辑，每个 Service 一般包含一组相关的业务逻辑（比如用户管理是一个 Service，文章管理是一个 Service）
**modle/entity**层（统称模型层）就是对应的数据库表的实体类，一般每个模型层类对应一个数据库“表”，一般是用于 ORM 对象关系映射，一方面方便从数据库取数据时保存为类，一方面也方便写入数据库，简而言之就是为了方便操作数据库
**Dao**层一般用于对数据库的具体操作，包括各种具体的增删改查语句和数据库数据和 Java 模型的映射。Util 层主要用于存在项目各层都有可能出现、不好划分到某层中、出现频率较高的功能（类），比如连接数据库、获取系统参数、导出 Excel 表……

## jdbc 编程六步

1.注册驱动

```java
// 1.1.类加载方式注册驱动 (推荐)
Class.forName("com.mysql.jdbc.Driver");
// 1.2.引用的方式注册驱动
DriverManager.registerDriver(new com.mysql.jdbc.Driver());
```

2.获取连接

```java
/*
 * url: 统一资源定位符(网络中某个资源的绝对路径)
 * 例如:https://www.bing.com/ 这个就是URL
 * URL组成部分:
 *   协议
 *   IP
 *   PORT(端口)
 *   资源名
 *
 * jdbc:mysql://127.0.0.1:3306/test1
 *
 * jdbc:mysql://通信协议(mysql协议)
 * 127.0.0.1 服务器ip地址(本地主机)
 * 3306 服务器上软件的端口(mysql数据库端口号)
 * test1 服务器上某个资源名(数据库名)
 *
 * localhost和127.0.0.1一样都是本地主机IP地址
 * */
String user = "root";
String url = "jdbc:mysql://localhost:3306/test1?serverTimezone=UTC";
String password = "root";
connection = DriverManager.getConnection(url, user, password);
```

3.获取操作对象

```java
System.out.println("数据库对象=" + connection);
// 数据库对象=com.mysql.cj.jdbc.ConnectionImpl@306279ee
// 获取操作对象(createStatement是专门用来执行sql语句的)
statement = connection.createStatement();
```

4.执行 sql 语句

```java
/*
 * 专门执行DML语句(insert,delete,update)
 * 返回值是"影响数据库中的记录条数"
 * */
String sql = "insert into test values('小明',1,18)";
int count = statement.executeUpdate(sql);
System.out.println(count == 1 ? "保存成功" : "保存失败");
```

5.处理查询结果集

6.释放资源

```java
/*
 * 为了保证资源一定释放,在finally语句块中关闭资源
 * 并且遵循从小到大依次关闭
 * 分别对其try-catch,互不影响
 * */
finally {
    if (statement != null) {
        try {
            statement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    if (connection != null) {
        try {
            connection.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
}
```

## ideadoc 文档注释模板

class

```java
/**
 * @author ${USER}
 * @className ${NAME}
 * @date ${DATE} ${TIME}
 * @description
 * @since jdk1.8
 */
```

```java
 /**
 * @author $USER$
 * @date $DATE$ $TIME$
 * @description 类描述
 * @since jdk1.8
 */
```

method

```java
*
 * $param$
 * @return $return$
 * @description
 */
```

param 默认值

```groovy
groovyScript("def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();   for(i = 0; i < params.size(); i++) {if(i!=0)result+= '* '; result+='@param ' + params[i] + ((i < (params.size() - 1)) ? '\\n' + '\\t' : ''); }; return result", methodParameters())
```

return 默认值

```groovy
groovyScript("def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split('<').toList(); for(i = 0; i < params.size(); i++) {if(i!=0){result+='<';}; def p1=params[i].split(',').toList(); for(i2 = 0; i2 < p1.size(); i2++) { def p2=p1[i2].split('\\\\.').toList(); result+=p2[p2.size()-1]; if(i2!=p1.size()-1){result+=','} } ; }; return result", methodReturnType())
```

## label 标签导致的 bug

使用 label 标签包含多个 input button 控件后,为 input 设置鼠标移入样式和鼠标点击样式会导致第一个 input 样式不受控制--即使是移入 label 中其他的 input 控件,依然会触发第一个 input 标签的移入样式,但移入第一个 input 标签却不会触发其他 input 的移入样式

## 前端元素说明

### 替换元素

替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。

例如浏览器会根据标签的 src 属性的值来读取图片信息并显示出来，而如果查看(X)HTML 代码，则看不到图片的实际内容；又例如根据标签的 type 属性来决定是显示输入框，还是单选按钮等。

(X)HTML 中的`<img>`、`<input>`、`<textarea>`、`<select>`、`<object>`都是替换元素。这些元素往往没有实际的内容，即是一个空元素，例如：

```html
<img src="”cat.jpg”" /> <input type="submit" name="Submit" value="提交" />
```

浏览器会根据元素的标签类型和属性来显示这些元素。可替换元素也在其显示中生成了框。

### 不可替换元素

(X)HTML 的大多数元素是不可替换元素，即其内容直接表现给用户端（例如浏览器）。例如：

```html
<p>段落的内容</p>
```

段落 `<p>` 是一个不可替换元素，文字“段落的内容”全被显示。

### 块级元素

在视觉上被格式化为块的元素，最明显的特征就是它默认在横向充满其父元素的内容区域，而且在其左右两边没有其他元素，即块级元素默认是独占一行的。

典型的块级元素有：`<div>`、`<p>`、`<h1>`到`<h6>`，等等。

**通过 CSS 设定了浮动（float 属性，可向左浮动或向右浮动）以及设定显示（display）属性为“block”或“list-item”的元素都是块级元素。**

但是浮动元素比较特殊，由于浮动，其旁边可能会有其他元素的存在。而“list-item”（列表项 `<li>`），会在其前面生成圆点符号，或者数字序号。

### 行内元素

行内元素不形成新内容块，即在其左右可以有其他元素，例如`<a>`、`<span>`、`<strong>`等，都是典型的行内级元素。

**display 属性等于“inline”的元素都是行内元素。几乎所有的可替换元素都是行内元素，例如`<img>`、`<input>`等等。**

不过元素的类型也不是固定的，**通过设定 CSS 的 display 属性，可以使行内元素变为块级元素，也可以让块级元素变为行内元素**。

::: warning
替换元素一般有内在尺寸，所以具有 width 和 height，可以设定。例如你不指定 img 的 width 和 height 时，就按其内在尺寸显示，也就是图片被保存的时候的宽度和高度。
对于表单元素，浏览器也有默认的样式，包括宽度和高度。
:::

## SSM tomcat ajax html 前端乱码解决

html 页面乱码

设置 meta

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```

设置响应类型和响应编码

```java
resp.setCharacterEncoding("UTF-8");
resp.setContentType("text/html;charset=UTF-8");
```

tomcat 的 server.xml 配置

(1) 添加 URIEncoding=“UTF-8”

```xml
<Connector port="8080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443" URIEncoding="UTF-8" />

```

```xml
<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" URIEncoding="UTF-8"/>
```

设置 tomcat 中 catalina.bat (jvm 的编码)

在 catalina.bat 中`set "JAVA_OPTS=%JAVA_OPTS% %JSSE_OPTS%"` 下面 添加 : `-Dfile.encoding=UTF8 -Dsun.jnu.encoding=UTF8`
如下所示:

```bat
set "JAVA_OPTS=%JAVA_OPTS% %JSSE_OPTS%"
-Dfile.encoding=UTF8 -Dsun.jnu.encoding=UTF8
```

设置 tomcat 的 web.xml (我的是 108 行左右)修改为下面所示:

```xml
<servlet>
    <servlet-name>default</servlet-name>
    <servlet-class>org.apache.catalina.servlets.DefaultServlet</servlet-class>
    <init-param>
        <param-name>debug</param-name>
        <param-value>0</param-value>
    </init-param>
    <init-param>
        <param-name>fileEncoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>listings</param-name>
        <param-value>false</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>
```

重启 tomcat

> 如果你的 toamcat 已经启动：在命令行中进入 tomcat 安装目录
> C:\tomcat\bin>stutdown
> 之后 C:\tomcatbin>startup
> 这样 tomcat 完成了一次重启。

ajax 前端乱码

在 spring-mvc.xml 中添加：

```xml
<mvc:annotation-driven>
    <mvc:message-converters register-defaults="true">
        <bean class="org.springframework.http.converter.StringHttpMessageConverter">
            <property name="supportedMediaTypes">
                <list>
                    <value>text/html;charset=UTF-8</value>
                    <value>application/json;charset=UTF-8</value>
                </list>
            </property>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
```

## pom.xml 下手动指定资源路径

```xml
<build>
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

## 逆向工程

### 插件

```xml
<!--不要放在pluginManagement内, 否则maven project 中找不到, 与pluginManagement同级-->
<plugins>
    <!--具体插件，逆向工程的操作是以构建过程中插件形式出现的-->
    <plugin>
        <groupId>org.mybatis.generator</groupId>
        <artifactId>mybatis-generator-maven-plugin</artifactId>
        <version>1.3.0</version>

        <!--插件的依赖-->
        <dependencies>
            <!--逆向工程的核心依赖, 缺少该依赖则无法取消注释-->
            <dependency>
                <groupId>org.mybatis.generator</groupId>
                <artifactId>mybatis-generator-core</artifactId>
                <version>1.3.2</version>
            </dependency>
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>5.1.47</version>
            </dependency>
        </dependencies>
    </plugin>
</plugins>
```

### 配置文件

generatorConfig.xml

配置文件名称固定

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<generatorConfiguration>
    <properties resource="config.properties"/>

<!--    MyBatis3:  会生成example 类
        MyBatis3Simple: 不会生成example 类
-->
    <context id="Mysql" targetRuntime="MyBatis3Simple">
        <property name="beginningDelimiter" value="`"/>
        <property name="endingDelimiter" value="`"/>


        <!--支持序列化-->
        <plugin type="org.mybatis.generator.plugins.SerializablePlugin"/>

        <commentGenerator>
            <!-- 是否去除自动生成的注释 true：是 ： false:否 -->
            <property name="suppressAllComments" value="true" />
        </commentGenerator>

        <jdbcConnection driverClass="${jdbc.driverClass}"
                        connectionURL="${jdbc.url}"
                        userId="${jdbc.user}"
                        password="${jdbc.password}">
        </jdbcConnection>

        <javaModelGenerator targetPackage="${targetModelPackage}" targetProject="${targetJavaProject}">
            <!-- enableSubPackages:是否让schema作为包的后缀 -->
            <property name="enableSubPackages" value="false" />
            <!-- 从数据库返回的值被清理前后的空格 -->
            <property name="trimStrings" value="true" />
        </javaModelGenerator>

        <sqlMapGenerator targetPackage="${targetXMLPackage}" targetProject="${targetResourcesProject}">
            <!-- enableSubPackages:是否让schema作为包的后缀 -->
            <property name="enableSubPackages" value="false" />
        </sqlMapGenerator>

        <javaClientGenerator targetPackage="${targetMapperPackage}" targetProject="${targetJavaProject}" type="XMLMAPPER">
            <!-- enableSubPackages:是否让schema作为包的后缀 -->
            <property name="enableSubPackages" value="false" />
        </javaClientGenerator>
        <!-- 指定全部数据库表 -->
        <table tableName="%"/>
    </context>
</generatorConfiguration>
```

### 项目结构

结构中不要事先创建 pojo 包和 dao 包, 要由逆向工程自动生成, 否则会报`StringIndexOutOfBoundsException`

### 逆向工程中生成的 Example 类

打开一个 Example 类我们会看到该类的三个成员变量：

> distinct 字段: 用于指定 DISTINCT 查询。
> orderByClause 字段: 用于指定 ORDER BY 条件,这个条件没有构造方法,直接通过传递字符串值指定。
> oredCriteria 字段: 用于自定义查询条件。

这个类是专门用来对这个单表来查询的类，对该单表的 CURD 操作是脱离 sql 性质的(已经通过逆向工程生成相应的 sql)，直接在 service 层就可以完成相应操作。

逆向工程生成的文件 XxxExample.java 中包含一个 static 的内部类 Criteria ，在 Criteria 中有很多方法，主要是定义 SQL 语句 where 后的查询条件。

## 短语

前进的秘诀是着手开始 - 扇贝
你指尖跃动的电光，是我此生不变的信仰 - 某科学的超电磁炮
你若总想平平凡凡，就永远不知道自己能有多出色
我们如何对待他人，他人就如何对待我们
你不必生而伟大，但要开始变得伟大
挑战让生活趣味盎然，战胜挑战让生活意义非凡
我们登上并非我们所选择的舞台，演出并非我们所选择的剧本

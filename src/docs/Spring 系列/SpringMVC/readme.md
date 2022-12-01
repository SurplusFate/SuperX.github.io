# SpringMVC

1. SpringMVC：是基于 spring 的一个框架， 实际上就是 spring 的一个模块， 专门是做 web 开发的。可以理解为 servlet 的一个升级
2. web 开发底层是 servlet ， 框架是在 servlet 基础上面加入一些功能，让你做 web 开发方便。
3. SpringMVC 就是一个 Spring。 Spring 是容器，ioc 能够管理对象，SpringMVC 能够使用`<bean>`, @Component, @Repository, @Service, @Controller 创建对象，并放入到容器中（SpringMVC 容器）， springmvc 容器中放的是控制器对象，我们要做的是使用@Contorller 创建控制器对象， 把对象放入到 springmvc 容器中， 把创建的对象作为控制器使用
4. 这个控制器对象能接收用户的请求， 显示处理结果，就当做是一个 servlet 使用。
5. 使用@Controller 注解创建的是一个普通类的对象， 不是 Servlet。 springmvc 赋予了控制器对象一些额外的功能。
6. web 开发底层是 servlet， springmvc 中有一个对象是 Servlet ： DispatherServlet(中央调度器)
7. DispatherServlet: 负责接收用户的所有请求， 用户把请求给了 DispatherServlet， 之后 DispatherServlet 把请求转发给我们的 Controller 对象， 最后是 Controller 对象处理请求。
8. index.jsp-----DispatherServlet(Servlet)----转发，分配给---Controller 对象（@Controller 注解创建的对象）

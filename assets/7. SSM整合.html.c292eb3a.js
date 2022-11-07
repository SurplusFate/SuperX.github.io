import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.b3e56b5b.js";const p={},e=t(`<h1 id="_7-ssm-整合" tabindex="-1"><a class="header-anchor" href="#_7-ssm-整合" aria-hidden="true">#</a> 7. SSM 整合</h1><p>SSM: SpringMVC + Spring + MyBati</p><p>SpringMVC: 视图层, 界面层, 负责接收请求, 显示处理结果</p><p>Spring: 业务层, 管理 service, dao, 工具类对象</p><p>MyBatis: 持久层, 访问数据库</p><p>用户发起请求--SpringMVC 接收--Spring 中的 Service 对象--MyBatis 处理数据</p><p>实现步骤：</p><blockquote><ol><li><p>新建 mysql 库, 新建表 student（id auto_increment, name, age）</p></li><li><p>新建 maven web 项目, 加入依赖</p><p>springmvc, spring, mybatis 三个框架的依赖, jackson 依赖, mysql 驱动, druid 连接池, jsp, servlet 依赖</p></li><li><p>写 web.xml</p></li><li><p>注册 DispatcherServlet</p><ol><li>目的: <ol><li>创建 springmvc 容器对象，才能创建 Controller 类对象。</li><li>创建的是 Servlet，才能接受用户的请求。</li></ol></li></ol></li><li><p>注册 spring 的监听器: ContextLoaderListener</p><ol><li>目的: <ol><li>创建 spring 的容器对象, 才能创建 service, dao 等对象。</li><li>注册字符集过滤器, 解决 post 请求乱码的问题</li></ol></li></ol></li><li><p>创建包, Controller 包, service, dao, 实体类包名创建好</p></li><li><p>写 springmvc, spring, mybatis 的配置文件</p><ol><li>springmvc 配置文件</li><li>spring 配置文件</li></ol></li><li><p>mybatis 主配置文件</p></li><li><p>数据库的属性配置文件</p></li><li><p>写代码, dao 接口和 mapper 文件, service 和实现类, controller, 实体类。</p></li><li><p>写 jsp 页面</p></li></ol></blockquote><h2 id="mysql-数据库" tabindex="-1"><a class="header-anchor" href="#mysql-数据库" aria-hidden="true">#</a> mysql 数据库</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> student
<span class="token punctuation">(</span>
  id   <span class="token keyword">int</span> <span class="token keyword">auto_increment</span>
  <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  age  <span class="token keyword">int</span>          <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="maven-依赖" tabindex="-1"><a class="header-anchor" href="#maven-依赖" aria-hidden="true">#</a> maven 依赖</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-webmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.3.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-tx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.5.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.3.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jsp-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.1-b03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.18.20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.9.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.9.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.47<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="web-xml" tabindex="-1"><a class="header-anchor" href="#web-xml" aria-hidden="true">#</a> web.xml</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--注册spring的监听器--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>context-param</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>contextConfigLocation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>classpath:conf/spring.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>context-param</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>listener</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>listener-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.context.ContextLoaderListener<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>listener-class</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>listener</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--注册中央调度器--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.servlet.DispatcherServlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>contextConfigLocation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>classpath:conf/springmvc.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>load-on-startup</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>*.do<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--注册字符集过滤器--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>characterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.filter.CharacterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>encoding<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>utf-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>forceRequestEncoding<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>forceResponseEncoding<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>characterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建包" tabindex="-1"><a class="header-anchor" href="#创建包" aria-hidden="true">#</a> 创建包</h2><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202209151614801.png" alt="20210817175421576_14204"></p><h2 id="编写配置文件" tabindex="-1"><a class="header-anchor" href="#编写配置文件" aria-hidden="true">#</a> 编写配置文件</h2><h3 id="jdbc-properties" tabindex="-1"><a class="header-anchor" href="#jdbc-properties" aria-hidden="true">#</a> jdbc.properties</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">jdbc.driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">jdbc.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/ssm?useSSL=true</span>
<span class="token key attr-name">jdbc.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">jdbc.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mybatis-xml" tabindex="-1"><a class="header-anchor" href="#mybatis-xml" aria-hidden="true">#</a> mybatis.xml</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--类别名--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.domain<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--mapper映射文件--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.dao<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="applicationcontext-xml" tabindex="-1"><a class="header-anchor" href="#applicationcontext-xml" aria-hidden="true">#</a> applicationContext.xml</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/context
                           https://www.springframework.org/schema/context/spring-context.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--spring配置文件： 声明service，dao，工具类等对象--&gt;</span>
  <span class="token comment">&lt;!--声明service的注解@Service所在的包名位置--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.service<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>property-placeholder</span> <span class="token attr-name">location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classpath:conf/jdbc.properties<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--声明数据源，连接数据库--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.alibaba.druid.pool.DruidDataSource<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">init-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>init<span class="token punctuation">&quot;</span></span> <span class="token attr-name">destroy-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${jdbc.url}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${jdbc.username}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${jdbc.password}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--SqlSessionFactoryBean创建SqlSessionFactory--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sqlSessionFactory<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.mybatis.spring.SqlSessionFactoryBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>configLocation<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classpath:conf/mybatis.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--声明mybatis的扫描器，创建dao对象--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.mybatis.spring.mapper.MapperScannerConfigurer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sqlSessionFactoryBeanName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sqlSessionFactory<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>basePackage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.dao<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--事务配置：注解的配置， aspectj的配置--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="springmvc-xml" tabindex="-1"><a class="header-anchor" href="#springmvc-xml" aria-hidden="true">#</a> springmvc.xml</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/context<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>mvc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/mvc<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/context
                           https://www.springframework.org/schema/context/spring-context.xsd
                           http://www.springframework.org/schema/mvc
                           https://www.springframework.org/schema/mvc/spring-mvc.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--springmvc配置文件， 声明controller和其它web相关的对象--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.controller<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!--视图解析器--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.web.servlet.view.InternalResourceViewResolver<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prefix<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/WEB-INF/view/<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>suffix<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>.jsp<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
        1. 响应ajax请求，返回json
        2. 解决静态资源访问问题。
    --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>annotation-driven</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写代码" tabindex="-1"><a class="header-anchor" href="#编写代码" aria-hidden="true">#</a> 编写代码</h2><h3 id="domain-层" tabindex="-1"><a class="header-anchor" href="#domain-层" aria-hidden="true">#</a> domain 层</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dao-层" tabindex="-1"><a class="header-anchor" href="#dao-层" aria-hidden="true">#</a> dao 层</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StudentDao</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
   * 增加学生
   *
   * <span class="token keyword">@param</span> <span class="token parameter">student</span> 新学生
   * <span class="token keyword">@return</span> 受影响的行
   */</span>
    <span class="token keyword">int</span> <span class="token function">insertStudent</span><span class="token punctuation">(</span><span class="token class-name">Student</span> student<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
   * 查询全部
   *
   * <span class="token keyword">@return</span> list
   */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.dao.StudentDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insertStudent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    insert into ssm.student(name, age)
    values (#{name}, #{age});
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectStudents<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>student<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select id, name, age
    from ssm.student;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-层" tabindex="-1"><a class="header-anchor" href="#service-层" aria-hidden="true">#</a> service 层</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StudentService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
   * service
   *
   * <span class="token keyword">@param</span> <span class="token parameter">student</span> 新学生
   * <span class="token keyword">@return</span> 行
   */</span>
    <span class="token keyword">int</span> <span class="token function">addStudent</span><span class="token punctuation">(</span><span class="token class-name">Student</span> student<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
   * 查询
   *
   * <span class="token keyword">@return</span> 全部
   */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;StudentService&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">StudentService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span> <span class="token keyword">private</span> <span class="token class-name">StudentDao</span> studentDao<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">addStudent</span><span class="token punctuation">(</span><span class="token class-name">Student</span> student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> studentDao<span class="token punctuation">.</span><span class="token function">insertStudent</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> studentDao<span class="token punctuation">.</span><span class="token function">selectStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controller-层" tabindex="-1"><a class="header-anchor" href="#controller-层" aria-hidden="true">#</a> controller 层</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/student&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StudentController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span> <span class="token keyword">private</span> <span class="token class-name">StudentService</span> service<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
   * 注册
   *
   * <span class="token keyword">@param</span> <span class="token parameter">student</span> 学生
   * <span class="token keyword">@return</span> 行
   */</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/addStudent.do&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">addStudent</span><span class="token punctuation">(</span><span class="token class-name">Student</span> student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> addStudent <span class="token operator">=</span> service<span class="token punctuation">.</span><span class="token function">addStudent</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>addStudent <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;添加成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;添加失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;fail&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
   * 查询 响应ajax请求
   *
   * <span class="token keyword">@return</span> list
   */</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/queryStudent.do&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> service<span class="token punctuation">.</span><span class="token function">queryStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsp-页面" tabindex="-1"><a class="header-anchor" href="#jsp-页面" aria-hidden="true">#</a> jsp 页面</h2><h3 id="index-jsp" tabindex="-1"><a class="header-anchor" href="#index-jsp" aria-hidden="true">#</a> index.jsp</h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;%
     String basePath = request.getScheme() + &quot;://&quot; +
     request.getServerName() + &quot;:&quot; + request.getServerPort() +
     request.getContextPath() + &quot;/&quot;;
     %&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;功能入口&lt;/title&gt;
        &lt;base href=&quot;&lt;%=basePath%&gt;&quot;/&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;div align=&quot;center&quot;&gt;
          &lt;p&gt;SSM整合的例子&lt;/p&gt;
          &lt;img src=&quot;images/ssm.jpg&quot;/&gt;
          &lt;table&gt;
            &lt;tr&gt;
              &lt;td&gt;&lt;a href=&quot;addStudent.jsp&quot;&gt; 注册学生&lt;/a&gt;&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
              &lt;td&gt;&lt;a href=&quot;listStudent.jsp&quot;&gt;浏览学生&lt;/a&gt;&lt;/td&gt;
            &lt;/tr&gt;
          &lt;/table&gt;
        &lt;/div&gt;
      &lt;/body&gt;
    &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addstudent-jsp" tabindex="-1"><a class="header-anchor" href="#addstudent-jsp" aria-hidden="true">#</a> addStudent.jsp</h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;%
     String basePath = request.getScheme() + &quot;://&quot; +
     request.getServerName() + &quot;:&quot; + request.getServerPort() +
     request.getContextPath() + &quot;/&quot;;
     %&gt;

    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;注册学生&lt;/title&gt;
        &lt;base href=&quot;&lt;%=basePath%&gt;&quot;/&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;div align=&quot;center&quot;&gt;
          &lt;form action=&quot;student/addStudent.do&quot; method=&quot;post&quot;&gt;
            &lt;table&gt;
              &lt;tr&gt;
                &lt;td&gt;姓名：&lt;/td&gt;
                &lt;td&gt;&lt;input type=&quot;text&quot; name=&quot;name&quot;&gt;&lt;/td&gt;
              &lt;/tr&gt;
              &lt;tr&gt;
                &lt;td&gt;年龄：&lt;/td&gt;
                &lt;td&gt;&lt;input type=&quot;text&quot; name=&quot;age&quot;&gt;&lt;/td&gt;
              &lt;/tr&gt;
              &lt;tr&gt;
                &lt;td&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;/td&gt;
                &lt;td&gt;&lt;input type=&quot;submit&quot; value=&quot;注册&quot;&gt;&lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/form&gt;
        &lt;/div&gt;
      &lt;/body&gt;
    &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="liststudent-jsp" tabindex="-1"><a class="header-anchor" href="#liststudent-jsp" aria-hidden="true">#</a> listStudent.jsp</h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;%
     String basePath = request.getScheme() + &quot;://&quot; +
     request.getServerName() + &quot;:&quot; + request.getServerPort() +
     request.getContextPath() + &quot;/&quot;;
     %&gt;
    &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;查询学生ajax&lt;/title&gt;
        &lt;base href=&quot;&lt;%=basePath%&gt;&quot;/&gt;
        &lt;script type=&quot;text/javascript&quot; src=&quot;js/jquery-3.4.1.js&quot;&gt;&lt;/script&gt;
        &lt;script type=&quot;text/javascript&quot;&gt;
          $(function () {
            //在当前页面dom对象加载后，执行loadStudentData（）
            loadStudentData();

            $(&quot;#btnLoader&quot;).click(function () {
              //loadStudentData();
              alert($(&quot;#country &gt; option:selected&quot;).val());

              alert($(&quot;#country &gt; option:selected&quot;).text());
            })
          })

          function loadStudentData() {
            $.ajax({
              url: &quot;student/queryStudent.do&quot;,
              type: &quot;get&quot;,
              dataType: &quot;json&quot;,
              success: function (data) {
                //清除旧的数据
                $(&quot;#info&quot;).html(&quot;&quot;);
                //增加新的数据
                $.each(data, function (i, n) {
                  $(&quot;#info&quot;).append(&quot;&lt;tr&gt;&quot;)
                    .append(&quot;&lt;td&gt;&quot; + n.id + &quot;&lt;/td&gt;&quot;)
                    .append(&quot;&lt;td&gt;&quot; + n.name + &quot;&lt;/td&gt;&quot;)
                    .append(&quot;&lt;td&gt;&quot; + n.age + &quot;&lt;/td&gt;&quot;)
                    .append(&quot;&lt;/tr&gt;&quot;)

                })
              }
            })
          }
        &lt;/script&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;div align=&quot;center&quot;&gt;
          &lt;table&gt;
            &lt;thead&gt;
              &lt;tr&gt;
                &lt;td&gt;学号&lt;/td&gt;
                &lt;td&gt;姓名&lt;/td&gt;
                &lt;td&gt;年龄&lt;/td&gt;
              &lt;/tr&gt;
            &lt;/thead&gt;
            &lt;tbody id=&quot;info&quot;&gt;

            &lt;/tbody&gt;
          &lt;/table&gt;
          &lt;input type=&quot;button&quot; id=&quot;btnLoader&quot; value=&quot;查询数据&quot;&gt;
          &lt;select id=&quot;country&quot;&gt;
            &lt;option value=&quot;1&quot;&gt;中国&lt;/option&gt;
            &lt;option value=&quot;2&quot;&gt;俄罗斯&lt;/option&gt;
            &lt;option value=&quot;3&quot;&gt;西班牙&lt;/option&gt;
          &lt;/select&gt;
        &lt;/div&gt;
      &lt;/body&gt;
    &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-inf-view-success-jsp" tabindex="-1"><a class="header-anchor" href="#web-inf-view-success-jsp" aria-hidden="true">#</a> WEB-INF/view/success.jsp</h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      成功
    &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-inf-view-fail-jsp" tabindex="-1"><a class="header-anchor" href="#web-inf-view-fail-jsp" aria-hidden="true">#</a> WEB-INF/view/fail.jsp</h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      失败
    &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),l=[e];function c(o,i){return s(),a("div",null,l)}const r=n(p,[["render",c],["__file","7. SSM整合.html.vue"]]);export{r as default};

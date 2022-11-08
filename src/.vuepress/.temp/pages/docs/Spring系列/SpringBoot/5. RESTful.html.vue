<template><div><h1 id="_5-restful" tabindex="-1"><a class="header-anchor" href="#_5-restful" aria-hidden="true">#</a> 5. RESTful</h1>
<p>接口: API（Application Programming Interface,应用程序接口）是一些预先定义的接口（如函数、HTTP 接口）,或指<a href="https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6%E7%B3%BB%E7%BB%9F/224122" target="_blank" rel="noopener noreferrer">软件系统<ExternalLinkIcon/></a>不同组成部分衔接的约定. 用来提供<a href="https://baike.baidu.com/item/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F" target="_blank" rel="noopener noreferrer">应用程序<ExternalLinkIcon/></a>与开发人员基于某<a href="https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6" target="_blank" rel="noopener noreferrer">软件<ExternalLinkIcon/></a>或硬件得以访问的一组<a href="https://baike.baidu.com/item/%E4%BE%8B%E7%A8%8B/2390628" target="_blank" rel="noopener noreferrer">例程<ExternalLinkIcon/></a>,而又无需访问源码,或理解内部<a href="https://baike.baidu.com/item/%E5%B7%A5%E4%BD%9C%E6%9C%BA%E5%88%B6/9905789" target="_blank" rel="noopener noreferrer">工作机制<ExternalLinkIcon/></a>的细节.</p>
<p>接口（API）: 可以指访问 servlet, controller 的 url, 或调用其他程序的函数.</p>
<p>架构风格: api 组织方式（样子, 格式）</p>
<p>传统的风格: <a href="http://localhost:9002/mytrans/addStudent?name=lisi&amp;age=26" target="_blank" rel="noopener noreferrer">http://localhost:9002/mytrans/addStudent?name=lisi&amp;age=26<ExternalLinkIcon/></a></p>
<p>在地址上提供了 访问的资源名称 addStudent, 在其后使用了 get 方式传递参数.</p>
<h2 id="rest-架构风格" tabindex="-1"><a class="header-anchor" href="#rest-架构风格" aria-hidden="true">#</a> REST 架构风格</h2>
<p>REST: (英文: Representational State Transfer, 中文: 表现层状态转移)是一种接口的架构风格和设计的理念, 不是标准.</p>
<p>优点: 更简洁,更有层次</p>
<p>表现层状态转移:</p>
<p>表现层:</p>
<blockquote>
<p>表现层就是视图层, 显示资源的, 通过视图页面, jsp 等等显示操作资源的结果.</p>
</blockquote>
<p>状态:</p>
<blockquote>
<p>资源变化</p>
</blockquote>
<p>转移:</p>
<blockquote>
<p>资源可以变化的, 资源能创建, new 状态, 资源创建后可以查询资源, 能看到资源的内容, 这个资源内容,可以被修改, 修改后资源 和之前的不一样.</p>
</blockquote>
<p>REST 中的要素:</p>
<p>用 REST 表示资源和对资源的操作. 在互联网中, 表示一个资源或者一个操作.</p>
<p>资源使用 url 表示的, 在互联网, 使用的图片, 视频, 文本, 网页等等都是资源.</p>
<p>对资源的操作:</p>
<blockquote>
<p>查询资源: 看, 通过 url 找到资源.</p>
<p>创建资源: 添加资源.</p>
<p>更新资源: 更新资源, 编辑.</p>
<p>删除资源: 去除.</p>
</blockquote>
<p>在 url 中,使用名词表示资源, 以及访问资源的信息, 在 url 中,使用“ / &quot; 分隔对资源的信息</p>
<blockquote>
<p><a href="http://localhost:8080/myboot/student/1001" target="_blank" rel="noopener noreferrer">http://localhost:8080/myboot/student/1001<ExternalLinkIcon/></a></p>
</blockquote>
<p>使用 http 中的动作(请求方式), 表示对资源的操作(CURD)</p>
<blockquote>
<p>GET: 查询资源 -- sql select</p>
</blockquote>
<p>处理单个资源: 用他的单数方式</p>
<blockquote>
<p><a href="http://localhost:8080/myboot/student/1001" target="_blank" rel="noopener noreferrer">http://localhost:8080/myboot/student/1001<ExternalLinkIcon/></a></p>
<p><a href="http://localhost:8080/myboot/student/1001/1" target="_blank" rel="noopener noreferrer">http://localhost:8080/myboot/student/1001/1<ExternalLinkIcon/></a></p>
</blockquote>
<p>处理多个资源: 使用复数形式</p>
<blockquote>
<p><a href="http://localhost:8080/myboot/students/1001/1002" target="_blank" rel="noopener noreferrer">http://localhost:8080/myboot/students/1001/1002<ExternalLinkIcon/></a></p>
</blockquote>
<p>POST: 创建资源 -- sql insert</p>
<blockquote>
<p><a href="http://localhost:8080/myboot/student" target="_blank" rel="noopener noreferrer">http://localhost:8080/myboot/student<ExternalLinkIcon/></a></p>
</blockquote>
<p>在 post 请求中传递数据</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:8080/myboot/student<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  姓名:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> 年龄:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PUT: 更新资源 -- sql update</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:8080/myboot/student/1<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    姓名:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    年龄:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_method<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PUT<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DELETE: 删除资源 -- sql delete</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:8080/myboot/student/1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除 1 的数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要的分页,排序等参数,依然放在 url 的后面, 例如</p>
<blockquote>
<p><a href="http://localhost:8080/myboot/students?page=1&amp;pageSize=20" target="_blank" rel="noopener noreferrer">http://localhost:8080/myboot/students?page=1&amp;pageSize=20<ExternalLinkIcon/></a></p>
</blockquote>
<p>一句话说明 REST:</p>
<p>使用 url 表示资源 ,使用 http 动作操作资源.</p>
<p>注解</p>
<blockquote>
<p>@PathVariable: 从 url 中获取数据</p>
<p>@GetMapping: 支持的 get 请求方式, 等同于 @RequestMapping(method=RequestMethod.GET)</p>
<p>@PostMapping: 支持 post 请求方式, 等同于 @RequestMapping(method=RequestMethod.POST)</p>
<p>@PutMapping: 支持 put 请求方式, 等同于 @RequestMapping(method=RequestMethod.PUT)</p>
<p>@DeleteMapping: 支持 delete 请求方式, 等同于 @RequestMapping(method=RequestMethod.DELETE)</p>
<p>@RestController: 复合注解, 是 @Controller 和 @ResponseBody 组合, 在类的上面使用@RestController 表示当前类的所有方法都加入了 @ResponseBody</p>
</blockquote>
<p>测试工具: Postman, Apifox 等</p>
<p>使用测试工具可以直接测试 get ,post , put ,delete 等请求</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 请求连接: http://localhost:8080/student
 **/</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/student"</span><span class="token punctuation">)</span> <span class="token comment">// 提取公共部分</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRestController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/queryStudent/{uid}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"uid"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"queryStudent"</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 当路径变量名称和形参一样, @PathVariable中的value可以省略
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/getStudent/{uid}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"getStudent"</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">"/modifyStudent/{uid}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">modifyStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"modifyStudent"</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"/removeStudent/{uid}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">removeStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"removeStudent"</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202209211558058.png" alt="image-20220921155829931"></p>
<h2 id="put-delete-请求" tabindex="-1"><a class="header-anchor" href="#put-delete-请求" aria-hidden="true">#</a> put, delete 请求</h2>
<p>在 SpringMVC 中有一个过滤器, 支持 post 请求转为 put ,delete</p>
<p>过滤器: org.springframework.web.filter.HiddenHttpMethodFilter</p>
<p>作用: 把请求中的 post 请求转为 put, delete</p>
<p>实现步骤:</p>
<blockquote>
<ol>
<li>application.properties(yml): 开启使用 HiddenHttpMethodFilter 过滤器</li>
<li>在请求页面中, 包含 _method 参数, 他的值是 put, delete, 发起这个请求使用的 post 方式</li>
</ol>
</blockquote>
<p>启用过滤器</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre v-pre class="language-properties"><code><span class="token key attr-name">spring.mvc.hiddenmethod.filter.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在请求页面中, 包含 _method 参数</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>student/testRest<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>测试请求方式<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_method<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>put<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加一个 Controller 测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/student"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRestController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">"/testRest"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testRest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"testRest"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="请求方式必须唯一" tabindex="-1"><a class="header-anchor" href="#请求方式必须唯一" aria-hidden="true">#</a> 请求方式必须唯一</h2>
<p>当出现不同请求访问链接不唯一时, 就会报错, 程序无法判断具体是哪个请求.</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**错误 500*/</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/student"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRestController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/queryStudent/{uid}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"uid"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"queryStudent"</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/queryStudent/{age}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryStudentPost</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"age"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"queryStudent"</span> <span class="token operator">+</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



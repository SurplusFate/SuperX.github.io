<template><div><h1 id="请求转发与请求重定向" tabindex="-1"><a class="header-anchor" href="#请求转发与请求重定向" aria-hidden="true">#</a> 请求转发与请求重定向</h1>
<p>forward: 表示转发</p>
<p>redirect: 表示重定向</p>
<p>forward 和 redirect 都是关键字, 有一个共同的特点不和视图解析器一同工作</p>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>forward 和 redirect 他们都可以访问视图文件, 比如某个 jsp, html</p>
<p>forward:/hello.jsp forward:/main.html</p>
<p>forward 和 redirect 他们都可以访问其它的 controller</p>
<p>forward:/some.do , redirect:/other.do</p>
<p>处理器方法可以返回 ModelAndView, String, void 时, 都可以使用 forward, redirect</p>
</div>
<h2 id="请求转发" tabindex="-1"><a class="header-anchor" href="#请求转发" aria-hidden="true">#</a> 请求转发</h2>
<p>处理器方法返回 ModelAndView,实现转发 forward</p>
<p>语法: setViewName(&quot;forward:视图文件完整路径&quot;)</p>
<p>forward 特点: 不和视图解析器一同使用, 无视视图解析器</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/doForward.do"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doSome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ModelAndView</span> mv  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span><span class="token string">"欢迎使用springmvc做web开发"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">"fun"</span><span class="token punctuation">,</span><span class="token string">"执行的是doSome方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//显示转发</span>
        <span class="token comment">//mv.setViewName("forward:/WEB-INF/view/show.jsp");</span>

        mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"forward:/hello.jsp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="请求重定向" tabindex="-1"><a class="header-anchor" href="#请求重定向" aria-hidden="true">#</a> 请求重定向</h2>
<p>语法: setViewName(&quot;redirect:视图完整路径&quot;)</p>
<p>redirect 特点: 不和视图解析器一同使用, 无视视图解析器</p>
<p>框架对重定向的操作:</p>
<blockquote>
<ol>
<li>
<p>框架会把 Model 中的简单类型的数据, 转为 string 作为 hello.jsp 的 get 请求参数使用</p>
<p>目的是在 doRedirect.do 和 hello.jsp 两次请求之间传递数据</p>
</li>
<li>
<p>在目标 hello.jsp 页面可以使用参数集合对象${param}获取请求参数值</p>
<p>${param.myname}</p>
</li>
</ol>
</blockquote>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>重定向不能访问/WEB-INF 资源</p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/doRedirect.do"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doWithRedirect</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//数据放入到 request作用域</span>
    mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">"myname"</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">"myage"</span><span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 重定向</span>
    mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"redirect:/hello.jsp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// http://localhost:8080/ch08_forard_redirect/hello.jsp?myname=lisi&amp;myage=22</span>

    <span class="token comment">// 重定向不能访问/WEB-INF资源</span>
    <span class="token comment">// mv.setViewName("redirect:/WEB-INF/view/show.jsp");</span>
    <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径问题" tabindex="-1"><a class="header-anchor" href="#路径问题" aria-hidden="true">#</a> 路径问题</h2>
<p>绝对路径与相对路径的区分：</p>
<blockquote>
<p>绝对路径为前面加上了 “/” 的路径，而相对路径则前面没有加上 “/”。</p>
</blockquote>
<p>转发与重定向中的具体讨论：</p>
<blockquote>
<p>转发：转发当中使用带 “/” 的绝对路径时，表示的是当前 web 应用的根目录再加上传入的目录，因为转发是在服务器内部进行的，写绝对路径 / 开头指的是当前的 Web 应用程序</p>
</blockquote>
<p>假设当前的 web 应用目录为 <a href="http://localhost:8080/web-app" target="_blank" rel="noopener noreferrer">http://localhost:8080/web-app<ExternalLinkIcon/></a> 执行 <code v-pre>req.getRequestDispatcher(&quot;/login.jsp&quot;)</code> 则这个时候转到的目录为 <a href="http://localhost:8080/web-app/login.jsp" target="_blank" rel="noopener noreferrer">http://localhost:8080/web-app/login.jsp<ExternalLinkIcon/></a></p>
<p>而当转发中使用的是不带 “/” 的相对路径的时候，表示的是当前的路径再加上传入的路径</p>
<p>假如当前的路径为 <a href="http://localhost:8080/web-app/abc" target="_blank" rel="noopener noreferrer">http://localhost:8080/web-app/abc<ExternalLinkIcon/></a> 执行 <code v-pre>req.getRequestDispatcher(&quot;login.jsp&quot;)</code> 则这个时候转到的目录为 <a href="http://localhost:8080/web-app/abc/login.jsp" target="_blank" rel="noopener noreferrer">http://localhost:8080/web-app/abc/login.jsp<ExternalLinkIcon/></a></p>
<blockquote>
<p>重定向：重定向中使用带 “/” 的绝对路径时，表示的是当前服务器的根目录再加上传入的目录！</p>
</blockquote>
<p>假设当前的 web 应用目录为 <a href="http://localhost:8080/web-app" target="_blank" rel="noopener noreferrer">http://localhost:8080/web-app<ExternalLinkIcon/></a> 执行 <code v-pre>res.sendRedirect(&quot;/login.jsp&quot;)</code> 则这个时候转到的目录为 <a href="http://localhost:8080/login.jsp" target="_blank" rel="noopener noreferrer">http://localhost:8080/login.jsp<ExternalLinkIcon/></a></p>
<p>而当转发中使用的是不带 “/” 的相对路径的时候，表示的是当前的路径再加上传入的路径 (和转发的时候一样)</p>
<p>假如当前的路径为 <a href="http://localhost:8080/web-app/abc" target="_blank" rel="noopener noreferrer">http://localhost:8080/web-app/abc<ExternalLinkIcon/></a> 执行 <code v-pre>req.getRequestDispatcher(&quot;login.jsp&quot;)</code> 则这个时候转到的目录为 <a href="http://localhost:8080/web-app/abc/login.jsp" target="_blank" rel="noopener noreferrer">http://localhost:8080/web-app/abc/login.jsp<ExternalLinkIcon/></a></p>
<p>绝对路径中的 “/” 代表的不同情况下的不同意思的再总结</p>
<p>“/” 代表站点路径 即 <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">http://localhost:8080<ExternalLinkIcon/></a> 的情况</p>
<blockquote>
<ol>
<li>超链接的时候</li>
<li>action 表单提交的时候</li>
<li>请求重定向的时候</li>
</ol>
</blockquote>
<p>“/” 代表的时 web 应用的根目录</p>
<blockquote>
<p>即 <a href="http://localhost:8080/Context" target="_blank" rel="noopener noreferrer">http://localhost:8080/Context<ExternalLinkIcon/></a> 的情况（可利用 <code v-pre>request.getContext()</code>, 或者 <code v-pre>application.getContext()</code> 来获取）</p>
<ol>
<li>请求转发的时候</li>
<li>在 web.xml 文件中进行配置的时候，例如 URL 的配置的时候</li>
</ol>
</blockquote>
</div></template>



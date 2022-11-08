import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.331e95d7.js";const t={},p=e(`<h1 id="_9-异常处理" tabindex="-1"><a class="header-anchor" href="#_9-异常处理" aria-hidden="true">#</a> 9. 异常处理</h1><p><strong>@ExceptionHandler 注解:</strong></p><p>使用注解@ExceptionHandler 可以将一个方法指定为异常处理方法。</p><p>该注解只有一个可选属性 value，为一个 Class&lt;?&gt;数组，用于指定该注解的方法所要处理的异常类，即所要匹配的异常。</p><p>而被注解的方法，其返回值可以是 ModelAndView、String，或 void，方法名随意，方法参数可以是 Exception 及其子类对象、HttpServletRequest、HttpServletResponse 等。系统会自动为这些方法参数赋值。</p><p>对于异常处理注解的用法，也可以直接将异常处理方法注解于 Controller 之中。</p><h2 id="自定义异常类" tabindex="-1"><a class="header-anchor" href="#自定义异常类" aria-hidden="true">#</a> 自定义异常类</h2><p>定义三个异常类：NameException、AgeException、MyUserException。其中 MyUserException 是另外两个异常的父类。</p><ul><li>MyUserException</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyUserException</span> <span class="token keyword">extends</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">MyUserException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyUserException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NameException</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//表示当用户的姓名有异常，抛出NameException</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NameException</span> <span class="token keyword">extends</span> <span class="token class-name">MyUserException</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">NameException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">NameException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AgeException</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//当年龄有问题时，抛出的异常</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AgeException</span> <span class="token keyword">extends</span> <span class="token class-name">MyUserException</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">AgeException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">AgeException</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建一个普通类-作用全局异常处理类" tabindex="-1"><a class="header-anchor" href="#创建一个普通类-作用全局异常处理类" aria-hidden="true">#</a> 创建一个普通类, 作用全局异常处理类</h2><p><strong>@ControllerAdvice:</strong></p><p>控制器增强（也就是说给控制器类增加功能--异常处理功能）</p><blockquote><p>位置：在类的上面。</p><p>特点：必须让框架知道这个注解所在的包名，需要在 springmvc 配置文件声明组件扫描器。指定**@ControllerAdvice**所在的包名</p></blockquote><p>定义方法，处理发生的异常</p><p>处理异常的方法和控制器方法的定义一样, 可以有多个参数, 可以有 ModelAndView, String, void 和对象类型的返回值</p><blockquote><p>形参: Exception, 表示 Controller 中抛出的异常对象。通过形参可以获取发生的异常信息。</p></blockquote><p><strong>@ExceptionHandler</strong>(异常的 class)</p><p>表示异常的类型, 当发生此类型异常时, 由该方法处理</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlobalExceptionHandler</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">NameException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doNameException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//处理NameException的异常。</span>
        <span class="token comment">/*
           异常发生处理逻辑：
           1.需要把异常记录下来， 记录到数据库，日志文件。
             记录日志发生的时间，哪个方法发生的，异常错误内容。
           2.发送通知，把异常的信息通过邮件，短信，微信发送给相关人员。
           3.给用户友好的提示。
         */</span>
        <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;姓名必须是zs，其它用户不能访问&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">,</span>exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;nameError&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//处理AgeException</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">AgeException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doAgeException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//处理AgeException的异常。</span>
        <span class="token comment">/*
           异常发生处理逻辑：
           1.需要把异常记录下来， 记录到数据库，日志文件。
             记录日志发生的时间，哪个方法发生的，异常错误内容。
           2.发送通知，把异常的信息通过邮件，短信，微信发送给相关人员。
           3.给用户友好的提示。
         */</span>
        <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;你的年龄不能大于80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">,</span>exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;ageError&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//处理其它异常， NameException, AgeException以外，不知类型的异常</span>
    <span class="token annotation punctuation">@ExceptionHandler</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doOtherException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> exception<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//处理其它异常</span>
        <span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;你的年龄不能大于80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">,</span>exception<span class="token punctuation">)</span><span class="token punctuation">;</span>
        mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;defaultError&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 springmvc 配置文件声明组件扫描器。指定 <strong>@ControllerAdvice</strong> 所在的包名</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--声明组件扫描器指定controller(@Controller所在的包名)--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.bjpowernode.controller<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!--声明组件扫描器指定handler(@ControllerAdvice所在的包名)--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.bjpowernode.handler<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!--注解驱动--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>annotation-driven</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-controller-抛出异常" tabindex="-1"><a class="header-anchor" href="#修改-controller-抛出异常" aria-hidden="true">#</a> 修改 Controller 抛出异常</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/some.do&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">doSome</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyUserException</span> <span class="token punctuation">{</span>
    <span class="token class-name">ModelAndView</span> mv  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NameException</span><span class="token punctuation">(</span><span class="token string">&quot;姓名不正确！！！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> age <span class="token operator">&gt;</span> <span class="token number">80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">AgeException</span><span class="token punctuation">(</span><span class="token string">&quot;年龄比较大！！！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;myname&quot;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mv<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">&quot;myage&quot;</span><span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    mv<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;show&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> mv<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义异常响应页面" tabindex="-1"><a class="header-anchor" href="#定义异常响应页面" aria-hidden="true">#</a> 定义异常响应页面</h2><ul><li>ageError.jsp</li></ul><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      ageError.jsp &lt;br/&gt;
      提示信息：\${msg} &lt;br/&gt;
      系统异常消息：\${ex.message}
    &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>nameError.jsp</li></ul><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      nameError.jsp &lt;br/&gt;
      提示信息：\${msg} &lt;br/&gt;
      系统异常消息：\${ex.message}
    &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>defaultError.jsp</li></ul><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;
  &lt;html&gt;
    &lt;head&gt;
      &lt;title&gt;Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
      defaultError.jsp &lt;br/&gt;
      提示信息：\${msg} &lt;br/&gt;
      系统异常消息：\${ex.message}
    &lt;/body&gt;
  &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),c=[p];function l(o,i){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","9. 异常处理.html.vue"]]);export{r as default};

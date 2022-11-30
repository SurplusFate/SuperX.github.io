import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.da759072.js";const t={},i=e(`<h1 id="_9-jsp" tabindex="-1"><a class="header-anchor" href="#_9-jsp" aria-hidden="true">#</a> 9. JSP</h1><h2 id="什么是-jsp" tabindex="-1"><a class="header-anchor" href="#什么是-jsp" aria-hidden="true">#</a> 什么是 JSP</h2><p>Java Server Pages ： Java 服务器端页面，也和 Servlet 一样，用于动态 Web 技术！</p><p>最大的特点：</p><ul><li>写 JSP 就像在写 HTML</li><li>区别： <ul><li>HTML 只给用户提供静态的数据</li><li>JSP 页面中可以嵌入 JAVA 代码，为用户提供动态数据；</li></ul></li></ul><h2 id="jsp-原理" tabindex="-1"><a class="header-anchor" href="#jsp-原理" aria-hidden="true">#</a> JSP 原理</h2><p>思路：JSP 到底怎么执行的！</p><ul><li><p>代码层面没有任何问题</p></li><li><p>服务器内部工作</p><p>tomcat 中有一个 work 目录；</p><p>IDEA 中使用 Tomcat 的会在 IDEA 的 tomcat 中生产一个 work 目录</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291201917.png" alt="image-20220829120102755"></p></li></ul><p>我电脑的地址：</p><blockquote><p>C:\\Users\\15434\\AppData\\Local\\JetBrains\\IntelliJIdea2022.2\\tomcat\\59ebd7bd-89a4-424b-9115-e2b25546dc1b\\work\\Catalina\\localhost\\myweb\\org\\apache\\jsp</p></blockquote><p>发现页面转变成了 Java 程序</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291202858.png" alt="image-20220829120238723"></p><p><strong>浏览器向服务器发送请求，不管访问什么资源，其实都是在访问 Servlet！</strong></p><p>JSP 最终也会被转换成为一个 Java 类！</p><p><strong>JSP 本质上就是一个 Servlet：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//初始化</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">_jspInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token comment">//销毁</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">_jspDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token comment">//JSPService</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">_jspService</span><span class="token punctuation">(</span><span class="token punctuation">.</span>HttpServletRequest request<span class="token punctuation">,</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>判断请求</p></li><li><p>内置一些对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span></span>PageContext</span> pageContext<span class="token punctuation">;</span>  <span class="token comment">//页面上下文</span>
<span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span>HttpSession</span> session <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token comment">//session</span>
<span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span>ServletContext</span> application<span class="token punctuation">;</span>   <span class="token comment">//applicationContext</span>
<span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span>ServletConfig</span> config<span class="token punctuation">;</span>         <span class="token comment">//config</span>
<span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span></span>JspWriter</span> out <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>           <span class="token comment">//out</span>
<span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Object</span> page <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>               <span class="token comment">//page：当前</span>
<span class="token class-name">HttpServletRequest</span> request                        <span class="token comment">//请求</span>
<span class="token class-name">HttpServletResponse</span> response                      <span class="token comment">//响应</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>输出页面前增加的代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//设置响应的页面类型</span>
pageContext <span class="token operator">=</span> _jspxFactory<span class="token punctuation">.</span><span class="token function">getPageContext</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> request<span class="token punctuation">,</span> response<span class="token punctuation">,</span>
                                          <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">8192</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
_jspx_page_context <span class="token operator">=</span> pageContext<span class="token punctuation">;</span>
application <span class="token operator">=</span> pageContext<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config <span class="token operator">=</span> pageContext<span class="token punctuation">.</span><span class="token function">getServletConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
session <span class="token operator">=</span> pageContext<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
out <span class="token operator">=</span> pageContext<span class="token punctuation">.</span><span class="token function">getOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
_jspx_out <span class="token operator">=</span> out<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>以上的这些个对象我们可以在 JSP 页面中直接使用！</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291204389.png" alt="1568347078207"></p></li></ol><p>在 JSP 页面中；</p><p>只要是 JAVA 代码就会原封不动的输出；</p><p>如果是 HTML 代码，就会被转换为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;html&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样的格式，输出到前端！</p><h2 id="jsp-基础语法" tabindex="-1"><a class="header-anchor" href="#jsp-基础语法" aria-hidden="true">#</a> JSP 基础语法</h2><p>任何语言都有自己的语法，JAVA 中有，。 JSP 作为 java 技术的一种应用，它拥有一些自己扩充的语法（了解，知道即可！），Java 所有语法都支持！</p><h3 id="jsp-表达式" tabindex="-1"><a class="header-anchor" href="#jsp-表达式" aria-hidden="true">#</a> <strong>JSP 表达式</strong></h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>  &lt;%--JSP表达式
  作用：用来将程序的输出，输出到客户端
  &lt;%= 变量或者表达式%&gt;
  --%&gt;
  &lt;%= new java.util.Date()%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsp-脚本片段" tabindex="-1"><a class="header-anchor" href="#jsp-脚本片段" aria-hidden="true">#</a> <strong>jsp 脚本片段</strong></h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>  &lt;%--jsp脚本片段--%&gt;
  &lt;%
    int sum = 0;
    for (int i = 1; i &lt;=100 ; i++) {
      sum+=i;
    }
    out.println(&quot;&lt;h1&gt;Sum=&quot;+sum+&quot;&lt;/h1&gt;&quot;);
  %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>脚本片段的再实现：</strong></p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>  &lt;%
    int x = 10;
    out.println(x);
  %&gt;
  &lt;p&gt;这是一个JSP文档&lt;/p&gt;
  &lt;%
    int y = 2;
    out.println(y);
  %&gt;

  &lt;hr&gt;


  &lt;%--在代码嵌入HTML元素--%&gt;
  &lt;%
    for (int i = 0; i &lt; 5; i++) {
  %&gt;
    &lt;h1&gt;Hello,World  &lt;%=i%&gt; &lt;/h1&gt;
  &lt;%
    }
  %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsp-声明" tabindex="-1"><a class="header-anchor" href="#jsp-声明" aria-hidden="true">#</a> JSP 声明</h3><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>  &lt;%!
    static {
      System.out.println(&quot;Loading Servlet!&quot;);
    }

    private int globalVar = 0;

    public void kuang(){
      System.out.println(&quot;进入了方法Kuang！&quot;);
    }
  %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSP 声明：会被编译到 JSP 生成 Java 的类中！其他的，就会被生成到_jspService 方法中！</p><p>在 JSP，嵌入 Java 代码即可！</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%%&gt;
&lt;%=%&gt;
&lt;%!%&gt;

&lt;%--注释--%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSP 的注释，不会在客户端显示，HTML 就会！</p><h2 id="jsp-指令" tabindex="-1"><a class="header-anchor" href="#jsp-指令" aria-hidden="true">#</a> JSP 指令</h2><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@page args.... %&gt;
&lt;%@include file=&quot;&quot;%&gt;

&lt;%--@include会将两个页面合二为一--%&gt;

&lt;%@include file=&quot;common/header.jsp&quot;%&gt;
&lt;h1&gt;网页主体&lt;/h1&gt;

&lt;%@include file=&quot;common/footer.jsp&quot;%&gt;

&lt;hr&gt;


&lt;%--jSP标签
    jsp:include：拼接页面，本质还是三个
    --%&gt;
&lt;jsp:include page=&quot;/common/header.jsp&quot;/&gt;
&lt;h1&gt;网页主体&lt;/h1&gt;
&lt;jsp:include page=&quot;/common/footer.jsp&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-大内置对象" tabindex="-1"><a class="header-anchor" href="#_9-大内置对象" aria-hidden="true">#</a> 9 大内置对象</h2><ul><li>PageContext 存东西</li><li>Request 存东西</li><li>Response</li><li>Session 存东西</li><li>Application 【SerlvetContext】 存东西</li><li>config 【SerlvetConfig】</li><li>out</li><li>page ，不用了解</li><li>exception</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>pageContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;秦疆1号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//保存的数据只在一个页面中有效</span>
request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;秦疆2号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//保存的数据只在一次请求中有效，请求转发会携带这个数据</span>
session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;秦疆3号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//保存的数据只在一次会话中有效，从打开浏览器到关闭浏览器</span>
application<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;秦疆4号&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//保存的数据只在服务器中有效，从打开服务器到关闭服务器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>request：客户端向服务器发送请求，产生的数据，用户看完就没用了，比如：新闻，用户看完没用的！</p><p>session：客户端向服务器发送请求，产生的数据，用户用完一会还有用，比如：购物车；</p><p>application：客户端向服务器发送请求，产生的数据，一个用户用完了，其他用户还可能使用，比如：聊天数据；</p><h2 id="jsp-标签、jstl-标签、el-表达式" tabindex="-1"><a class="header-anchor" href="#jsp-标签、jstl-标签、el-表达式" aria-hidden="true">#</a> JSP 标签、JSTL 标签、EL 表达式</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- JSTL表达式的依赖 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet.jsp.jstl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jstl-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- standard标签库 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>taglibs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>standard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EL 表达式： \${ }</p><ul><li><strong>获取数据</strong></li><li><strong>执行运算</strong></li><li><strong>获取 web 开发的常用对象</strong></li></ul><p><strong>JSP 标签：</strong></p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%--jsp:include--%&gt;

&lt;%--
http://localhost:8080/jsptag.jsp?name=kuangshen&amp;age=12
--%&gt;

&lt;jsp:forward page=&quot;/jsptag2.jsp&quot;&gt;
    &lt;jsp:param name=&quot;name&quot; value=&quot;kuangshen&quot;&gt;&lt;/jsp:param&gt;
    &lt;jsp:param name=&quot;age&quot; value=&quot;12&quot;&gt;&lt;/jsp:param&gt;
&lt;/jsp:forward&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JSTL 表达式：</strong></p><p>JSTL 标签库的使用就是为了弥补 HTML 标签的不足；它自定义许多标签，可以供我们使用，标签的功能和 Java 代码一样！</p><p><strong>格式化标签。</strong></p><p><strong>SQL 标签。</strong></p><p><strong>XML 标签。</strong></p><p><strong>核心标签：</strong> （掌握部分）</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291206452.png" alt="1568362473764"></p><p><strong>JSTL 标签库使用步骤：</strong></p><ul><li>引入对应的 taglib</li><li>使用其中的方法</li><li><strong>在 Tomcat 也需要引入 jstl 的包，否则会报错：JSTL 解析错误</strong></li></ul><p>c：if</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;


&lt;h4&gt;if测试&lt;/h4&gt;

&lt;hr&gt;

&lt;form action=&quot;coreif.jsp&quot; method=&quot;get&quot;&gt;
    &lt;%--
    EL表达式获取表单中的数据
    \${param.参数名}
    --%&gt;
    &lt;input type=&quot;text&quot; name=&quot;username&quot; value=&quot;\${param.username}&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;登录&quot;&gt;
&lt;/form&gt;

&lt;%--判断如果提交的用户名是管理员，则登录成功--%&gt;
&lt;c:if test=&quot;\${param.username==&#39;admin&#39;}&quot; var=&quot;isAdmin&quot;&gt;
    &lt;c:out value=&quot;管理员欢迎您！&quot;/&gt;
&lt;/c:if&gt;

&lt;%--自闭合标签--%&gt;
&lt;c:out value=&quot;\${isAdmin}&quot;/&gt;

&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c:choose c:when</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;body&gt;

&lt;%--定义一个变量score，值为85--%&gt;
&lt;c:set var=&quot;score&quot; value=&quot;55&quot;/&gt;

&lt;c:choose&gt;
    &lt;c:when test=&quot;\${score&gt;=90}&quot;&gt;
        你的成绩为优秀
    &lt;/c:when&gt;
    &lt;c:when test=&quot;\${score&gt;=80}&quot;&gt;
        你的成绩为一般
    &lt;/c:when&gt;
    &lt;c:when test=&quot;\${score&gt;=70}&quot;&gt;
        你的成绩为良好
    &lt;/c:when&gt;
    &lt;c:when test=&quot;\${score&lt;=60}&quot;&gt;
        你的成绩为不及格
    &lt;/c:when&gt;
&lt;/c:choose&gt;

&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c:forEach</p><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%

    ArrayList&lt;String&gt; people = new ArrayList&lt;&gt;();
    people.add(0,&quot;张三&quot;);
    people.add(1,&quot;李四&quot;);
    people.add(2,&quot;王五&quot;);
    people.add(3,&quot;赵六&quot;);
    people.add(4,&quot;田六&quot;);
    request.setAttribute(&quot;list&quot;,people);
%&gt;


&lt;%--
var , 每一次遍历出来的变量
items, 要遍历的对象
begin,   哪里开始
end,     到哪里
step,   步长
--%&gt;
&lt;c:forEach var=&quot;people&quot; items=&quot;\${list}&quot;&gt;
    &lt;c:out value=&quot;\${people}&quot;/&gt; &lt;br&gt;
&lt;/c:forEach&gt;

&lt;hr&gt;

&lt;c:forEach var=&quot;people&quot; items=&quot;\${list}&quot; begin=&quot;1&quot; end=&quot;3&quot; step=&quot;1&quot; &gt;
    &lt;c:out value=&quot;\${people}&quot;/&gt; &lt;br&gt;
&lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),l=[i];function p(c,o){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","9. JSP.html.vue"]]);export{r as default};

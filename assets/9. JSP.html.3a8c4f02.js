import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.c7f2c342.js";const t={},i=e(`<h1 id="_9-jsp" tabindex="-1"><a class="header-anchor" href="#_9-jsp" aria-hidden="true">#</a> 9. JSP</h1><h2 id="\u4EC0\u4E48\u662F-jsp" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-jsp" aria-hidden="true">#</a> \u4EC0\u4E48\u662F JSP</h2><p>Java Server Pages \uFF1A Java \u670D\u52A1\u5668\u7AEF\u9875\u9762\uFF0C\u4E5F\u548C Servlet \u4E00\u6837\uFF0C\u7528\u4E8E\u52A8\u6001 Web \u6280\u672F\uFF01</p><p>\u6700\u5927\u7684\u7279\u70B9\uFF1A</p><ul><li>\u5199 JSP \u5C31\u50CF\u5728\u5199 HTML</li><li>\u533A\u522B\uFF1A <ul><li>HTML \u53EA\u7ED9\u7528\u6237\u63D0\u4F9B\u9759\u6001\u7684\u6570\u636E</li><li>JSP \u9875\u9762\u4E2D\u53EF\u4EE5\u5D4C\u5165 JAVA \u4EE3\u7801\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u52A8\u6001\u6570\u636E\uFF1B</li></ul></li></ul><h2 id="jsp-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#jsp-\u539F\u7406" aria-hidden="true">#</a> JSP \u539F\u7406</h2><p>\u601D\u8DEF\uFF1AJSP \u5230\u5E95\u600E\u4E48\u6267\u884C\u7684\uFF01</p><ul><li><p>\u4EE3\u7801\u5C42\u9762\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898</p></li><li><p>\u670D\u52A1\u5668\u5185\u90E8\u5DE5\u4F5C</p><p>tomcat \u4E2D\u6709\u4E00\u4E2A work \u76EE\u5F55\uFF1B</p><p>IDEA \u4E2D\u4F7F\u7528 Tomcat \u7684\u4F1A\u5728 IDEA \u7684 tomcat \u4E2D\u751F\u4EA7\u4E00\u4E2A work \u76EE\u5F55</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291201917.png" alt="image-20220829120102755"></p></li></ul><p>\u6211\u7535\u8111\u7684\u5730\u5740\uFF1A</p><blockquote><p>C:\\Users\\15434\\AppData\\Local\\JetBrains\\IntelliJIdea2022.2\\tomcat\\59ebd7bd-89a4-424b-9115-e2b25546dc1b\\work\\Catalina\\localhost\\myweb\\org\\apache\\jsp</p></blockquote><p>\u53D1\u73B0\u9875\u9762\u8F6C\u53D8\u6210\u4E86 Java \u7A0B\u5E8F</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291202858.png" alt="image-20220829120238723"></p><p><strong>\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u4E0D\u7BA1\u8BBF\u95EE\u4EC0\u4E48\u8D44\u6E90\uFF0C\u5176\u5B9E\u90FD\u662F\u5728\u8BBF\u95EE Servlet\uFF01</strong></p><p>JSP \u6700\u7EC8\u4E5F\u4F1A\u88AB\u8F6C\u6362\u6210\u4E3A\u4E00\u4E2A Java \u7C7B\uFF01</p><p><strong>JSP \u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A Servlet\uFF1A</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u521D\u59CB\u5316</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">_jspInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token comment">//\u9500\u6BC1</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">_jspDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token comment">//JSPService</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">_jspService</span><span class="token punctuation">(</span><span class="token punctuation">.</span>HttpServletRequest request<span class="token punctuation">,</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>\u5224\u65AD\u8BF7\u6C42</p></li><li><p>\u5185\u7F6E\u4E00\u4E9B\u5BF9\u8C61</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span></span>PageContext</span> pageContext<span class="token punctuation">;</span>  <span class="token comment">//\u9875\u9762\u4E0A\u4E0B\u6587</span>
<span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span>HttpSession</span> session <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    <span class="token comment">//session</span>
<span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span>ServletContext</span> application<span class="token punctuation">;</span>   <span class="token comment">//applicationContext</span>
<span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span>ServletConfig</span> config<span class="token punctuation">;</span>         <span class="token comment">//config</span>
<span class="token class-name"><span class="token namespace">javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span></span>JspWriter</span> out <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>           <span class="token comment">//out</span>
<span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Object</span> page <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>               <span class="token comment">//page\uFF1A\u5F53\u524D</span>
<span class="token class-name">HttpServletRequest</span> request                        <span class="token comment">//\u8BF7\u6C42</span>
<span class="token class-name">HttpServletResponse</span> response                      <span class="token comment">//\u54CD\u5E94</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8F93\u51FA\u9875\u9762\u524D\u589E\u52A0\u7684\u4EE3\u7801</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">&quot;text/html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//\u8BBE\u7F6E\u54CD\u5E94\u7684\u9875\u9762\u7C7B\u578B</span>
pageContext <span class="token operator">=</span> _jspxFactory<span class="token punctuation">.</span><span class="token function">getPageContext</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> request<span class="token punctuation">,</span> response<span class="token punctuation">,</span>
                                          <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">8192</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
_jspx_page_context <span class="token operator">=</span> pageContext<span class="token punctuation">;</span>
application <span class="token operator">=</span> pageContext<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config <span class="token operator">=</span> pageContext<span class="token punctuation">.</span><span class="token function">getServletConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
session <span class="token operator">=</span> pageContext<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
out <span class="token operator">=</span> pageContext<span class="token punctuation">.</span><span class="token function">getOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
_jspx_out <span class="token operator">=</span> out<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4EE5\u4E0A\u7684\u8FD9\u4E9B\u4E2A\u5BF9\u8C61\u6211\u4EEC\u53EF\u4EE5\u5728 JSP \u9875\u9762\u4E2D\u76F4\u63A5\u4F7F\u7528\uFF01</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291204389.png" alt="1568347078207"></p></li></ol><p>\u5728 JSP \u9875\u9762\u4E2D\uFF1B</p><p>\u53EA\u8981\u662F JAVA \u4EE3\u7801\u5C31\u4F1A\u539F\u5C01\u4E0D\u52A8\u7684\u8F93\u51FA\uFF1B</p><p>\u5982\u679C\u662F HTML \u4EE3\u7801\uFF0C\u5C31\u4F1A\u88AB\u8F6C\u6362\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;html&gt;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u683C\u5F0F\uFF0C\u8F93\u51FA\u5230\u524D\u7AEF\uFF01</p><h2 id="jsp-\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#jsp-\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> JSP \u57FA\u7840\u8BED\u6CD5</h2><p>\u4EFB\u4F55\u8BED\u8A00\u90FD\u6709\u81EA\u5DF1\u7684\u8BED\u6CD5\uFF0CJAVA \u4E2D\u6709\uFF0C\u3002 JSP \u4F5C\u4E3A java \u6280\u672F\u7684\u4E00\u79CD\u5E94\u7528\uFF0C\u5B83\u62E5\u6709\u4E00\u4E9B\u81EA\u5DF1\u6269\u5145\u7684\u8BED\u6CD5\uFF08\u4E86\u89E3\uFF0C\u77E5\u9053\u5373\u53EF\uFF01\uFF09\uFF0CJava \u6240\u6709\u8BED\u6CD5\u90FD\u652F\u6301\uFF01</p><h3 id="jsp-\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#jsp-\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> <strong>JSP \u8868\u8FBE\u5F0F</strong></h3><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>  &lt;%--JSP\u8868\u8FBE\u5F0F
  \u4F5C\u7528\uFF1A\u7528\u6765\u5C06\u7A0B\u5E8F\u7684\u8F93\u51FA\uFF0C\u8F93\u51FA\u5230\u5BA2\u6237\u7AEF
  &lt;%= \u53D8\u91CF\u6216\u8005\u8868\u8FBE\u5F0F%&gt;
  --%&gt;
  &lt;%= new java.util.Date()%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsp-\u811A\u672C\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#jsp-\u811A\u672C\u7247\u6BB5" aria-hidden="true">#</a> <strong>jsp \u811A\u672C\u7247\u6BB5</strong></h3><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>  &lt;%--jsp\u811A\u672C\u7247\u6BB5--%&gt;
  &lt;%
    int sum = 0;
    for (int i = 1; i &lt;=100 ; i++) {
      sum+=i;
    }
    out.println(&quot;&lt;h1&gt;Sum=&quot;+sum+&quot;&lt;/h1&gt;&quot;);
  %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u811A\u672C\u7247\u6BB5\u7684\u518D\u5B9E\u73B0\uFF1A</strong></p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>  &lt;%
    int x = 10;
    out.println(x);
  %&gt;
  &lt;p&gt;\u8FD9\u662F\u4E00\u4E2AJSP\u6587\u6863&lt;/p&gt;
  &lt;%
    int y = 2;
    out.println(y);
  %&gt;

  &lt;hr&gt;


  &lt;%--\u5728\u4EE3\u7801\u5D4C\u5165HTML\u5143\u7D20--%&gt;
  &lt;%
    for (int i = 0; i &lt; 5; i++) {
  %&gt;
    &lt;h1&gt;Hello,World  &lt;%=i%&gt; &lt;/h1&gt;
  &lt;%
    }
  %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsp-\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#jsp-\u58F0\u660E" aria-hidden="true">#</a> JSP \u58F0\u660E</h3><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>  &lt;%!
    static {
      System.out.println(&quot;Loading Servlet!&quot;);
    }

    private int globalVar = 0;

    public void kuang(){
      System.out.println(&quot;\u8FDB\u5165\u4E86\u65B9\u6CD5Kuang\uFF01&quot;);
    }
  %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSP \u58F0\u660E\uFF1A\u4F1A\u88AB\u7F16\u8BD1\u5230 JSP \u751F\u6210 Java \u7684\u7C7B\u4E2D\uFF01\u5176\u4ED6\u7684\uFF0C\u5C31\u4F1A\u88AB\u751F\u6210\u5230_jspService \u65B9\u6CD5\u4E2D\uFF01</p><p>\u5728 JSP\uFF0C\u5D4C\u5165 Java \u4EE3\u7801\u5373\u53EF\uFF01</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%%&gt;
&lt;%=%&gt;
&lt;%!%&gt;

&lt;%--\u6CE8\u91CA--%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSP \u7684\u6CE8\u91CA\uFF0C\u4E0D\u4F1A\u5728\u5BA2\u6237\u7AEF\u663E\u793A\uFF0CHTML \u5C31\u4F1A\uFF01</p><h2 id="jsp-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#jsp-\u6307\u4EE4" aria-hidden="true">#</a> JSP \u6307\u4EE4</h2><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%@page args.... %&gt;
&lt;%@include file=&quot;&quot;%&gt;

&lt;%--@include\u4F1A\u5C06\u4E24\u4E2A\u9875\u9762\u5408\u4E8C\u4E3A\u4E00--%&gt;

&lt;%@include file=&quot;common/header.jsp&quot;%&gt;
&lt;h1&gt;\u7F51\u9875\u4E3B\u4F53&lt;/h1&gt;

&lt;%@include file=&quot;common/footer.jsp&quot;%&gt;

&lt;hr&gt;


&lt;%--jSP\u6807\u7B7E
    jsp:include\uFF1A\u62FC\u63A5\u9875\u9762\uFF0C\u672C\u8D28\u8FD8\u662F\u4E09\u4E2A
    --%&gt;
&lt;jsp:include page=&quot;/common/header.jsp&quot;/&gt;
&lt;h1&gt;\u7F51\u9875\u4E3B\u4F53&lt;/h1&gt;
&lt;jsp:include page=&quot;/common/footer.jsp&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-\u5927\u5185\u7F6E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_9-\u5927\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a> 9 \u5927\u5185\u7F6E\u5BF9\u8C61</h2><ul><li>PageContext \u5B58\u4E1C\u897F</li><li>Request \u5B58\u4E1C\u897F</li><li>Response</li><li>Session \u5B58\u4E1C\u897F</li><li>Application \u3010SerlvetContext\u3011 \u5B58\u4E1C\u897F</li><li>config \u3010SerlvetConfig\u3011</li><li>out</li><li>page \uFF0C\u4E0D\u7528\u4E86\u89E3</li><li>exception</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>pageContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u79E6\u75861\u53F7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u7684\u6570\u636E\u53EA\u5728\u4E00\u4E2A\u9875\u9762\u4E2D\u6709\u6548</span>
request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u79E6\u75862\u53F7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u7684\u6570\u636E\u53EA\u5728\u4E00\u6B21\u8BF7\u6C42\u4E2D\u6709\u6548\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u4F1A\u643A\u5E26\u8FD9\u4E2A\u6570\u636E</span>
session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u79E6\u75863\u53F7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4FDD\u5B58\u7684\u6570\u636E\u53EA\u5728\u4E00\u6B21\u4F1A\u8BDD\u4E2D\u6709\u6548\uFF0C\u4ECE\u6253\u5F00\u6D4F\u89C8\u5668\u5230\u5173\u95ED\u6D4F\u89C8\u5668</span>
application<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;name4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u79E6\u75864\u53F7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u4FDD\u5B58\u7684\u6570\u636E\u53EA\u5728\u670D\u52A1\u5668\u4E2D\u6709\u6548\uFF0C\u4ECE\u6253\u5F00\u670D\u52A1\u5668\u5230\u5173\u95ED\u670D\u52A1\u5668</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>request\uFF1A\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u4EA7\u751F\u7684\u6570\u636E\uFF0C\u7528\u6237\u770B\u5B8C\u5C31\u6CA1\u7528\u4E86\uFF0C\u6BD4\u5982\uFF1A\u65B0\u95FB\uFF0C\u7528\u6237\u770B\u5B8C\u6CA1\u7528\u7684\uFF01</p><p>session\uFF1A\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u4EA7\u751F\u7684\u6570\u636E\uFF0C\u7528\u6237\u7528\u5B8C\u4E00\u4F1A\u8FD8\u6709\u7528\uFF0C\u6BD4\u5982\uFF1A\u8D2D\u7269\u8F66\uFF1B</p><p>application\uFF1A\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u4EA7\u751F\u7684\u6570\u636E\uFF0C\u4E00\u4E2A\u7528\u6237\u7528\u5B8C\u4E86\uFF0C\u5176\u4ED6\u7528\u6237\u8FD8\u53EF\u80FD\u4F7F\u7528\uFF0C\u6BD4\u5982\uFF1A\u804A\u5929\u6570\u636E\uFF1B</p><h2 id="jsp-\u6807\u7B7E\u3001jstl-\u6807\u7B7E\u3001el-\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#jsp-\u6807\u7B7E\u3001jstl-\u6807\u7B7E\u3001el-\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> JSP \u6807\u7B7E\u3001JSTL \u6807\u7B7E\u3001EL \u8868\u8FBE\u5F0F</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- JSTL\u8868\u8FBE\u5F0F\u7684\u4F9D\u8D56 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet.jsp.jstl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jstl-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- standard\u6807\u7B7E\u5E93 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>taglibs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>standard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EL \u8868\u8FBE\u5F0F\uFF1A \${ }</p><ul><li><strong>\u83B7\u53D6\u6570\u636E</strong></li><li><strong>\u6267\u884C\u8FD0\u7B97</strong></li><li><strong>\u83B7\u53D6 web \u5F00\u53D1\u7684\u5E38\u7528\u5BF9\u8C61</strong></li></ul><p><strong>JSP \u6807\u7B7E\uFF1A</strong></p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%--jsp:include--%&gt;

&lt;%--
http://localhost:8080/jsptag.jsp?name=kuangshen&amp;age=12
--%&gt;

&lt;jsp:forward page=&quot;/jsptag2.jsp&quot;&gt;
    &lt;jsp:param name=&quot;name&quot; value=&quot;kuangshen&quot;&gt;&lt;/jsp:param&gt;
    &lt;jsp:param name=&quot;age&quot; value=&quot;12&quot;&gt;&lt;/jsp:param&gt;
&lt;/jsp:forward&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JSTL \u8868\u8FBE\u5F0F\uFF1A</strong></p><p>JSTL \u6807\u7B7E\u5E93\u7684\u4F7F\u7528\u5C31\u662F\u4E3A\u4E86\u5F25\u8865 HTML \u6807\u7B7E\u7684\u4E0D\u8DB3\uFF1B\u5B83\u81EA\u5B9A\u4E49\u8BB8\u591A\u6807\u7B7E\uFF0C\u53EF\u4EE5\u4F9B\u6211\u4EEC\u4F7F\u7528\uFF0C\u6807\u7B7E\u7684\u529F\u80FD\u548C Java \u4EE3\u7801\u4E00\u6837\uFF01</p><p><strong>\u683C\u5F0F\u5316\u6807\u7B7E\u3002</strong></p><p><strong>SQL \u6807\u7B7E\u3002</strong></p><p><strong>XML \u6807\u7B7E\u3002</strong></p><p><strong>\u6838\u5FC3\u6807\u7B7E\uFF1A</strong> \uFF08\u638C\u63E1\u90E8\u5206\uFF09</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291206452.png" alt="1568362473764"></p><p><strong>JSTL \u6807\u7B7E\u5E93\u4F7F\u7528\u6B65\u9AA4\uFF1A</strong></p><ul><li>\u5F15\u5165\u5BF9\u5E94\u7684 taglib</li><li>\u4F7F\u7528\u5176\u4E2D\u7684\u65B9\u6CD5</li><li><strong>\u5728 Tomcat \u4E5F\u9700\u8981\u5F15\u5165 jstl \u7684\u5305\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\uFF1AJSTL \u89E3\u6790\u9519\u8BEF</strong></li></ul><p>c\uFF1Aif</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;head&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;


&lt;h4&gt;if\u6D4B\u8BD5&lt;/h4&gt;

&lt;hr&gt;

&lt;form action=&quot;coreif.jsp&quot; method=&quot;get&quot;&gt;
    &lt;%--
    EL\u8868\u8FBE\u5F0F\u83B7\u53D6\u8868\u5355\u4E2D\u7684\u6570\u636E
    \${param.\u53C2\u6570\u540D}
    --%&gt;
    &lt;input type=&quot;text&quot; name=&quot;username&quot; value=&quot;\${param.username}&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;\u767B\u5F55&quot;&gt;
&lt;/form&gt;

&lt;%--\u5224\u65AD\u5982\u679C\u63D0\u4EA4\u7684\u7528\u6237\u540D\u662F\u7BA1\u7406\u5458\uFF0C\u5219\u767B\u5F55\u6210\u529F--%&gt;
&lt;c:if test=&quot;\${param.username==&#39;admin&#39;}&quot; var=&quot;isAdmin&quot;&gt;
    &lt;c:out value=&quot;\u7BA1\u7406\u5458\u6B22\u8FCE\u60A8\uFF01&quot;/&gt;
&lt;/c:if&gt;

&lt;%--\u81EA\u95ED\u5408\u6807\u7B7E--%&gt;
&lt;c:out value=&quot;\${isAdmin}&quot;/&gt;

&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c:choose c:when</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;body&gt;

&lt;%--\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CFscore\uFF0C\u503C\u4E3A85--%&gt;
&lt;c:set var=&quot;score&quot; value=&quot;55&quot;/&gt;

&lt;c:choose&gt;
    &lt;c:when test=&quot;\${score&gt;=90}&quot;&gt;
        \u4F60\u7684\u6210\u7EE9\u4E3A\u4F18\u79C0
    &lt;/c:when&gt;
    &lt;c:when test=&quot;\${score&gt;=80}&quot;&gt;
        \u4F60\u7684\u6210\u7EE9\u4E3A\u4E00\u822C
    &lt;/c:when&gt;
    &lt;c:when test=&quot;\${score&gt;=70}&quot;&gt;
        \u4F60\u7684\u6210\u7EE9\u4E3A\u826F\u597D
    &lt;/c:when&gt;
    &lt;c:when test=&quot;\${score&lt;=60}&quot;&gt;
        \u4F60\u7684\u6210\u7EE9\u4E3A\u4E0D\u53CA\u683C
    &lt;/c:when&gt;
&lt;/c:choose&gt;

&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c:forEach</p><div class="language-jsp ext-jsp line-numbers-mode"><pre class="language-jsp"><code>&lt;%

    ArrayList&lt;String&gt; people = new ArrayList&lt;&gt;();
    people.add(0,&quot;\u5F20\u4E09&quot;);
    people.add(1,&quot;\u674E\u56DB&quot;);
    people.add(2,&quot;\u738B\u4E94&quot;);
    people.add(3,&quot;\u8D75\u516D&quot;);
    people.add(4,&quot;\u7530\u516D&quot;);
    request.setAttribute(&quot;list&quot;,people);
%&gt;


&lt;%--
var , \u6BCF\u4E00\u6B21\u904D\u5386\u51FA\u6765\u7684\u53D8\u91CF
items, \u8981\u904D\u5386\u7684\u5BF9\u8C61
begin,   \u54EA\u91CC\u5F00\u59CB
end,     \u5230\u54EA\u91CC
step,   \u6B65\u957F
--%&gt;
&lt;c:forEach var=&quot;people&quot; items=&quot;\${list}&quot;&gt;
    &lt;c:out value=&quot;\${people}&quot;/&gt; &lt;br&gt;
&lt;/c:forEach&gt;

&lt;hr&gt;

&lt;c:forEach var=&quot;people&quot; items=&quot;\${list}&quot; begin=&quot;1&quot; end=&quot;3&quot; step=&quot;1&quot; &gt;
    &lt;c:out value=&quot;\${people}&quot;/&gt; &lt;br&gt;
&lt;/c:forEach&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),l=[i];function p(c,o){return s(),a("div",null,l)}const r=n(t,[["render",p],["__file","9. JSP.html.vue"]]);export{r as default};

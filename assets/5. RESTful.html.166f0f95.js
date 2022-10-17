import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,b as a,d as t,e,r as u}from"./app.bec8739b.js";const c={},i=n("h1",{id:"_5-restful",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-restful","aria-hidden":"true"},"#"),a(" 5. RESTful")],-1),r={href:"https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6%E7%B3%BB%E7%BB%9F/224122",target:"_blank",rel:"noopener noreferrer"},k={href:"https://baike.baidu.com/item/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"},d={href:"https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},m={href:"https://baike.baidu.com/item/%E4%BE%8B%E7%A8%8B/2390628",target:"_blank",rel:"noopener noreferrer"},v={href:"https://baike.baidu.com/item/%E5%B7%A5%E4%BD%9C%E6%9C%BA%E5%88%B6/9905789",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"\u63A5\u53E3\uFF08API\uFF09: \u53EF\u4EE5\u6307\u8BBF\u95EE servlet, controller \u7684 url, \u6216\u8C03\u7528\u5176\u4ED6\u7A0B\u5E8F\u7684\u51FD\u6570.",-1),b=n("p",null,"\u67B6\u6784\u98CE\u683C: api \u7EC4\u7EC7\u65B9\u5F0F\uFF08\u6837\u5B50, \u683C\u5F0F\uFF09",-1),q={href:"http://localhost:9002/mytrans/addStudent?name=lisi&age=26",target:"_blank",rel:"noopener noreferrer"},h=e('<p>\u5728\u5730\u5740\u4E0A\u63D0\u4F9B\u4E86 \u8BBF\u95EE\u7684\u8D44\u6E90\u540D\u79F0 addStudent, \u5728\u5176\u540E\u4F7F\u7528\u4E86 get \u65B9\u5F0F\u4F20\u9012\u53C2\u6570.</p><h2 id="rest-\u67B6\u6784\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#rest-\u67B6\u6784\u98CE\u683C" aria-hidden="true">#</a> REST \u67B6\u6784\u98CE\u683C</h2><p>REST: (\u82F1\u6587: Representational State Transfer, \u4E2D\u6587: \u8868\u73B0\u5C42\u72B6\u6001\u8F6C\u79FB)\u662F\u4E00\u79CD\u63A5\u53E3\u7684\u67B6\u6784\u98CE\u683C\u548C\u8BBE\u8BA1\u7684\u7406\u5FF5, \u4E0D\u662F\u6807\u51C6.</p><p>\u4F18\u70B9: \u66F4\u7B80\u6D01,\u66F4\u6709\u5C42\u6B21</p><p>\u8868\u73B0\u5C42\u72B6\u6001\u8F6C\u79FB:</p><p>\u8868\u73B0\u5C42:</p><blockquote><p>\u8868\u73B0\u5C42\u5C31\u662F\u89C6\u56FE\u5C42, \u663E\u793A\u8D44\u6E90\u7684, \u901A\u8FC7\u89C6\u56FE\u9875\u9762, jsp \u7B49\u7B49\u663E\u793A\u64CD\u4F5C\u8D44\u6E90\u7684\u7ED3\u679C.</p></blockquote><p>\u72B6\u6001:</p><blockquote><p>\u8D44\u6E90\u53D8\u5316</p></blockquote><p>\u8F6C\u79FB:</p><blockquote><p>\u8D44\u6E90\u53EF\u4EE5\u53D8\u5316\u7684, \u8D44\u6E90\u80FD\u521B\u5EFA, new \u72B6\u6001, \u8D44\u6E90\u521B\u5EFA\u540E\u53EF\u4EE5\u67E5\u8BE2\u8D44\u6E90, \u80FD\u770B\u5230\u8D44\u6E90\u7684\u5185\u5BB9, \u8FD9\u4E2A\u8D44\u6E90\u5185\u5BB9,\u53EF\u4EE5\u88AB\u4FEE\u6539, \u4FEE\u6539\u540E\u8D44\u6E90 \u548C\u4E4B\u524D\u7684\u4E0D\u4E00\u6837.</p></blockquote><p>REST \u4E2D\u7684\u8981\u7D20:</p><p>\u7528 REST \u8868\u793A\u8D44\u6E90\u548C\u5BF9\u8D44\u6E90\u7684\u64CD\u4F5C. \u5728\u4E92\u8054\u7F51\u4E2D, \u8868\u793A\u4E00\u4E2A\u8D44\u6E90\u6216\u8005\u4E00\u4E2A\u64CD\u4F5C.</p><p>\u8D44\u6E90\u4F7F\u7528 url \u8868\u793A\u7684, \u5728\u4E92\u8054\u7F51, \u4F7F\u7528\u7684\u56FE\u7247, \u89C6\u9891, \u6587\u672C, \u7F51\u9875\u7B49\u7B49\u90FD\u662F\u8D44\u6E90.</p><p>\u5BF9\u8D44\u6E90\u7684\u64CD\u4F5C:</p><blockquote><p>\u67E5\u8BE2\u8D44\u6E90: \u770B, \u901A\u8FC7 url \u627E\u5230\u8D44\u6E90.</p><p>\u521B\u5EFA\u8D44\u6E90: \u6DFB\u52A0\u8D44\u6E90.</p><p>\u66F4\u65B0\u8D44\u6E90: \u66F4\u65B0\u8D44\u6E90, \u7F16\u8F91.</p><p>\u5220\u9664\u8D44\u6E90: \u53BB\u9664.</p></blockquote><p>\u5728 url \u4E2D,\u4F7F\u7528\u540D\u8BCD\u8868\u793A\u8D44\u6E90, \u4EE5\u53CA\u8BBF\u95EE\u8D44\u6E90\u7684\u4FE1\u606F, \u5728 url \u4E2D,\u4F7F\u7528\u201C / &quot; \u5206\u9694\u5BF9\u8D44\u6E90\u7684\u4FE1\u606F</p>',17),_={href:"http://localhost:8080/myboot/student/1001",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"\u4F7F\u7528 http \u4E2D\u7684\u52A8\u4F5C(\u8BF7\u6C42\u65B9\u5F0F), \u8868\u793A\u5BF9\u8D44\u6E90\u7684\u64CD\u4F5C(CURD)",-1),f=n("blockquote",null,[n("p",null,"GET: \u67E5\u8BE2\u8D44\u6E90 -- sql select")],-1),S=n("p",null,"\u5904\u7406\u5355\u4E2A\u8D44\u6E90: \u7528\u4ED6\u7684\u5355\u6570\u65B9\u5F0F",-1),E={href:"http://localhost:8080/myboot/student/1001",target:"_blank",rel:"noopener noreferrer"},R={href:"http://localhost:8080/myboot/student/1001/1",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"\u5904\u7406\u591A\u4E2A\u8D44\u6E90: \u4F7F\u7528\u590D\u6570\u5F62\u5F0F",-1),B={href:"http://localhost:8080/myboot/students/1001/1002",target:"_blank",rel:"noopener noreferrer"},M=n("p",null,"POST: \u521B\u5EFA\u8D44\u6E90 -- sql insert",-1),P={href:"http://localhost:8080/myboot/student",target:"_blank",rel:"noopener noreferrer"},T=e(`<p>\u5728 post \u8BF7\u6C42\u4E2D\u4F20\u9012\u6570\u636E</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://localhost:8080/myboot/student<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  \u59D3\u540D:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> \u5E74\u9F84:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PUT: \u66F4\u65B0\u8D44\u6E90 -- sql update</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://localhost:8080/myboot/student/1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    \u59D3\u540D:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    \u5E74\u9F84:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_method<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>PUT<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DELETE: \u5220\u9664\u8D44\u6E90 -- sql delete</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://localhost:8080/myboot/student/1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5220\u9664 1 \u7684\u6570\u636E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9700\u8981\u7684\u5206\u9875,\u6392\u5E8F\u7B49\u53C2\u6570,\u4F9D\u7136\u653E\u5728 url \u7684\u540E\u9762, \u4F8B\u5982</p>`,7),w={href:"http://localhost:8080/myboot/students?page=1&pageSize=20",target:"_blank",rel:"noopener noreferrer"},C=e(`<p>\u4E00\u53E5\u8BDD\u8BF4\u660E REST:</p><p>\u4F7F\u7528 url \u8868\u793A\u8D44\u6E90 ,\u4F7F\u7528 http \u52A8\u4F5C\u64CD\u4F5C\u8D44\u6E90.</p><p>\u6CE8\u89E3</p><blockquote><p>@PathVariable: \u4ECE url \u4E2D\u83B7\u53D6\u6570\u636E</p><p>@GetMapping: \u652F\u6301\u7684 get \u8BF7\u6C42\u65B9\u5F0F, \u7B49\u540C\u4E8E @RequestMapping(method=RequestMethod.GET)</p><p>@PostMapping: \u652F\u6301 post \u8BF7\u6C42\u65B9\u5F0F, \u7B49\u540C\u4E8E @RequestMapping(method=RequestMethod.POST)</p><p>@PutMapping: \u652F\u6301 put \u8BF7\u6C42\u65B9\u5F0F, \u7B49\u540C\u4E8E @RequestMapping(method=RequestMethod.PUT)</p><p>@DeleteMapping: \u652F\u6301 delete \u8BF7\u6C42\u65B9\u5F0F, \u7B49\u540C\u4E8E @RequestMapping(method=RequestMethod.DELETE)</p><p>@RestController: \u590D\u5408\u6CE8\u89E3, \u662F @Controller \u548C @ResponseBody \u7EC4\u5408, \u5728\u7C7B\u7684\u4E0A\u9762\u4F7F\u7528@RestController \u8868\u793A\u5F53\u524D\u7C7B\u7684\u6240\u6709\u65B9\u6CD5\u90FD\u52A0\u5165\u4E86 @ResponseBody</p></blockquote><p>\u6D4B\u8BD5\u5DE5\u5177: Postman, Apifox \u7B49</p><p>\u4F7F\u7528\u6D4B\u8BD5\u5DE5\u5177\u53EF\u4EE5\u76F4\u63A5\u6D4B\u8BD5 get ,post , put ,delete \u7B49\u8BF7\u6C42</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u8BF7\u6C42\u8FDE\u63A5: http://localhost:8080/student
 **/</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/student&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u63D0\u53D6\u516C\u5171\u90E8\u5206</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRestController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/queryStudent/{uid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;uid&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;queryStudent&quot;</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * \u5F53\u8DEF\u5F84\u53D8\u91CF\u540D\u79F0\u548C\u5F62\u53C2\u4E00\u6837, @PathVariable\u4E2D\u7684value\u53EF\u4EE5\u7701\u7565
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/getStudent/{uid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;getStudent&quot;</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/modifyStudent/{uid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">modifyStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;modifyStudent&quot;</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/removeStudent/{uid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">removeStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;removeStudent&quot;</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202209211558058.png" alt="image-20220921155829931"></p><h2 id="put-delete-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#put-delete-\u8BF7\u6C42" aria-hidden="true">#</a> put, delete \u8BF7\u6C42</h2><p>\u5728 SpringMVC \u4E2D\u6709\u4E00\u4E2A\u8FC7\u6EE4\u5668, \u652F\u6301 post \u8BF7\u6C42\u8F6C\u4E3A put ,delete</p><p>\u8FC7\u6EE4\u5668: org.springframework.web.filter.HiddenHttpMethodFilter</p><p>\u4F5C\u7528: \u628A\u8BF7\u6C42\u4E2D\u7684 post \u8BF7\u6C42\u8F6C\u4E3A put, delete</p><p>\u5B9E\u73B0\u6B65\u9AA4:</p><blockquote><ol><li>application.properties(yml): \u5F00\u542F\u4F7F\u7528 HiddenHttpMethodFilter \u8FC7\u6EE4\u5668</li><li>\u5728\u8BF7\u6C42\u9875\u9762\u4E2D, \u5305\u542B _method \u53C2\u6570, \u4ED6\u7684\u503C\u662F put, delete, \u53D1\u8D77\u8FD9\u4E2A\u8BF7\u6C42\u4F7F\u7528\u7684 post \u65B9\u5F0F</li></ol></blockquote><p>\u542F\u7528\u8FC7\u6EE4\u5668</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">spring.mvc.hiddenmethod.filter.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u8BF7\u6C42\u9875\u9762\u4E2D, \u5305\u542B _method \u53C2\u6570</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>student/testRest<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6D4B\u8BD5\u8BF7\u6C42\u65B9\u5F0F<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hidden<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_method<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>put<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u4E00\u4E2A Controller \u6D4B\u8BD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/student&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRestController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/testRest&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testRest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;testRest&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BF7\u6C42\u65B9\u5F0F\u5FC5\u987B\u552F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u5F0F\u5FC5\u987B\u552F\u4E00" aria-hidden="true">#</a> \u8BF7\u6C42\u65B9\u5F0F\u5FC5\u987B\u552F\u4E00</h2><p>\u5F53\u51FA\u73B0\u4E0D\u540C\u8BF7\u6C42\u8BBF\u95EE\u94FE\u63A5\u4E0D\u552F\u4E00\u65F6, \u5C31\u4F1A\u62A5\u9519, \u7A0B\u5E8F\u65E0\u6CD5\u5224\u65AD\u5177\u4F53\u662F\u54EA\u4E2A\u8BF7\u6C42.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**\u9519\u8BEF 500*/</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/student&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRestController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/queryStudent/{uid}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;uid&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;queryStudent&quot;</span> <span class="token operator">+</span> uid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/queryStudent/{age}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">queryStudentPost</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;queryStudent&quot;</span> <span class="token operator">+</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function A(V,j){const s=u("ExternalLinkIcon");return o(),l("div",null,[i,n("p",null,[a("\u63A5\u53E3: API\uFF08Application Programming Interface,\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\uFF09\u662F\u4E00\u4E9B\u9884\u5148\u5B9A\u4E49\u7684\u63A5\u53E3\uFF08\u5982\u51FD\u6570\u3001HTTP \u63A5\u53E3\uFF09,\u6216\u6307"),n("a",r,[a("\u8F6F\u4EF6\u7CFB\u7EDF"),t(s)]),a("\u4E0D\u540C\u7EC4\u6210\u90E8\u5206\u8854\u63A5\u7684\u7EA6\u5B9A. \u7528\u6765\u63D0\u4F9B"),n("a",k,[a("\u5E94\u7528\u7A0B\u5E8F"),t(s)]),a("\u4E0E\u5F00\u53D1\u4EBA\u5458\u57FA\u4E8E\u67D0"),n("a",d,[a("\u8F6F\u4EF6"),t(s)]),a("\u6216\u786C\u4EF6\u5F97\u4EE5\u8BBF\u95EE\u7684\u4E00\u7EC4"),n("a",m,[a("\u4F8B\u7A0B"),t(s)]),a(",\u800C\u53C8\u65E0\u9700\u8BBF\u95EE\u6E90\u7801,\u6216\u7406\u89E3\u5185\u90E8"),n("a",v,[a("\u5DE5\u4F5C\u673A\u5236"),t(s)]),a("\u7684\u7EC6\u8282.")]),g,b,n("p",null,[a("\u4F20\u7EDF\u7684\u98CE\u683C: "),n("a",q,[a("http://localhost:9002/mytrans/addStudent?name=lisi&age=26"),t(s)])]),h,n("blockquote",null,[n("p",null,[n("a",_,[a("http://localhost:8080/myboot/student/1001"),t(s)])])]),y,f,S,n("blockquote",null,[n("p",null,[n("a",E,[a("http://localhost:8080/myboot/student/1001"),t(s)])]),n("p",null,[n("a",R,[a("http://localhost:8080/myboot/student/1001/1"),t(s)])])]),x,n("blockquote",null,[n("p",null,[n("a",B,[a("http://localhost:8080/myboot/students/1001/1002"),t(s)])])]),M,n("blockquote",null,[n("p",null,[n("a",P,[a("http://localhost:8080/myboot/student"),t(s)])])]),T,n("blockquote",null,[n("p",null,[n("a",w,[a("http://localhost:8080/myboot/students?page=1&pageSize=20"),t(s)])])]),C])}const F=p(c,[["render",A],["__file","5. RESTful.html.vue"]]);export{F as default};
import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.988b49a1.js";const t={},p=e(`<h1 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h1><p>为降低开发成本，使用 MyBatis Plus 框架自动生成业务的增删改查重复代码，并使用 LambdaQueryWrapper 实现更灵活地自定义查询。</p><p>遵循 Restful 设计规范编写接口，降低前后端接口沟通和理解成本。</p><p>前端参数:(page, pagesize, name)</p><p>mp 插件配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 配置MP的分页插件
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> mybatisPlusInterceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mybatisPlusInterceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> mybatisPlusInterceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 Page</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">IPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">8545996863226528798L</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 查询数据列表
     */</span>
    <span class="token keyword">protected</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> records <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 总数
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">long</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 每页显示条数，默认 10
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">long</span> size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 当前页
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">long</span> current <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 排序字段信息
     */</span>
    <span class="token annotation punctuation">@Getter</span>
    <span class="token annotation punctuation">@Setter</span>
    <span class="token keyword">protected</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderItem</span><span class="token punctuation">&gt;</span></span> orders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 自动优化 COUNT SQL
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> optimizeCountSql <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否进行 count 查询
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> isSearchCount <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 是否命中count缓存
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> hitCount <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * countId
     */</span>
    <span class="token annotation punctuation">@Getter</span>
    <span class="token annotation punctuation">@Setter</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span> countId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * countId
     */</span>
    <span class="token annotation punctuation">@Getter</span>
    <span class="token annotation punctuation">@Setter</span>
    <span class="token keyword">protected</span> <span class="token class-name">Long</span> maxLimit<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>       
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/page&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">R</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Page</span><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">page</span><span class="token punctuation">(</span><span class="token keyword">int</span> page<span class="token punctuation">,</span><span class="token keyword">int</span> pageSize<span class="token punctuation">,</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;page = {},pageSize = {},name = {}&quot;</span> <span class="token punctuation">,</span>page<span class="token punctuation">,</span>pageSize<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//构造分页构造器</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> pageInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>page<span class="token punctuation">,</span>pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//构造条件构造器</span>
    <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//添加过滤条件</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">Employee</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//添加排序条件</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">orderByDesc</span><span class="token punctuation">(</span><span class="token class-name">Employee</span><span class="token operator">::</span><span class="token function">getUpdateTime</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//执行查询</span>
    employeeService<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>pageInfo<span class="token punctuation">,</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token class-name">R</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>pageInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","分页查询.html.vue"]]);export{k as default};

<template><div><h1 id="使用-zookeeper" tabindex="-1"><a class="header-anchor" href="#使用-zookeeper" aria-hidden="true">#</a> 使用 Zookeeper</h1>
<p>zookeepeer 客户端依赖：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.curator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>curator-framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件, 消费者和提供者都要注册.</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>  <span class="token comment">&lt;!--使用 zookeeper --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>registry</span> <span class="token attr-name">address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zookeeper://localhost:2181<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210091949735.png" alt="image-20221009194901974"></p>
<p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210091952012.png" alt="image-20221009195204206"></p>
<h3 id="运行应用" tabindex="-1"><a class="header-anchor" href="#运行应用" aria-hidden="true">#</a> 运行应用</h3>
<blockquote>
<ol>
<li>先启动注册中心</li>
<li>再启动 tomcat 服务器</li>
<li>访问 index.jsp</li>
</ol>
</blockquote>
</div></template>



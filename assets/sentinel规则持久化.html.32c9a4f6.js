import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,e}from"./app.39dda849.js";const t={},p=e(`<h1 id="sentinel-规则持久化" tabindex="-1"><a class="header-anchor" href="#sentinel-规则持久化" aria-hidden="true">#</a> Sentinel 规则持久化</h1><h2 id="一、修改-order-service-服务" tabindex="-1"><a class="header-anchor" href="#一、修改-order-service-服务" aria-hidden="true">#</a> 一、修改 order-service 服务</h2><p>修改 OrderService，让其监听 Nacos 中的 sentinel 规则配置。</p><p>具体步骤如下：</p><h3 id="_1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖" aria-hidden="true">#</a> 1.引入依赖</h3><p>在 order-service 中引入 sentinel 监听 nacos 的依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.csp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sentinel-datasource-nacos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置-nacos-地址" tabindex="-1"><a class="header-anchor" href="#_2-配置-nacos-地址" aria-hidden="true">#</a> 2.配置 nacos 地址</h3><p>在 order-service 中的 application.yml 文件配置 nacos 地址及监听的配置信息：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">sentinel</span><span class="token punctuation">:</span>
      <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
        <span class="token key atrule">flow</span><span class="token punctuation">:</span>
          <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
            <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">8848</span> <span class="token comment"># nacos地址</span>
            <span class="token key atrule">dataId</span><span class="token punctuation">:</span> orderservice<span class="token punctuation">-</span>flow<span class="token punctuation">-</span>rules
            <span class="token key atrule">groupId</span><span class="token punctuation">:</span> SENTINEL_GROUP
            <span class="token key atrule">rule-type</span><span class="token punctuation">:</span> flow <span class="token comment"># 还可以是：degrade、authority、param-flow</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、修改-sentinel-dashboard-源码" tabindex="-1"><a class="header-anchor" href="#二、修改-sentinel-dashboard-源码" aria-hidden="true">#</a> 二、修改 sentinel-dashboard 源码</h2><p>SentinelDashboard 默认不支持 nacos 的持久化，需要修改源码。</p><h3 id="_1-解压" tabindex="-1"><a class="header-anchor" href="#_1-解压" aria-hidden="true">#</a> 1.解压</h3><p>git 官网下载 Sentinel 源代码 1.8 版本</p><p>然后并用 IDEA 打开这个项目，结构如下：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141230657.png" alt="image-20210618201412878"></p><h3 id="_2-修改-nacos-依赖" tabindex="-1"><a class="header-anchor" href="#_2-修改-nacos-依赖" aria-hidden="true">#</a> 2.修改 nacos 依赖</h3><p>在 sentinel-dashboard 源码的 pom 文件中，nacos 的依赖默认的 scope 是 test，只能在测试时使用，这里要去除：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234353.png" alt="image-20210618201607831"></p><p>将 sentinel-datasource-nacos 依赖的 scope 去掉：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.csp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>sentinel-datasource-nacos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-添加-nacos-支持" tabindex="-1"><a class="header-anchor" href="#_3-添加-nacos-支持" aria-hidden="true">#</a> 3.添加 nacos 支持</h3><p>在 sentinel-dashboard 的 test 包下，已经编写了对 nacos 的支持，我们需要将其拷贝到 main 下。</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234966.png" alt="image-20210618201726280"></p><h3 id="_4-修改-nacos-地址" tabindex="-1"><a class="header-anchor" href="#_4-修改-nacos-地址" aria-hidden="true">#</a> 4.修改 nacos 地址</h3><p>然后，还需要修改测试代码中的 NacosConfig 类：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234706.png" alt="image-20210618201912078"></p><p>修改其中的 nacos 地址，让其读取 application.properties 中的配置：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234213.png" alt="image-20210618202047575"></p><p>在 sentinel-dashboard 的 application.properties 中添加 nacos 地址配置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">nacos.addr</span><span class="token punctuation">=</span><span class="token value attr-value">localhost:8848</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-配置-nacos-数据源" tabindex="-1"><a class="header-anchor" href="#_5-配置-nacos-数据源" aria-hidden="true">#</a> 5.配置 nacos 数据源</h3><p>另外，还需要修改 com.alibaba.csp.sentinel.dashboard.controller.v2 包下的 FlowControllerV2 类：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234753.png" alt="image-20210618202322301"></p><p>让我们添加的 Nacos 数据源生效：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234191.png" alt="image-20210618202334536"></p><h3 id="_6-修改前端页面" tabindex="-1"><a class="header-anchor" href="#_6-修改前端页面" aria-hidden="true">#</a> 6.修改前端页面</h3><p>接下来，还要修改前端页面，添加一个支持 nacos 的菜单。</p><p>修改 src/main/webapp/resources/app/scripts/directives/sidebar/目录下的 sidebar.html 文件：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234998.png" alt="image-20210618202433356"></p><p>将其中的这部分注释打开：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234491.png" alt="image-20210618202449881"></p><p>修改其中的文本：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234856.png" alt="image-20210618202501928"></p><h3 id="_7-重新编译、打包项目" tabindex="-1"><a class="header-anchor" href="#_7-重新编译、打包项目" aria-hidden="true">#</a> 7.重新编译、打包项目</h3><p>运行 IDEA 中的 maven 插件，编译和打包修改好的 Sentinel-Dashboard：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211141234581.png" alt="image-20210618202701492"></p><h3 id="_8-启动" tabindex="-1"><a class="header-anchor" href="#_8-启动" aria-hidden="true">#</a> 8.启动</h3><p>启动方式跟官方一样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> sentinel-dashboard.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要修改 nacos 地址，需要添加参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> <span class="token parameter variable">-Dnacos.addr</span><span class="token operator">=</span>localhost:8848 sentinel-dashboard.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,52),i=[p];function c(l,r){return n(),s("div",null,i)}const u=a(t,[["render",c],["__file","sentinel规则持久化.html.vue"]]);export{u as default};

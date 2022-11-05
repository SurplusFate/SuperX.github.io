import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as i,a,b as n,d as c,e as s,r}from"./app.576b6d73.js";const l={},u=s(`<h1 id="_3-eureka-注册中心" tabindex="-1"><a class="header-anchor" href="#_3-eureka-注册中心" aria-hidden="true">#</a> 3. Eureka 注册中心</h1><p>假如我们的服务提供者 user-service 部署了多个实例，如图：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051338385.png" alt="image-20221105133826308"></p><p>大家思考几个问题：</p><ul><li>order-service 在发起远程调用的时候，该如何得知 user-service 实例的 ip 地址和端口？</li><li>有多个 user-service 实例地址，order-service 调用时该如何选择？</li><li>order-service 如何得知某个 user-service 实例是否依然健康，是不是已经宕机？</li></ul><h2 id="_3-1-eureka-的结构和作用" tabindex="-1"><a class="header-anchor" href="#_3-1-eureka-的结构和作用" aria-hidden="true">#</a> 3.1.Eureka 的结构和作用</h2><p>这些问题都需要利用 SpringCloud 中的注册中心来解决，其中最广为人知的注册中心就是 Eureka，其结构如下：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051338311.png" alt="image-20221105133855211"></p><p>回答之前的各个问题。</p><p>问题 1：order-service 如何得知 user-service 实例地址？</p><p>获取地址信息的流程如下：</p><ul><li>user-service 服务实例启动后，将自己的信息注册到 eureka-server（Eureka 服务端）。这个叫服务注册</li><li>eureka-server 保存服务名称到服务实例地址列表的映射关系</li><li>order-service 根据服务名称，拉取实例地址列表。这个叫服务发现或服务拉取</li></ul><p>问题 2：order-service 如何从多个 user-service 实例中选择具体的实例？</p><ul><li>order-service 从实例列表中利用负载均衡算法选中一个实例地址</li><li>向该实例地址发起远程调用</li></ul><p>问题 3：order-service 如何得知某个 user-service 实例是否依然健康，是不是已经宕机？</p><ul><li>user-service 会每隔一段时间（默认 30 秒）向 eureka-server 发起请求，报告自己状态，称为心跳</li><li>当超过一定时间没有发送心跳时，eureka-server 会认为微服务实例故障，将该实例从服务列表中剔除</li><li>order-service 拉取服务时，就能将故障实例排除了</li></ul><blockquote><p>注意：一个微服务，既可以是服务提供者，又可以是服务消费者，因此 eureka 将服务注册、服务发现等功能统一封装到了 eureka-client 端</p></blockquote><p>因此，接下来我们动手实践的步骤包括：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051339753.png" alt="image-20221105133927663"></p><h2 id="_3-2-搭建-eureka-server" tabindex="-1"><a class="header-anchor" href="#_3-2-搭建-eureka-server" aria-hidden="true">#</a> 3.2.搭建 eureka-server</h2><h3 id="_3-2-1-创建子模块" tabindex="-1"><a class="header-anchor" href="#_3-2-1-创建子模块" aria-hidden="true">#</a> 3.2.1.创建子模块</h3><p>首先搭建注册中心服务端：eureka-server，这必须是一个独立的微服务</p><p>在 cloud-demo 父工程下，创建一个子模块: eureka-server</p><p>引入 SpringCloud 为 eureka 提供的 starter 依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-2-编写启动类" tabindex="-1"><a class="header-anchor" href="#_3-2-2-编写启动类" aria-hidden="true">#</a> 3.2.2.编写启动类</h3><p>给 eureka-server 服务编写一个启动类，一定要添加一个@EnableEurekaServer 注解，开启 eureka 的注册中心功能：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>itcast<span class="token punctuation">.</span>eureka</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaServer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EurekaApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">EurekaApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-3-编写配置文件" tabindex="-1"><a class="header-anchor" href="#_3-2-3-编写配置文件" aria-hidden="true">#</a> 3.2.3.编写配置文件</h3><p>编写一个 application.yml 文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">10086</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> eureka<span class="token punctuation">-</span>server
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>10086/eureka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-4-启动服务" tabindex="-1"><a class="header-anchor" href="#_3-2-4-启动服务" aria-hidden="true">#</a> 3.2.4.启动服务</h3>`,32),o={href:"http://127.0.0.1:10086",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>看到下面结果应该是成功了：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051411100.png" alt="image-20210713222157190"></p><h2 id="_3-3-服务注册" tabindex="-1"><a class="header-anchor" href="#_3-3-服务注册" aria-hidden="true">#</a> 3.3.服务注册</h2><p>下面，我们将 user-service 注册到 eureka-server 中去。</p><h3 id="_3-3-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_3-3-1-引入依赖" aria-hidden="true">#</a> 3.3.1.引入依赖</h3><p>在 user-service 的 pom 文件中，引入下面的 eureka-client 依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-2-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-3-2-配置文件" aria-hidden="true">#</a> 3.3.2.配置文件</h3><p>在 user-service 中，修改 application.yml 文件，<strong>添加</strong>服务名称、eureka 地址：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> userservice
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>10086/eureka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-3-启动多个-user-service-实例" tabindex="-1"><a class="header-anchor" href="#_3-3-3-启动多个-user-service-实例" aria-hidden="true">#</a> 3.3.3.启动多个 user-service 实例</h3><p>为了演示一个服务有多个实例的场景，我们添加一个 SpringBoot 的启动配置，再启动一个 user-service。</p><p>首先，复制原来的 user-service 启动配置：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051411787.png" alt="image-20210713222656562"></p><p>然后，在弹出的窗口中，填写信息：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051424572.png" alt="image-20210713222757702"></p><p>现在，SpringBoot 窗口会出现两个 user-service 启动配置：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051425539.png" alt="image-20210713222841951"></p><p>不过，第一个是 8081 端口，第二个是 8082 端口。</p><p>启动两个 user-service 实例：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/image-20210713223041491.png" alt="image-20210713223041491"></p><p>查看 eureka-server 管理页面：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051426388.png" alt="image-20210713223150650"></p><h2 id="_3-4-服务发现" tabindex="-1"><a class="header-anchor" href="#_3-4-服务发现" aria-hidden="true">#</a> 3.4.服务发现</h2><p>下面，我们将 order-service 的逻辑修改：向 eureka-server 拉取 user-service 的信息，实现服务发现。</p><h3 id="_3-4-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_3-4-1-引入依赖" aria-hidden="true">#</a> 3.4.1.引入依赖</h3><p>之前说过，服务发现、服务注册统一都封装在 eureka-client 依赖，因此这一步与服务注册时一致。</p><p>在 order-service 的 pom 文件中，引入下面的 eureka-client 依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-2-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-4-2-配置文件" aria-hidden="true">#</a> 3.4.2.配置文件</h3><p>服务发现也需要知道 eureka 地址，因此第二步与服务注册一致，都是配置 eureka 信息：</p><p>在 order-service 中，修改 application.yml 文件，<strong>添加</strong>服务名称、eureka 地址：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> orderservice
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>10086/eureka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-3-服务拉取和负载均衡" tabindex="-1"><a class="header-anchor" href="#_3-4-3-服务拉取和负载均衡" aria-hidden="true">#</a> 3.4.3.服务拉取和负载均衡</h3><p>最后，我们要去 eureka-server 中拉取 user-service 服务的实例列表，并且实现负载均衡。</p><p>不过这些动作不用我们去做，只需要添加一些注解即可。</p><p>在 order-service 的 OrderApplication 中，给 RestTemplate 这个 Bean 添加一个@LoadBalanced 注解：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051429575.png" alt="image-20210713224049419"></p><p>修改 order-service 服务中的 cn.itcast.order.service 包下的 OrderService 类中的 queryOrderById 方法。修改访问的 url 路径，用服务名代替 ip、端口：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051430195.png" alt="image-20210713224245731"></p><p>spring 会自动帮助我们从 eureka-server 端，根据 userservice 这个服务名称，获取实例列表，而后完成负载均衡。</p>`,41);function k(g,v){const e=r("ExternalLinkIcon");return p(),i("div",null,[u,a("p",null,[n("启动微服务，然后在浏览器访问："),a("a",o,[n("http://127.0.0.1:10086"),c(e)])]),d])}const b=t(l,[["render",k],["__file","3. Eureka 注册中心.html.vue"]]);export{b as default};

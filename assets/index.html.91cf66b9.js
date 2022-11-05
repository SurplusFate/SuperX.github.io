import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as d,a as s,b as l,d as r,e,r as c}from"./app.576b6d73.js";const t={},o=e(`<h1 id="安装-redis" tabindex="-1"><a class="header-anchor" href="#安装-redis" aria-hidden="true">#</a> 安装 Redis</h1><p>大多数企业都是基于 Linux 服务器来部署项目，而且 Redis 官方也没有提供 Windows 版本的安装包。</p><p>此处选择的 Linux 版本为 CentOS 7.</p><h2 id="依赖库" tabindex="-1"><a class="header-anchor" href="#依赖库" aria-hidden="true">#</a> 依赖库</h2><p>Redis 是基于 C 语言编写的，因此首先需要安装 Redis 所需要的 gcc 依赖：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> gcc tcl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载并解压" tabindex="-1"><a class="header-anchor" href="#下载并解压" aria-hidden="true">#</a> 下载并解压</h2><p>Redis 的官方网站地址：https: /redis.io/</p><p>解压命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.6.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入解压目录</span>
<span class="token builtin class-name">cd</span> redis-6.2.6
<span class="token comment"># 编译并安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装目录" tabindex="-1"><a class="header-anchor" href="#安装目录" aria-hidden="true">#</a> 安装目录</h2><p>默认的安装路径是在 /usr/local/bin 目录下.</p><p>该目录已经默认配置到环境变量，因此可以在任意目录下运行这些命令。其中：</p><blockquote><p>redis-cli：是 redis 提供的命令行客户端</p><p>redis-server：是 redis 的服务端启动脚本</p><p>redis-sentinel：是 redis 的哨兵启动脚本</p></blockquote><p>指定安装目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动-redis-服务" tabindex="-1"><a class="header-anchor" href="#启动-redis-服务" aria-hidden="true">#</a> 启动 redis 服务</h2><h3 id="直接启动-了解" tabindex="-1"><a class="header-anchor" href="#直接启动-了解" aria-hidden="true">#</a> 直接启动(了解)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入redis安装目录</span>
<span class="token builtin class-name">cd</span> /usr/local/redis/bin/
<span class="token comment"># 启动服务</span>
./redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过守护进程方式启动" tabindex="-1"><a class="header-anchor" href="#通过守护进程方式启动" aria-hidden="true">#</a> 通过守护进程方式启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一步：从 redis 的源码目录中复制 redis.conf 到 redis 的安装目录</span>
<span class="token function">cp</span> /root/redis-6.2.6/redis.conf /usr/local/redis/bin/
<span class="token comment"># 第二步：修改redis.conf配置文件</span>
<span class="token builtin class-name">cd</span> /usr/local/redis/bin/
<span class="token function">vi</span> redis.conf
<span class="token comment"># 修改内容如下：</span>
<span class="token comment"># daemonize 的值从 no 修改成 yes</span>
<span class="token comment"># 第三步：启动服务</span>
./redis-server redis.conf
<span class="token comment"># 第四步：查看进程来确定redis是否启动成功，非必须</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>远程连接和密码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。</span>
<span class="token comment"># 修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0
<span class="token comment"># 守护进程，修改为yes后即可后台运行</span>
daemonize <span class="token function">yes</span>
<span class="token comment"># 密码，设置后访问Redis必须输入密码</span>
requirepass <span class="token number">123321</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 监听的端口</span>
port <span class="token number">6379</span>
<span class="token comment"># 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化</span>
等文件会保存在这个目录
<span class="token function">dir</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 数据库数量，设置为1，代表只使用1个库，默认有16个库，编号0~15</span>
databases <span class="token number">1</span>
<span class="token comment"># 设置redis能够使用的最大内存</span>
maxmemory 512mb
<span class="token comment"># 日志文件，默认为空，不记录日志，可以指定日志文件名</span>
logfile <span class="token string">&quot;redis.log&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="停止服务" tabindex="-1"><a class="header-anchor" href="#停止服务" aria-hidden="true">#</a> 停止服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 利用redis-cli来执行 shutdown 命令，即可停止 Redis 服务，</span>
<span class="token comment"># 因为之前配置了密码，因此需要通过 -u 来指定密码</span>
redis-cli <span class="token parameter variable">-u</span> <span class="token number">123321</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开机自启" tabindex="-1"><a class="header-anchor" href="#开机自启" aria-hidden="true">#</a> 开机自启</h2><p>切换到 /lib/systemd/system/ 目录，创建 redis.service 文件。命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /lib/systemd/system/
<span class="token function">vim</span> redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>redis-server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token comment"># ExecStart需要按照实际情况修改成自己的地址</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重载系统服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置开启自动启动:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开机自动启动</span>
systemctl <span class="token builtin class-name">enable</span> redis.service
<span class="token comment"># 启动redis服务</span>
systemctl start redis.service
<span class="token comment"># 查看服务状态</span>
systemctl status redis.service
<span class="token comment"># 停止服务</span>
systemctl stop redis.service
<span class="token comment"># 取消开机自动启动(卸载服务)</span>
systemctl disabled redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-桌面客户端" tabindex="-1"><a class="header-anchor" href="#redis-桌面客户端" aria-hidden="true">#</a> Redis 桌面客户端</h2><p>安装完成 Redis，我们就可以操作 Redis，实现数据的 CRUD 了。这需要用到 Redis 客户端，包括：</p><ul><li><p>命令行客户端</p></li><li><p>图形化桌面客户端</p></li><li><p>编程客户端</p></li></ul><h3 id="redis-命令行客户端" tabindex="-1"><a class="header-anchor" href="#redis-命令行客户端" aria-hidden="true">#</a> Redis 命令行客户端</h3><p>Redis 安装完成后就自带了命令行客户端：redis-cli，使用方式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>commonds<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中常见的 options 有：</p><p><code>-h 127.0.0.1</code>：指定要连接的 redis 节点的 IP 地址，默认是 127.0.0.1</p><p><code>-p 6379</code>：指定要连接的 redis 节点的端口，默认是 6379</p><p><code>-a 123321</code>：指定 redis 的访问密码</p><p>其中的 commonds 就是 Redis 的操作命令，例如：</p><p><code>ping</code>：与 redis 服务端做心跳测试，服务端正常会返回 <code>pong</code> 不指定 commond 时，会进入 <code>redis-cli</code> 的交互控制台.</p><h3 id="图形化桌面客户端" tabindex="-1"><a class="header-anchor" href="#图形化桌面客户端" aria-hidden="true">#</a> .图形化桌面客户端</h3>`,51),p={href:"https://github.com/uglide/RedisDesktopManager/releases/tag/2022.5",target:"_blank",rel:"noopener noreferrer"},u=e(`<p>Redis 默认有 16 个仓库，编号从 0 至 15. 通过配置文件可以设置仓库数量，但是不超过 16，并且不能自定义仓库名称。 如果是基于 redis-cli 连接 Redis 服务，可以通过 select 命令来选择数据库：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 选择 0号库</span>
<span class="token keyword">select</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(m,b){const n=c("ExternalLinkIcon");return i(),d("div",null,[o,s("p",null,[s("a",p,[l("RedisDesktopManager"),r(n)])]),u])}const g=a(t,[["render",v],["__file","index.html.vue"]]);export{g as default};

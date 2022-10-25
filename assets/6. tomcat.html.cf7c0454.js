import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as t,e as a}from"./app.b8060522.js";const g={},p=a(`<h1 id="_6-tomcat" tabindex="-1"><a class="header-anchor" href="#_6-tomcat" aria-hidden="true">#</a> 6. tomcat</h1><h2 id="javaweb-的概念" tabindex="-1"><a class="header-anchor" href="#javaweb-的概念" aria-hidden="true">#</a> JavaWeb 的概念</h2><ol><li><p>什么是 JavaWeb</p><p>JavaWeb 是指，所有通过 Java 语言编写可以通过浏览器访问的程序的总称，叫 JavaWeb。</p><p>JavaWeb 是基于请求和响应来开发的。</p></li><li><p>什么是请求</p><p>请求是指客户端给服务器发送数据，叫请求 Request。</p></li><li><p>什么是响应</p><p>响应是指服务器给客户端回传数据，叫响应 Response。</p></li><li><p>请求和响应的关系</p><p>请求和响应是成对出现的，有请求就有响应。</p></li></ol><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271532677.png" alt="image-20220827153234588"></p><h2 id="web-资源的分类" tabindex="-1"><a class="header-anchor" href="#web-资源的分类" aria-hidden="true">#</a> <strong>Web</strong> 资源的分类</h2><p>web 资源按实现的技术和呈现的效果的不同，又分为静态资源和动态资源两种。 静态资源：html、css、js、txt、mp4 视频 , jpg 图片 动态资源： jsp 页面、Servlet 程序</p><h2 id="常用的-web-服务器" tabindex="-1"><a class="header-anchor" href="#常用的-web-服务器" aria-hidden="true">#</a> 常用的 <strong>Web</strong> 服务器</h2><p>Tomcat：由 Apache 组织提供的一种 Web 服务器，提供对 jsp 和 Servlet 的支持。它是一种轻量级的 javaWeb 容器（服务器），也是当前应用最广的 JavaWeb 服务器（免费）。</p><p>Jboss：是一个遵从 JavaEE 规范的、开放源代码的、纯 Java 的 EJB 服务器，它支持所有的 JavaEE 规范（免费）。</p><p>GlassFish： 由 Oracle 公司开发的一款 JavaWeb 服务器，是一款强健的商业服务器，达到产品级质量（应用很少）。</p><p>Resin：是 CAUCHO 公司的产品，是一个非常流行的服务器，对 servlet 和 JSP 提供了良好的支持，性能也比较优良，resin 自身采用 JAVA 语言开发（收费，应用比较多）。</p><p>WebLogic：是 Oracle 公司的产品，是目前应用最广泛的 Web 服务器，支持 JavaEE 规范，而且不断的完善以适应新的开发要求，适合大型项目（收费，用的不多，适合大公司）。</p><h2 id="tomcat-服务器和-servlet-版本的对应关系" tabindex="-1"><a class="header-anchor" href="#tomcat-服务器和-servlet-版本的对应关系" aria-hidden="true">#</a> <strong>Tomcat</strong> 服务器和 <strong>Servlet</strong> 版本的对应关系</h2><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271538559.png" alt="image-20220827153828485"></p><p>Servlet 程序从 2.5 版本是现在世面使用最多的版本（xml 配置）</p><p>到了 Servlet3.0 之后。就是注解版本的 Servlet 使用。</p><h2 id="tomcat-的使用" tabindex="-1"><a class="header-anchor" href="#tomcat-的使用" aria-hidden="true">#</a> <strong>Tomcat</strong> 的使用</h2><ol><li><p>安装</p><p>找到你需要用的 Tomcat 版本对应的 zip 压缩包，解压到需要安装的目录即可。</p></li><li><p>目录介绍</p><p>bin 专门用来存放 Tomcat 服务器的可执行程序 conf 专门用来存放 Tocmat 服务器的配置文件 lib 专门用来存放 Tomcat 服务器的 jar 包 logs 专门用来存放 Tomcat 服务器运行时输出的日记信息 temp 专门用来存放 Tomcdat 运行时产生的临时数据 webapps 专门用来存放部署的 Web 工程。 work 是 Tomcat 工作时的目录，用来存放 Tomcat 运行时 jsp 翻译为 Servlet 的源码，和 Session 钝化的目录。</p></li><li><p>如何启动 Tomcat 服务器</p><p>找到 Tomcat 目录下的 bin 目录下的 startup.bat 文件，双击，就可以启动 Tomcat 服务器。</p><p>如何测试 Tomcat 服务器启动成功？？？</p><p>打开浏览器，在浏览器地址栏中输入以下地址测试：</p><p>1、<code>http://localhost:8080</code></p><p>2、<code>http://127.0.0.1:8080</code></p><p>3、<code>http://真实 ip:8080</code></p><p>当出现如下界面，说明 Tomcat 服务器启动成功！！！</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271543319.png" alt="image-20220827154354144"></p></li></ol><p>常见的启动失败的情况有，双击 startup.bat 文件，就会出现一个小黑窗口一闪而来。</p><p>这个时候，失败的原因基本上都是因为没有配置好 JAVA_HOME 环境变量。</p><p>常见的 JAVA_HOME 配置错误有以下几种情况： 一：JAVA_HOME 必须全大写。 二：JAVA_HOME 中间必须是下划线，不是减号- 三：JAVA_HOME 配置的路径只需要配置到 jdk 的安装目录即可。不需要带上 bin 目录。</p><h3 id="另一种启动-tomcat-服务器的方式" tabindex="-1"><a class="header-anchor" href="#另一种启动-tomcat-服务器的方式" aria-hidden="true">#</a> 另一种启动 <strong>tomcat</strong> 服务器的方式</h3><ol><li>打开命令行</li><li>cd 到 你的 Tomcat 的 bin 目录下</li><li>敲入启动命令： catalina run</li></ol><h3 id="tomcat-的停止" tabindex="-1"><a class="header-anchor" href="#tomcat-的停止" aria-hidden="true">#</a> <strong>Tomcat</strong> 的停止</h3><ol><li>点击 tomcat 服务器窗口的 x 关闭按钮</li><li>把 Tomcat 服务器窗口置为当前窗口，然后按快捷键 Ctrl+C</li><li>找到 <strong>Tomcat</strong> 的 <strong>bin</strong> 目录下的 <strong>shutdown.bat</strong> 双击，就可以停止 <strong>Tomcat</strong> 服务器</li></ol><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271547269.png" alt="image-20220827154716226"></p><h3 id="如何修改-tomcat-的端口号" tabindex="-1"><a class="header-anchor" href="#如何修改-tomcat-的端口号" aria-hidden="true">#</a> 如何修改 <strong>Tomcat</strong> 的端口号</h3><p>Mysql 默认的端口号是：3306 Tomcat 默认的端口号是：8080</p><p>找到 Tomcat 目录下的 conf 目录，找到 server.xml 配置文件。</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271548444.png" alt="image-20220827154849343"></p><h3 id="如何部暑-web-工程到-tomcat-中" tabindex="-1"><a class="header-anchor" href="#如何部暑-web-工程到-tomcat-中" aria-hidden="true">#</a> 如何部暑 <strong>web</strong> 工程到 <strong>Tomcat</strong> 中</h3><p>第一种部署方法：只需要把 <strong>web</strong> 工程的目录拷贝到 <strong>Tomcat</strong> 的 <strong>webapps</strong> 目录下即可。</p><ol><li><p>在 <strong>webapps</strong> 目录下创建一个 <strong>book</strong> 工程：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271550332.png" alt="image-20220827155048241"></p></li><li><p>把项目内容拷贝到里面：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271553293.png" alt="image-20220827155328219"></p></li><li><p>如何访问 <strong>Tomcat</strong> 下的 <strong>web</strong> 工程</p><p>只需要在浏览器中输入访问地址格式如下： <code>http://ip:port/工程名/目录下/文件名</code></p></li></ol><h3 id="第二种部署方法" tabindex="-1"><a class="header-anchor" href="#第二种部署方法" aria-hidden="true">#</a> 第二种部署方法</h3><p>找到 Tomcat 下的 conf 目录\\Catalina\\localhost\\ 下,创建如下的配置文件：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271555701.png" alt="image-20220827155546648"></p><p>abc.xml 配置文件内容如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- Context 表示一个工程上下文 --&gt;</span>
path 表示工程的访问路径:/abc
docBase 表示你的工程目录在哪里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问这个工程的路径如下:<code>http://ip:port/abc/</code>就表示访问 E:\\book 目录</p><h3 id="直接打开-html-页面和地址访问的区别" tabindex="-1"><a class="header-anchor" href="#直接打开-html-页面和地址访问的区别" aria-hidden="true">#</a> 直接打开 html 页面和地址访问的区别</h3><p>手托 html 页面的原理：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271601851.png" alt="image-20220827160120754"></p><p>输入访问地址访问的原因：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271602431.png" alt="image-20220827160210290"></p><h3 id="root-的工程的访问-以及-默认-index-html-页面的访问" tabindex="-1"><a class="header-anchor" href="#root-的工程的访问-以及-默认-index-html-页面的访问" aria-hidden="true">#</a> <strong>ROOT</strong> 的工程的访问，以及 默认 <strong>index.html</strong> 页面的访问</h3><p>当我们在浏览器地址栏中输入访问地址如下：</p><p><code>http://ip:port/</code>====&gt;&gt;&gt;&gt;没有工程名的时候，默认访问的是 ROOT 工程。</p><p>当我们在浏览器地址栏中输入的访问地址如下：</p><p><code>http://ip:port/工程名/</code>====&gt;&gt;&gt;&gt;没有资源名，默认访问 index.html 页面</p><h2 id="idea-整合-tomcat-服务器" tabindex="-1"><a class="header-anchor" href="#idea-整合-tomcat-服务器" aria-hidden="true">#</a> <strong>IDEA</strong> 整合 <strong>Tomcat</strong> 服务器</h2><p>操作的菜单如下：File | Settings | Build, Execution, Deployment | Application Servers</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271608121.png" alt="image-20220827160849002"></p><p>配置你的 Tomcat 安装目录：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271609279.png" alt="image-20220827160918235"></p><p>就可以通过创建一个 Model 查看是不是配置成功！！！</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271612992.png" alt="image-20220827161233820"></p><h2 id="idea-中动态-web-工程的操作" tabindex="-1"><a class="header-anchor" href="#idea-中动态-web-工程的操作" aria-hidden="true">#</a> <strong>IDEA</strong> 中动态 <strong>web</strong> 工程的操作</h2><ol><li><p>创建一个新模块：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271616879.png" alt="image-20220827161653819"></p></li><li><p>选择你要创建什么类型的模块：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271617719.png" alt="image-20220827161744629"></p></li></ol><p>3、输入你的模块名，点击【Finish】完成创建。</p><p>4、创建成功如下图：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271619206.png" alt="image-20220827161939060"></p><h3 id="web-工程的目录介绍" tabindex="-1"><a class="header-anchor" href="#web-工程的目录介绍" aria-hidden="true">#</a> <strong>Web</strong> 工程的目录介绍</h3><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271621108.png" alt="image-20220827162106037"></p><h3 id="如何给动态-web-工程添加额外-jar-包" tabindex="-1"><a class="header-anchor" href="#如何给动态-web-工程添加额外-jar-包" aria-hidden="true">#</a> 如何给动态 <strong>web</strong> 工程添加额外 <strong>jar</strong> 包</h3><ol><li><p>可以打开项目结构菜单操作界面，添加一个自己的类库：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271622565.png" alt="image-20220827162208495"></p></li><li><p>添加你你类库需要的 jar 包文件</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271622909.png" alt="image-20220827162243788"></p></li><li><p>选择你添加的类库，给哪个模块使用：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271623207.png" alt="image-20220827162329124"></p></li><li><p>选择 Artifacts 选项，将类库，添加到打包部署中：</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271624020.png" alt="image-20220827162404841"></p></li></ol><h3 id="使用-maven" tabindex="-1"><a class="header-anchor" href="#使用-maven" aria-hidden="true">#</a> 使用 Maven</h3><ol><li><p>进入 maven 仓库官网</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271629644.png" alt="image-20220827162948526"></p></li><li><p>搜索需要的 jar 包</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271629229.png" alt="image-20220827162930112"></p></li><li><p>找到需要的版本</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271630587.png" alt="image-20220827163042450"></p></li><li><p>复制 maven 地址</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271632332.png" alt="image-20220827163247217"></p></li><li><p>粘贴至项目 pom 文件对应的地方</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291549565.png" alt="image-20220827163408110"></p></li><li><p>刷新 maven 会自动下载导入</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271636460.png" alt="image-20220827163651602"></p><p>或者</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271637074.png" alt="image-20220827163740783"></p></li></ol><h3 id="如何在-idea-中部署工程到-tomcat-上运行" tabindex="-1"><a class="header-anchor" href="#如何在-idea-中部署工程到-tomcat-上运行" aria-hidden="true">#</a> 如何在 <strong>IDEA</strong> 中部署工程到 <strong>Tomcat</strong> 上运行</h3><ol><li><p>打开配置页面</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271642961.png" alt="image-20220827164246465"></p></li><li><p>名称可自定义</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208291549866.png" alt="image-20220827164404177"></p></li><li><p>确认你的 Tomcat 实例中有你要部署运行的 web 工程模块</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271646420.png" alt="image-20220827164648337"></p></li><li><p>你还可以修改你的 Tomcat 实例启动后默认的访问地址</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271647200.png" alt="image-20220827164759124"></p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271648752.png" alt="image-20220827164820607"></p></li><li><p>在 IDEA 中如何运行，和停止 Tomcat 实例</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271649098.png" alt="image-20220827164943056"></p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271651963.png" alt="image-20220827165146870"></p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271651845.png" alt="image-20220827165156793"></p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271652301.png" alt="image-20220827165210142"></p></li><li><p>端口修改</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271702067.png" alt="image-20220827170219348"></p></li><li><p>浏览器修改</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271702611.png" alt="image-20220827170251527"></p></li><li><p>配置资源热部署</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202208271703984.png" alt="image-20220827170339407"></p></li></ol>`,69),r=[p];function s(n,m){return i(),t("div",null,r)}const c=e(g,[["render",s],["__file","6. tomcat.html.vue"]]);export{c as default};

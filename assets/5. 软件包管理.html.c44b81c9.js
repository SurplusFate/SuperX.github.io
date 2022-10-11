import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e as n}from"./app.e5be1224.js";const d={},i=n(`<h1 id="\u8F6F\u4EF6\u5305\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5305\u7BA1\u7406" aria-hidden="true">#</a> \u8F6F\u4EF6\u5305\u7BA1\u7406</h1><h2 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm" aria-hidden="true">#</a> RPM</h2><h3 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>RPM(RedHat Package Manager),RedHat \u8F6F\u4EF6\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u7C7B\u4F3C\u4E8E windows \u91CC\u9762\u7684 setup.exe\uFF0C\u662F Linux \u8FD9\u7CFB\u5217\u64CD\u4F5C\u7CFB\u7EDF\u7684\u6253\u5305\u5B89\u88C5\u5DE5\u5177\uFF0C\u5B83\u867D\u7136\u662F RedHat \u7684\u6807\u5FD7\uFF0C\u4F46\u7406\u5FF5\u662F\u901A\u7528\u7684\u3002</p><p>RPM \u5305\u7684\u540D\u79F0\u683C\u5F0F</p><p>Apache-1.3.23-11.i386.rpm</p><p>\u201Capache\u201D \u8F6F\u4EF6\u540D\u79F0</p><p>\u201C1.3.23-11\u201D\u8F6F\u4EF6\u7684\u7248\u672C\u53F7\uFF0C\u4E3B\u7248\u672C\u548C\u6B64\u7248\u672C</p><p>\u201Ci386\u201D\u662F\u8F6F\u4EF6\u6240\u8FD0\u884C\u7684\u786C\u4EF6\u5E73\u53F0\uFF0CIntel 32 \u4F4D\u5904\u7406\u5668\u7684\u7EDF\u79F0</p><p>\u201Crpm\u201D\u6587\u4EF6\u6269\u5C55\u540D\uFF0C\u4EE3\u8868 RPM \u5305</p><h3 id="\u67E5\u8BE2\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u547D\u4EE4" aria-hidden="true">#</a> \u67E5\u8BE2\u547D\u4EE4</h3><p>\u67E5\u8BE2\u6240\u5B89\u88C5\u7684\u6240\u6709 rpm \u8F6F\u4EF6\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7531\u4E8E\u8F6F\u4EF6\u5305\u6BD4\u8F83\u591A\uFF0C\u4E00\u822C\u90FD\u4F1A\u624D\u53BB\u8FC7\u6EE4 <code>rpm -qa | grep \u540D\u79F0</code></p><p>\u67E5\u8BE2\u8F6F\u4EF6\u5305\u662F\u5426\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-q</span> \u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u8F6F\u4EF6\u5305\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qi</span> \u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u8F6F\u4EF6\u5305\u4E2D\u7684\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ql</span> \u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u6587\u4EF6\u6240\u5C5E\u8F6F\u4EF6\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qf</span> \u6587\u4EF6\u5168\u8DEF\u5F84\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5378\u8F7D\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D\u547D\u4EE4" aria-hidden="true">#</a> \u5378\u8F7D\u547D\u4EE4</h3><p>\u5378\u8F7D\u8F6F\u4EF6\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-e</span> \u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5378\u8F7D\u8F6F\u4EF6\u65F6\uFF0C\u4E0D\u68C0\u67E5\u4F9D\u8D56\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u90A3\u4E9B\u4F7F\u7528\u8BE5\u8F6F\u4EF6\u5305\u7684\u8F6F\u4EF6\u5728\u6B64\u4E4B\u540E\u53EF\u80FD\u5C31\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> \u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5378\u8F7D firefox</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-e</span> firefox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u547D\u4EE4" aria-hidden="true">#</a> \u5B89\u88C5\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> \u5305\u5168\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>\u9009\u9879</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>-i</td><td>install \u5B89\u88C5</td></tr><tr><td>-v</td><td>--verbose \u663E\u793A\u8BE6\u7EC6\u4FE1\u606F</td></tr><tr><td>-h</td><td>--hase\uFF0C\u8FDB\u5EA6\u6761</td></tr><tr><td>--nodeps</td><td>\u5B89\u88C5\u524D\u4E0D\u68C0\u67E5\u4F9D\u8D56</td></tr></tbody></table><p>\u5B89\u88C5 firefox</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> firefox-45.0.1-1.el6.centos.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4ED3\u5E93\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4ED3\u5E93\u914D\u7F6E" aria-hidden="true">#</a> \u4ED3\u5E93\u914D\u7F6E</h2><h3 id="yum-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#yum-\u6982\u8FF0" aria-hidden="true">#</a> YUM \u6982\u8FF0</h3><p>YUM(\u5168\u79F0\u4E3A Yellow dog Updater, Modified)\u662F\u4E00\u4E2A\u5728 Fedora \u548C RedHat \u4EE5\u53CA CentOS \u4E2D\u7684 Shell \u524D\u7AEF\u8F6F\u4EF6\u5305\u7BA1\u7406\u3002\u57FA\u4E8E RPM \u5305\u7BA1\u7406\uFF0C\u80FD\u591F\u4ECE\u6307\u5B9A\u7684\u670D\u52A1\u5668\u81EA\u52A8\u4E0B\u8F7D RPM \u5305\u5E76\u4E14\u5B89\u88C5\uFF0C\u53EF\u4EE5\u81EA\u52A8\u5904\u7406\u4F9D\u8D56\u6027\u5173\u7CFB\uFF0C\u5E76\u4E14\u4E00\u6B21 \u5B89\u88C5\u6240\u6709\u4F9D\u8D56\u7684\u8F6F\u4EF6\u5305\uFF0C\u65E0\u987B\u7E41\u7410\u5730\u4E00\u6B21\u4E00\u6B21\u4E0B\u8F7D\uFF0C\u5B89\u88C5\u3002</p><h3 id="yum-\u7684\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#yum-\u7684\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> YUM \u7684\u5E38\u7528\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> <span class="token punctuation">[</span>\u53C2\u6570<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>\u9009\u9879</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>-y</td><td>\u5BF9\u6240\u6709\u63D0\u95EE\u90FD\u56DE\u7B54\u201Cyes&quot;</td></tr></tbody></table><table><thead><tr><th>\u53C2\u6570</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>install</td><td>\u5B89\u88C5 rpm \u8F6F\u4EF6\u5305</td></tr><tr><td>update</td><td>\u66F4\u65B0 rpm \u8F6F\u4EF6\u5305</td></tr><tr><td>check-update</td><td>\u68C0\u67E5\u662F\u5426\u6709\u53EF\u7528\u7684\u66F4\u65B0 rpm \u8F6F\u4EF6\u5305</td></tr><tr><td>remove</td><td>\u5220\u9664\u6307\u5B9A\u7684 rpm \u8F6F\u4EF6\u5305</td></tr><tr><td>list</td><td>\u663E\u793A\u8F6F\u4EF6\u5305\u4FE1\u606F</td></tr><tr><td>clean</td><td>\u6E05\u9664 yum \u8FC7\u671F\u7684\u7F13\u5B58</td></tr><tr><td>deplist</td><td>\u663E\u793A yum \u8F6F\u4EF6\u5305\u7684\u6240\u6709\u4F9D\u8D56\u5173\u7CFB</td></tr></tbody></table><p>yum \u65B9\u5F0F\u5B89\u88C5 firefox</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u8BE2yum\u670D\u52A1\u5668\u662F\u5426\u6709\u9700\u8981\u7684\u8F6F\u4EF6</span>
yum list <span class="token operator">|</span> <span class="token function">grep</span> firefox
<span class="token comment"># \u5378\u8F7D\u8001\u7248\u672C</span>
yum remove firefox
<span class="token comment"># \u5B89\u88C5</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> firefox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u7F51\u7EDC-yum-\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7F51\u7EDC-yum-\u6E90" aria-hidden="true">#</a> \u4FEE\u6539\u7F51\u7EDC YUM \u6E90</h3><p>\u9ED8\u8BA4\u7684\u7CFB\u7EDF YUM \u6E90(\u9ED8\u8BA4\u4F1A\u81EA\u5DF1\u641C\u7D22\u6700\u8FD1\u7684)\uFF0C\u9700\u8981\u8FDE\u63A5\u56FD\u5916 apache \u7F51\u7AD9\uFF0C\u7F51\u901F\u6BD4\u8F83\u6162\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5173\u8054\u7684\u7F51\u7EDC YUM \u6E90\u4E3A\u56FD\u5185\u955C\u50CF\u7684\u7F51\u7AD9\uFF0C\u6BD4\u5982\u7F51\u6613 163,aliyun \u7B49</p><p>\u5B89\u88C5 wget, wget \u7528\u6765\u4ECE\u6307\u5B9A\u7684 URL \u4E0B\u8F7D\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token function">wget</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728/etc/yum.repos.d/\u76EE\u5F55\u4E0B\uFF0C\u5907\u4EFD\u9ED8\u8BA4\u7684 repos \u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> CentOS-Base.repo CentOS-Base .repo.backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u8F7D\u7F51\u6613 163 \u6216\u8005\u662F aliyun \u7684 repos \u6587\u4EF6,\u4EFB\u9009\u5176\u4E00</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://mirrors.aliyun.com/repo/Centos-7.repo <span class="token comment"># \u963F\u91CC\u4E91</span>
<span class="token function">wget</span> http://mirrors.163.com/.help/CentOS7-Base-163.repo <span class="token comment"># \u7F51\u6613</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u4E0B\u8F7D\u597D\u7684 repos \u6587\u4EF6\u66FF\u6362\u9ED8\u8BA4\u7684 repos \u6587\u4EF6 \u4F8B\u5982:\u7528 CentOS7-Base-163.repo \u66FF\u6362 CentOS-Base.repo</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mv</span> CentOS7-Base-163.repo CentOS-Base.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E05\u7406\u65E7\u7F13\u5B58\u6570\u636E\uFF0C\u7F13\u5B58\u65B0\u6570\u636E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum clean all
yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>yum makecache \u5C31\u662F\u628A\u670D\u52A1\u5668\u7684\u5305\u4FE1\u606F\u4E0B\u8F7D\u5230\u672C\u5730\u7535\u8111\u7F13\u5B58\u8D77\u6765</p><p>\u6D4B\u8BD5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum list <span class="token operator">|</span> <span class="token function">grep</span> firefox
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> firefox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,58),r=[i];function t(l,p){return a(),s("div",null,r)}const u=e(d,[["render",t],["__file","5. \u8F6F\u4EF6\u5305\u7BA1\u7406.html.vue"]]);export{u as default};

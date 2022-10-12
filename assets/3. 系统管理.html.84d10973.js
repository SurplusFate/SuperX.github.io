const l=JSON.parse('{"key":"v-42f2d528","path":"/Linux/3.%20%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86.html","title":"\u7CFB\u7EDF\u7BA1\u7406","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-10-12T00:00:00.000Z","order":3,"category":["linux"],"summary":"\u7CFB\u7EDF\u7BA1\u7406 \u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5 \u83B7\u53D6 ip \u5730\u5740 Linux \u6307\u4EE4: window \u6307\u4EE4: \u767B\u5F55\u540E\u4F7F\u7528 ifconfig \u6307\u4EE4\u67E5\u770B\u5F53\u524D ip \u4F7F\u7528 Xhell \u4F7F\u7528\u7B2C\u4E09\u65B9\u5DE5\u5177\u8FDE\u63A5 Linux \u670D\u52A1\u5668\uFF0C\u7B2C\u4E09\u65B9\u5DE5\u5177\u6709\u5F88\u591A\u79CD\uFF0C\u6BD4\u8F83\u5E38\u89C1\u7684\u6709: 1. SecureCRT: \u529F\u80FD\u5F3A\u5927\uFF0C\u6536\u8D39\u4EA7\u54C1 2. SSHSecureShellClient 3. XShell: \u53EF\u514D\u8D39\u4F7F\u7528 4","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/Linux/3.%20%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"\u7A7A~"}],["meta",{"property":"og:title","content":"\u7CFB\u7EDF\u7BA1\u7406"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-12T03:02:08.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-12T03:02:08.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5","slug":"\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5","link":"#\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5","children":[{"level":3,"title":"\u83B7\u53D6 ip \u5730\u5740","slug":"\u83B7\u53D6-ip-\u5730\u5740","link":"#\u83B7\u53D6-ip-\u5730\u5740","children":[]},{"level":3,"title":"\u4F7F\u7528 Xhell","slug":"\u4F7F\u7528-xhell","link":"#\u4F7F\u7528-xhell","children":[]}]},{"level":2,"title":"\u5173\u673A\u91CD\u542F","slug":"\u5173\u673A\u91CD\u542F","link":"#\u5173\u673A\u91CD\u542F","children":[{"level":3,"title":"\u57FA\u672C\u547D\u4EE4","slug":"\u57FA\u672C\u547D\u4EE4","link":"#\u57FA\u672C\u547D\u4EE4","children":[]}]},{"level":2,"title":"\u8FD0\u884C\u7EA7\u522B","slug":"\u8FD0\u884C\u7EA7\u522B","link":"#\u8FD0\u884C\u7EA7\u522B","children":[{"level":3,"title":"Linux \u8FD0\u884C\u7EA7\u522B","slug":"linux-\u8FD0\u884C\u7EA7\u522B","link":"#linux-\u8FD0\u884C\u7EA7\u522B","children":[]},{"level":3,"title":"CentOS7 \u7684\u8FD0\u884C\u7EA7\u522B","slug":"centos7-\u7684\u8FD0\u884C\u7EA7\u522B","link":"#centos7-\u7684\u8FD0\u884C\u7EA7\u522B","children":[]},{"level":3,"title":"\u67E5\u770B\u8FD0\u884C\u7EA7\u522B","slug":"\u67E5\u770B\u8FD0\u884C\u7EA7\u522B","link":"#\u67E5\u770B\u8FD0\u884C\u7EA7\u522B","children":[]},{"level":3,"title":"\u4FEE\u6539\u8FD0\u884C\u7EA7\u522B","slug":"\u4FEE\u6539\u8FD0\u884C\u7EA7\u522B","link":"#\u4FEE\u6539\u8FD0\u884C\u7EA7\u522B","children":[]}]},{"level":2,"title":"\u627E\u56DE root \u5BC6\u7801","slug":"\u627E\u56DE-root-\u5BC6\u7801","link":"#\u627E\u56DE-root-\u5BC6\u7801","children":[]},{"level":2,"title":"\u65F6\u95F4\u65E5\u671F\u7C7B","slug":"\u65F6\u95F4\u65E5\u671F\u7C7B","link":"#\u65F6\u95F4\u65E5\u671F\u7C7B","children":[{"level":3,"title":"date \u663E\u793A\u5F53\u524D\u65F6\u95F4","slug":"date-\u663E\u793A\u5F53\u524D\u65F6\u95F4","link":"#date-\u663E\u793A\u5F53\u524D\u65F6\u95F4","children":[]},{"level":3,"title":"cal \u67E5\u770B\u65E5\u5386","slug":"cal-\u67E5\u770B\u65E5\u5386","link":"#cal-\u67E5\u770B\u65E5\u5386","children":[]}]},{"level":2,"title":"\u7CFB\u7EDF\u5B9A\u65F6\u4EFB\u52A1","slug":"\u7CFB\u7EDF\u5B9A\u65F6\u4EFB\u52A1","link":"#\u7CFB\u7EDF\u5B9A\u65F6\u4EFB\u52A1","children":[{"level":3,"title":"crontab \u670D\u52A1\u7BA1\u7406","slug":"crontab-\u670D\u52A1\u7BA1\u7406","link":"#crontab-\u670D\u52A1\u7BA1\u7406","children":[]},{"level":3,"title":"at \u5B9A\u65F6\u4EFB\u52A1","slug":"at-\u5B9A\u65F6\u4EFB\u52A1","link":"#at-\u5B9A\u65F6\u4EFB\u52A1","children":[]}]},{"level":2,"title":"\u78C1\u76D8\u7BA1\u7406","slug":"\u78C1\u76D8\u7BA1\u7406","link":"#\u78C1\u76D8\u7BA1\u7406","children":[{"level":3,"title":"\u5206\u533A\u4FE1\u606F","slug":"\u5206\u533A\u4FE1\u606F","link":"#\u5206\u533A\u4FE1\u606F","children":[]},{"level":3,"title":"\u6DFB\u52A0\u78C1\u76D8","slug":"\u6DFB\u52A0\u78C1\u76D8","link":"#\u6DFB\u52A0\u78C1\u76D8","children":[]},{"level":3,"title":"\u78C1\u76D8\u5206\u533A","slug":"\u78C1\u76D8\u5206\u533A","link":"#\u78C1\u76D8\u5206\u533A","children":[]},{"level":3,"title":"\u6302\u8F7D/\u5378\u8F7D","slug":"\u6302\u8F7D-\u5378\u8F7D","link":"#\u6302\u8F7D-\u5378\u8F7D","children":[]},{"level":3,"title":"\u67E5\u770B\u78C1\u76D8\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5","slug":"\u67E5\u770B\u78C1\u76D8\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5","link":"#\u67E5\u770B\u78C1\u76D8\u7A7A\u95F4\u4F7F\u7528\u60C5\u51B5","children":[]},{"level":3,"title":"\u67E5\u770B\u6587\u4EF6\u548C\u76EE\u5F55\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4","slug":"\u67E5\u770B\u6587\u4EF6\u548C\u76EE\u5F55\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4","link":"#\u67E5\u770B\u6587\u4EF6\u548C\u76EE\u5F55\u5360\u7528\u7684\u78C1\u76D8\u7A7A\u95F4","children":[]}]},{"level":2,"title":"\u7F51\u7EDC\u914D\u7F6E","slug":"\u7F51\u7EDC\u914D\u7F6E","link":"#\u7F51\u7EDC\u914D\u7F6E","children":[{"level":3,"title":"\u914D\u7F6E\u7F51\u7EDC ip","slug":"\u914D\u7F6E\u7F51\u7EDC-ip","link":"#\u914D\u7F6E\u7F51\u7EDC-ip","children":[]},{"level":3,"title":"\u914D\u7F6E\u4E3B\u673A\u540D","slug":"\u914D\u7F6E\u4E3B\u673A\u540D","link":"#\u914D\u7F6E\u4E3B\u673A\u540D","children":[]}]},{"level":2,"title":"\u8FDB\u7A0B\u548C\u670D\u52A1","slug":"\u8FDB\u7A0B\u548C\u670D\u52A1","link":"#\u8FDB\u7A0B\u548C\u670D\u52A1","children":[{"level":3,"title":"\u8FDB\u7A0B\u7BA1\u7406\u7C7B","slug":"\u8FDB\u7A0B\u7BA1\u7406\u7C7B","link":"#\u8FDB\u7A0B\u7BA1\u7406\u7C7B","children":[]},{"level":3,"title":"\u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u8FDB\u7A0B\u72B6\u6001","slug":"\u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u8FDB\u7A0B\u72B6\u6001","link":"#\u67E5\u770B\u5F53\u524D\u7CFB\u7EDF\u8FDB\u7A0B\u72B6\u6001","children":[]},{"level":3,"title":"kill \u7EC8\u6B62\u8FDB\u7A0B","slug":"kill-\u7EC8\u6B62\u8FDB\u7A0B","link":"#kill-\u7EC8\u6B62\u8FDB\u7A0B","children":[]},{"level":3,"title":"pstree \u67E5\u770B\u8FDB\u7A0B\u6811","slug":"pstree-\u67E5\u770B\u8FDB\u7A0B\u6811","link":"#pstree-\u67E5\u770B\u8FDB\u7A0B\u6811","children":[]},{"level":3,"title":"top \u5B9E\u65BD\u76D1\u63A7\u7CFB\u7EDF\u8FDB\u7A0B\u72B6\u6001","slug":"top-\u5B9E\u65BD\u76D1\u63A7\u7CFB\u7EDF\u8FDB\u7A0B\u72B6\u6001","link":"#top-\u5B9E\u65BD\u76D1\u63A7\u7CFB\u7EDF\u8FDB\u7A0B\u72B6\u6001","children":[]},{"level":3,"title":"netstat \u663E\u793A\u7F51\u7EDC\u72B6\u6001\u548C\u7AEF\u53E3\u5360\u7528\u4FE1\u606F","slug":"netstat-\u663E\u793A\u7F51\u7EDC\u72B6\u6001\u548C\u7AEF\u53E3\u5360\u7528\u4FE1\u606F","link":"#netstat-\u663E\u793A\u7F51\u7EDC\u72B6\u6001\u548C\u7AEF\u53E3\u5360\u7528\u4FE1\u606F","children":[]},{"level":3,"title":"service \u670D\u52A1\u7BA1\u7406","slug":"service-\u670D\u52A1\u7BA1\u7406","link":"#service-\u670D\u52A1\u7BA1\u7406","children":[]},{"level":3,"title":"chkconfig \u8BBE\u7F6E\u540E\u53F0\u670D\u52A1\u7684\u81EA\u542F\u914D\u7F6E","slug":"chkconfig-\u8BBE\u7F6E\u540E\u53F0\u670D\u52A1\u7684\u81EA\u542F\u914D\u7F6E","link":"#chkconfig-\u8BBE\u7F6E\u540E\u53F0\u670D\u52A1\u7684\u81EA\u542F\u914D\u7F6E","children":[]},{"level":3,"title":"systemctl","slug":"systemctl","link":"#systemctl","children":[]},{"level":3,"title":"systemctl \u8BBE\u7F6E\u540E\u53F0\u670D\u52A1\u7684\u81EA\u542F\u914D\u7F6E","slug":"systemctl-\u8BBE\u7F6E\u540E\u53F0\u670D\u52A1\u7684\u81EA\u542F\u914D\u7F6E","link":"#systemctl-\u8BBE\u7F6E\u540E\u53F0\u670D\u52A1\u7684\u81EA\u542F\u914D\u7F6E","children":[]}]}],"git":{"createdTime":1665407232000,"updatedTime":1665543728000,"contributors":[{"name":"\u7A7A~","email":"1543403469@qq.com","commits":8}]},"readingTime":{"minutes":17.47,"words":5240},"filePathRelative":"Linux/3. \u7CFB\u7EDF\u7BA1\u7406.md","localizedDate":"2022\u5E7410\u670812\u65E5"}');export{l as data};

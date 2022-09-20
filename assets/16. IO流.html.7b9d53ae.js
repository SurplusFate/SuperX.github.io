const e=JSON.parse('{"key":"v-03de001e","path":"/Java/16.%20IO%E6%B5%81.html","title":"16. IO \u6D41","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-08-13T00:00:00.000Z","order":16,"category":["java"],"summary":"16. IO \u6D41 \\" \u5728\u4E11\u964B\u7684 Java I/O \u7F16\u7A0B\u65B9\u5F0F\u8BDE\u751F\u591A\u5E74\u4EE5\u540E\uFF0CJava \u7EC8\u4E8E\u7B80\u5316\u4E86\u6587\u4EF6\u8BFB\u5199\u7684\u57FA\u672C\u64CD\u4F5C\u3002\\" IO\uFF08\u8F93\u5165/\u8F93\u51FA\uFF09\u662F\u6BD4\u8F83\u4E4F\u5473\u7684\u4E8B\u60C5\uFF0C\u56E0\u4E3A\u770B\u4E0D\u5230\u660E\u663E\u7684\u8FD0\u884C\u6548\u679C\uFF0C\u4F46\u8F93\u5165/\u8F93\u51FA\u662F\u6240\u6709\u7A0B\u5E8F\u90FD\u5FC5\u9700\u7684\u90E8\u5206\u2014\u2014\u4F7F\u7528\u8F93\u5165\u673A\u5236\uFF0C\u5141\u8BB8\u7A0B\u5E8F\u8BFB\u53D6\u5916\u90E8\u6570\u636E\uFF08\u5305\u62EC\u6765\u81EA\u78C1\u76D8\u3001\u5149\u76D8\u7B49\u5B58\u50A8\u8BBE\u5907\u7684\u6570\u636E\uFF09\u3001\u7528\u6237\u8F93\u5165\u6570\u636E\uFF1B\u4F7F\u7528\u8F93\u51FA\u673A\u5236\uFF0C\u5141\u8BB8\u7A0B\u5E8F\u8BB0\u5F55\u8FD0\u884C\u72B6\u6001\uFF0C\u5C06\u7A0B\u5E8F\u6570\u636E\u8F93\u51FA\u5230\u78C1\u76D8","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/Java/16.%20IO%E6%B5%81.html"}],["meta",{"property":"og:site_name","content":"\u7A7A~"}],["meta",{"property":"og:title","content":"16. IO \u6D41"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-20T02:19:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-08-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-20T02:19:56.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"File \u7C7B","slug":"file-\u7C7B","link":"#file-\u7C7B","children":[{"level":3,"title":"\u8BBF\u95EE\u6587\u4EF6\u548C\u76EE\u5F55","slug":"\u8BBF\u95EE\u6587\u4EF6\u548C\u76EE\u5F55","link":"#\u8BBF\u95EE\u6587\u4EF6\u548C\u76EE\u5F55","children":[]},{"level":3,"title":"\u6587\u4EF6\u8FC7\u6EE4\u5668","slug":"\u6587\u4EF6\u8FC7\u6EE4\u5668","link":"#\u6587\u4EF6\u8FC7\u6EE4\u5668","children":[]}]},{"level":2,"title":"\u7406\u89E3 Java \u7684 IO \u6D41","slug":"\u7406\u89E3-java-\u7684-io-\u6D41","link":"#\u7406\u89E3-java-\u7684-io-\u6D41","children":[{"level":3,"title":"\u6D41\u7684\u5206\u7C7B","slug":"\u6D41\u7684\u5206\u7C7B","link":"#\u6D41\u7684\u5206\u7C7B","children":[]},{"level":3,"title":"\u6D41\u7684\u6982\u5FF5\u6A21\u578B","slug":"\u6D41\u7684\u6982\u5FF5\u6A21\u578B","link":"#\u6D41\u7684\u6982\u5FF5\u6A21\u578B","children":[]}]},{"level":2,"title":"\u5B57\u8282\u6D41\u548C\u5B57\u7B26\u6D41","slug":"\u5B57\u8282\u6D41\u548C\u5B57\u7B26\u6D41","link":"#\u5B57\u8282\u6D41\u548C\u5B57\u7B26\u6D41","children":[{"level":3,"title":"InputStream \u548C Reader","slug":"inputstream-\u548C-reader","link":"#inputstream-\u548C-reader","children":[]},{"level":3,"title":"OutputStream \u548C Writer","slug":"outputstream-\u548C-writer","link":"#outputstream-\u548C-writer","children":[]}]},{"level":2,"title":"\u8F93\u5165/\u8F93\u51FA\u6D41\u4F53\u7CFB","slug":"\u8F93\u5165-\u8F93\u51FA\u6D41\u4F53\u7CFB","link":"#\u8F93\u5165-\u8F93\u51FA\u6D41\u4F53\u7CFB","children":[{"level":3,"title":"\u5904\u7406\u6D41\u7684\u7528\u6CD5","slug":"\u5904\u7406\u6D41\u7684\u7528\u6CD5","link":"#\u5904\u7406\u6D41\u7684\u7528\u6CD5","children":[]},{"level":3,"title":"\u4F53\u7CFB","slug":"\u4F53\u7CFB","link":"#\u4F53\u7CFB","children":[]},{"level":3,"title":"\u8F6C\u6362\u6D41","slug":"\u8F6C\u6362\u6D41","link":"#\u8F6C\u6362\u6D41","children":[]},{"level":3,"title":"\u63A8\u56DE\u8F93\u5165\u6D41","slug":"\u63A8\u56DE\u8F93\u5165\u6D41","link":"#\u63A8\u56DE\u8F93\u5165\u6D41","children":[]}]},{"level":2,"title":"\u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165/\u8F93\u51FA","slug":"\u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165-\u8F93\u51FA","link":"#\u91CD\u5B9A\u5411\u6807\u51C6\u8F93\u5165-\u8F93\u51FA","children":[]},{"level":2,"title":"Java \u865A\u62DF\u673A\u8BFB\u5199\u5176\u4ED6\u8FDB\u7A0B\u7684\u6570\u636E","slug":"java-\u865A\u62DF\u673A\u8BFB\u5199\u5176\u4ED6\u8FDB\u7A0B\u7684\u6570\u636E","link":"#java-\u865A\u62DF\u673A\u8BFB\u5199\u5176\u4ED6\u8FDB\u7A0B\u7684\u6570\u636E","children":[]},{"level":2,"title":"RandomAccessFile","slug":"randomaccessfile","link":"#randomaccessfile","children":[]},{"level":2,"title":"\u5BF9\u8C61\u5E8F\u5217\u5316","slug":"\u5BF9\u8C61\u5E8F\u5217\u5316","link":"#\u5BF9\u8C61\u5E8F\u5217\u5316","children":[{"level":3,"title":"\u4F7F\u7528\u5BF9\u8C61\u6D41\u5B9E\u73B0\u5E8F\u5217\u5316","slug":"\u4F7F\u7528\u5BF9\u8C61\u6D41\u5B9E\u73B0\u5E8F\u5217\u5316","link":"#\u4F7F\u7528\u5BF9\u8C61\u6D41\u5B9E\u73B0\u5E8F\u5217\u5316","children":[]},{"level":3,"title":"\u5BF9\u8C61\u5F15\u7528\u7684\u5E8F\u5217\u5316","slug":"\u5BF9\u8C61\u5F15\u7528\u7684\u5E8F\u5217\u5316","link":"#\u5BF9\u8C61\u5F15\u7528\u7684\u5E8F\u5217\u5316","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316","slug":"\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316","link":"#\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316","children":[]},{"level":3,"title":"\u53E6\u4E00\u79CD\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316\u673A\u5236","slug":"\u53E6\u4E00\u79CD\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316\u673A\u5236","link":"#\u53E6\u4E00\u79CD\u81EA\u5B9A\u4E49\u5E8F\u5217\u5316\u673A\u5236","children":[]},{"level":3,"title":"\u7248\u672C","slug":"\u7248\u672C","link":"#\u7248\u672C","children":[]}]},{"level":2,"title":"NIO","slug":"nio","link":"#nio","children":[{"level":3,"title":"NIO \u6982\u8FF0","slug":"nio-\u6982\u8FF0","link":"#nio-\u6982\u8FF0","children":[]},{"level":3,"title":"\u4F7F\u7528 Buffer","slug":"\u4F7F\u7528-buffer","link":"#\u4F7F\u7528-buffer","children":[]},{"level":3,"title":"\u4F7F\u7528 Channel","slug":"\u4F7F\u7528-channel","link":"#\u4F7F\u7528-channel","children":[]},{"level":3,"title":"\u5B57\u7B26\u96C6\u548C Charset","slug":"\u5B57\u7B26\u96C6\u548C-charset","link":"#\u5B57\u7B26\u96C6\u548C-charset","children":[]}]},{"level":2,"title":"NIO.2","slug":"nio-2","link":"#nio-2","children":[{"level":3,"title":"Path\u3001Paths \u548C Files \u6838\u5FC3 API","slug":"path\u3001paths-\u548C-files-\u6838\u5FC3-api","link":"#path\u3001paths-\u548C-files-\u6838\u5FC3-api","children":[]},{"level":3,"title":"\u4F7F\u7528 FileVisitor \u904D\u5386\u6587\u4EF6\u548C\u76EE\u5F55","slug":"\u4F7F\u7528-filevisitor-\u904D\u5386\u6587\u4EF6\u548C\u76EE\u5F55","link":"#\u4F7F\u7528-filevisitor-\u904D\u5386\u6587\u4EF6\u548C\u76EE\u5F55","children":[]},{"level":3,"title":"\u4F7F\u7528 WatchService \u76D1\u63A7\u6587\u4EF6\u53D8\u5316","slug":"\u4F7F\u7528-watchservice-\u76D1\u63A7\u6587\u4EF6\u53D8\u5316","link":"#\u4F7F\u7528-watchservice-\u76D1\u63A7\u6587\u4EF6\u53D8\u5316","children":[]},{"level":3,"title":"\u8BBF\u95EE\u6587\u4EF6\u5C5E\u6027","slug":"\u8BBF\u95EE\u6587\u4EF6\u5C5E\u6027","link":"#\u8BBF\u95EE\u6587\u4EF6\u5C5E\u6027","children":[]}]}],"git":{"createdTime":1663640396000,"updatedTime":1663640396000,"contributors":[{"name":"\u7A7A~","email":"1543403469@qq.com","commits":1}]},"readingTime":{"minutes":71.2,"words":21360},"filePathRelative":"Java/16. IO\u6D41.md","localizedDate":"2022\u5E748\u670813\u65E5"}');export{e as data};

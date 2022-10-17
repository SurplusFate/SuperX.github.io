const l=JSON.parse('{"key":"v-11a46ab6","path":"/docs/Java/10.%20%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88%E4%B8%8B%EF%BC%89.html","title":"10. \u9762\u5411\u5BF9\u8C61\uFF08\u4E0B\uFF09","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-07-12T00:00:00.000Z","order":10,"category":["java"],"summary":"10. \u9762\u5411\u5BF9\u8C61\uFF08\u4E0B\uFF09 \u5305\u88C5\u7C7B Java \u7684 8 \u79CD\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0D\u652F\u6301\u9762\u5411\u5BF9\u8C61\u7684\u7F16\u7A0B\u673A\u5236\uFF0C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\u4E5F\u4E0D\u5177\u5907\u201C\u5BF9\u8C61\u201D\u7684\u7279\u6027\uFF1A\u6CA1\u6709 Field\u3001\u65B9\u6CD5\u53EF\u4EE5\u88AB\u8C03\u7528\u3002 \u5728\u67D0\u4E9B\u65F6\u5019\uFF0C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u4F1A\u6709\u4E00\u4E9B\u5236\u7EA6\uFF0C\u4F8B\u5982\u6240\u6709\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\u90FD\u7EE7\u627F\u4E86 Object \u7C7B\uFF0C\u90FD\u53EF\u5F53\u6210 Object \u7C7B\u578B\u53D8\u91CF\u4F7F\u7528\u3002\u4F46\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u53D8\u91CF\u5C31\u4E0D\u53EF\u4EE5\uFF0C\u5982\u679C\u6709\u4E2A\u65B9\u6CD5\u9700\u8981 Object \u7C7B\u578B","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/docs/Java/10.%20%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%EF%BC%88%E4%B8%8B%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"\u7A7A~"}],["meta",{"property":"og:title","content":"10. \u9762\u5411\u5BF9\u8C61\uFF08\u4E0B\uFF09"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-17T03:57:24.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-07-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-17T03:57:24.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u5305\u88C5\u7C7B","slug":"\u5305\u88C5\u7C7B","link":"#\u5305\u88C5\u7C7B","children":[]},{"level":2,"title":"\u5904\u7406\u5BF9\u8C61","slug":"\u5904\u7406\u5BF9\u8C61","link":"#\u5904\u7406\u5BF9\u8C61","children":[{"level":3,"title":"toString","slug":"tostring","link":"#tostring","children":[]},{"level":3,"title":"equals","slug":"equals","link":"#equals","children":[]}]},{"level":2,"title":"\u7C7B\u6210\u5458","slug":"\u7C7B\u6210\u5458","link":"#\u7C7B\u6210\u5458","children":[{"level":3,"title":"\u7406\u89E3\u7C7B\u6210\u5458","slug":"\u7406\u89E3\u7C7B\u6210\u5458","link":"#\u7406\u89E3\u7C7B\u6210\u5458","children":[]},{"level":3,"title":"\u5355\u4F8B","slug":"\u5355\u4F8B","link":"#\u5355\u4F8B","children":[]}]},{"level":2,"title":"final","slug":"final","link":"#final","children":[{"level":3,"title":"final \u6210\u5458\u53D8\u91CF","slug":"final-\u6210\u5458\u53D8\u91CF","link":"#final-\u6210\u5458\u53D8\u91CF","children":[]},{"level":3,"title":"final \u5C40\u90E8\u53D8\u91CF","slug":"final-\u5C40\u90E8\u53D8\u91CF","link":"#final-\u5C40\u90E8\u53D8\u91CF","children":[]},{"level":3,"title":"final \u5BF9\u8C61","slug":"final-\u5BF9\u8C61","link":"#final-\u5BF9\u8C61","children":[]},{"level":3,"title":"\u5B8F\u53D8\u91CF","slug":"\u5B8F\u53D8\u91CF","link":"#\u5B8F\u53D8\u91CF","children":[]},{"level":3,"title":"final \u65B9\u6CD5","slug":"final-\u65B9\u6CD5","link":"#final-\u65B9\u6CD5","children":[]},{"level":3,"title":"final \u7C7B","slug":"final-\u7C7B","link":"#final-\u7C7B","children":[]},{"level":3,"title":"\u4E0D\u53EF\u53D8\u7C7B","slug":"\u4E0D\u53EF\u53D8\u7C7B","link":"#\u4E0D\u53EF\u53D8\u7C7B","children":[]},{"level":3,"title":"\u7F13\u5B58\u4E0D\u53EF\u53D8\u7C7B\u7684\u5B9E\u4F8B","slug":"\u7F13\u5B58\u4E0D\u53EF\u53D8\u7C7B\u7684\u5B9E\u4F8B","link":"#\u7F13\u5B58\u4E0D\u53EF\u53D8\u7C7B\u7684\u5B9E\u4F8B","children":[]}]},{"level":2,"title":"\u62BD\u8C61\u7C7B","slug":"\u62BD\u8C61\u7C7B","link":"#\u62BD\u8C61\u7C7B","children":[{"level":3,"title":"\u62BD\u8C61\u65B9\u6CD5\u548C\u62BD\u8C61\u7C7B","slug":"\u62BD\u8C61\u65B9\u6CD5\u548C\u62BD\u8C61\u7C7B","link":"#\u62BD\u8C61\u65B9\u6CD5\u548C\u62BD\u8C61\u7C7B","children":[]},{"level":3,"title":"\u62BD\u8C61\u7C7B\u7684\u4F5C\u7528","slug":"\u62BD\u8C61\u7C7B\u7684\u4F5C\u7528","link":"#\u62BD\u8C61\u7C7B\u7684\u4F5C\u7528","children":[]}]},{"level":2,"title":"\u63A5\u53E3","slug":"\u63A5\u53E3","link":"#\u63A5\u53E3","children":[{"level":3,"title":"\u63A5\u53E3\u7684\u6982\u5FF5","slug":"\u63A5\u53E3\u7684\u6982\u5FF5","link":"#\u63A5\u53E3\u7684\u6982\u5FF5","children":[]},{"level":3,"title":"\u63A5\u53E3\u7684\u5B9A\u4E49","slug":"\u63A5\u53E3\u7684\u5B9A\u4E49","link":"#\u63A5\u53E3\u7684\u5B9A\u4E49","children":[]},{"level":3,"title":"\u63A5\u53E3\u7684\u7EE7\u627F","slug":"\u63A5\u53E3\u7684\u7EE7\u627F","link":"#\u63A5\u53E3\u7684\u7EE7\u627F","children":[]},{"level":3,"title":"\u4F7F\u7528\u63A5\u53E3","slug":"\u4F7F\u7528\u63A5\u53E3","link":"#\u4F7F\u7528\u63A5\u53E3","children":[]},{"level":3,"title":"\u63A5\u53E3\u548C\u62BD\u8C61\u7C7B","slug":"\u63A5\u53E3\u548C\u62BD\u8C61\u7C7B","link":"#\u63A5\u53E3\u548C\u62BD\u8C61\u7C7B","children":[]},{"level":3,"title":"\u9762\u5411\u63A5\u53E3\u7F16\u7A0B","slug":"\u9762\u5411\u63A5\u53E3\u7F16\u7A0B","link":"#\u9762\u5411\u63A5\u53E3\u7F16\u7A0B","children":[]}]},{"level":2,"title":"\u5185\u90E8\u7C7B","slug":"\u5185\u90E8\u7C7B","link":"#\u5185\u90E8\u7C7B","children":[{"level":3,"title":"\u975E\u9759\u6001\u5185\u90E8\u7C7B","slug":"\u975E\u9759\u6001\u5185\u90E8\u7C7B","link":"#\u975E\u9759\u6001\u5185\u90E8\u7C7B","children":[]},{"level":3,"title":"\u9759\u6001\u5185\u90E8\u7C7B","slug":"\u9759\u6001\u5185\u90E8\u7C7B","link":"#\u9759\u6001\u5185\u90E8\u7C7B","children":[]},{"level":3,"title":"\u4F7F\u7528\u5185\u90E8\u7C7B","slug":"\u4F7F\u7528\u5185\u90E8\u7C7B","link":"#\u4F7F\u7528\u5185\u90E8\u7C7B","children":[]},{"level":3,"title":"\u5C40\u90E8\u5185\u90E8\u7C7B","slug":"\u5C40\u90E8\u5185\u90E8\u7C7B","link":"#\u5C40\u90E8\u5185\u90E8\u7C7B","children":[]},{"level":3,"title":"\u533F\u540D\u5185\u90E8\u7C7B","slug":"\u533F\u540D\u5185\u90E8\u7C7B","link":"#\u533F\u540D\u5185\u90E8\u7C7B","children":[]},{"level":3,"title":"\u95ED\u5305\u548C\u56DE\u8C03","slug":"\u95ED\u5305\u548C\u56DE\u8C03","link":"#\u95ED\u5305\u548C\u56DE\u8C03","children":[]}]},{"level":2,"title":"\u679A\u4E3E\u7C7B","slug":"\u679A\u4E3E\u7C7B","link":"#\u679A\u4E3E\u7C7B","children":[{"level":3,"title":"\u624B\u52A8\u5B9E\u73B0\u679A\u4E3E\u7C7B","slug":"\u624B\u52A8\u5B9E\u73B0\u679A\u4E3E\u7C7B","link":"#\u624B\u52A8\u5B9E\u73B0\u679A\u4E3E\u7C7B","children":[]},{"level":3,"title":"\u679A\u4E3E\u7C7B\u5165\u95E8","slug":"\u679A\u4E3E\u7C7B\u5165\u95E8","link":"#\u679A\u4E3E\u7C7B\u5165\u95E8","children":[]},{"level":3,"title":"\u679A\u4E3E\u7C7B\u7684 Field\u3001\u65B9\u6CD5\u548C\u6784\u9020\u5668","slug":"\u679A\u4E3E\u7C7B\u7684-field\u3001\u65B9\u6CD5\u548C\u6784\u9020\u5668","link":"#\u679A\u4E3E\u7C7B\u7684-field\u3001\u65B9\u6CD5\u548C\u6784\u9020\u5668","children":[]},{"level":3,"title":"\u5B9E\u73B0\u63A5\u53E3\u7684\u679A\u4E3E\u7C7B","slug":"\u5B9E\u73B0\u63A5\u53E3\u7684\u679A\u4E3E\u7C7B","link":"#\u5B9E\u73B0\u63A5\u53E3\u7684\u679A\u4E3E\u7C7B","children":[]},{"level":3,"title":"\u5305\u542B\u62BD\u8C61\u65B9\u6CD5\u7684\u679A\u4E3E\u7C7B","slug":"\u5305\u542B\u62BD\u8C61\u65B9\u6CD5\u7684\u679A\u4E3E\u7C7B","link":"#\u5305\u542B\u62BD\u8C61\u65B9\u6CD5\u7684\u679A\u4E3E\u7C7B","children":[]}]},{"level":2,"title":"\u5BF9\u8C61\u4E0E\u5783\u573E\u56DE\u6536","slug":"\u5BF9\u8C61\u4E0E\u5783\u573E\u56DE\u6536","link":"#\u5BF9\u8C61\u4E0E\u5783\u573E\u56DE\u6536","children":[{"level":3,"title":"\u5BF9\u8C61\u5728\u5185\u5B58\u4E2D\u7684\u72B6\u6001","slug":"\u5BF9\u8C61\u5728\u5185\u5B58\u4E2D\u7684\u72B6\u6001","link":"#\u5BF9\u8C61\u5728\u5185\u5B58\u4E2D\u7684\u72B6\u6001","children":[]},{"level":3,"title":"\u5F3A\u5236\u5783\u573E\u56DE\u6536","slug":"\u5F3A\u5236\u5783\u573E\u56DE\u6536","link":"#\u5F3A\u5236\u5783\u573E\u56DE\u6536","children":[]},{"level":3,"title":"finalize \u65B9\u6CD5","slug":"finalize-\u65B9\u6CD5","link":"#finalize-\u65B9\u6CD5","children":[]},{"level":3,"title":"\u5BF9\u8C61\u7684\u8F6F\u3001\u5F31\u548C\u865A\u5F15\u7528","slug":"\u5BF9\u8C61\u7684\u8F6F\u3001\u5F31\u548C\u865A\u5F15\u7528","link":"#\u5BF9\u8C61\u7684\u8F6F\u3001\u5F31\u548C\u865A\u5F15\u7528","children":[]}]},{"level":2,"title":"\u4FEE\u9970\u7B26\u7684\u9002\u7528\u8303\u56F4","slug":"\u4FEE\u9970\u7B26\u7684\u9002\u7528\u8303\u56F4","link":"#\u4FEE\u9970\u7B26\u7684\u9002\u7528\u8303\u56F4","children":[]}],"git":{"createdTime":1665979044000,"updatedTime":1665979044000,"contributors":[{"name":"\u7A7A~","email":"1543403469@qq.com","commits":1}]},"readingTime":{"minutes":115.98,"words":34793},"filePathRelative":"docs/Java/10. \u9762\u5411\u5BF9\u8C61\uFF08\u4E0B\uFF09.md","localizedDate":"2022\u5E747\u670812\u65E5"}');export{l as data};

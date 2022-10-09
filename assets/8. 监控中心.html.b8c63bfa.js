import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,e as d}from"./app.e456697b.js";const r={},o=d('<h1 id="\u76D1\u63A7\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u76D1\u63A7\u4E2D\u5FC3" aria-hidden="true">#</a> \u76D1\u63A7\u4E2D\u5FC3</h1><p>Dubbo \u7684\u4F7F\u7528\uFF0C\u5176\u5B9E\u53EA\u9700\u8981\u6709\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u6D88\u8D39\u8005\uFF0C\u63D0\u4F9B\u8005\u8FD9\u4E09\u4E2A\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86\uFF0C\u4F46\u662F\u5E76\u4E0D\u80FD\u770B\u5230\u6709\u54EA\u4E9B\u6D88\u8D39\u8005\u548C\u63D0\u4F9B\u8005\uFF0C\u4E3A\u4E86\u66F4\u597D\u7684\u8C03\u8BD5\uFF0C\u53D1\u73B0\u95EE\u9898\uFF0C\u89E3\u51B3\u95EE\u9898\uFF0C\u56E0\u6B64\u5F15\u5165 dubbo-admin\u3002\u901A\u8FC7 dubbo-admin \u53EF\u4EE5\u5BF9\u6D88\u8D39\u8005\u548C\u63D0\u4F9B\u8005\u8FDB\u884C\u7BA1\u7406\u3002\u53EF\u4EE5\u5728 dubbo \u5E94\u7528\u90E8\u7F72\u505A\u52A8\u6001\u7684\u8C03\u6574\uFF0C\u670D\u52A1\u7684\u7BA1\u7406\u3002</p><h2 id="dubbo-admin" tabindex="-1"><a class="header-anchor" href="#dubbo-admin" aria-hidden="true">#</a> dubbo-admin</h2><p>\u56FE\u5F62\u5316\u7684\u670D\u52A1\u7BA1\u7406\u9875\u9762\uFF1B\u5B89\u88C5\u65F6\u9700\u8981\u6307\u5B9A\u6CE8\u518C\u4E2D\u5FC3\u5730\u5740\uFF0C\u5373\u53EF\u4ECE\u6CE8\u518C \u4E2D\u5FC3\u4E2D\u83B7\u53D6\u5230\u6240\u6709\u7684\u63D0\u4F9B\u8005/\u6D88\u8D39\u8005\u8FDB\u884C\u914D\u7F6E\u7BA1\u7406.</p><p>dubbo-monitor-simple: \u7B80\u5355\u7684\u76D1\u63A7\u4E2D\u5FC3.</p><h2 id="\u4E0B\u8F7D\u76D1\u63A7\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u76D1\u63A7\u4E2D\u5FC3" aria-hidden="true">#</a> \u4E0B\u8F7D\u76D1\u63A7\u4E2D\u5FC3</h2><p>https://github.com/apache/incubator-dubbo-ops</p><p>\u8FD9\u91CC\u4E0B\u8F7D\u7684\u662F\u6E90\u4EE3\u7801\uFF0C\u9700\u8981\u624B\u5DE5\u7F16\u8BD1\u624D\u80FD\u4F7F\u7528\u3002</p><h2 id="\u8FD0\u884C\u7BA1\u7406\u540E\u53F0" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u7BA1\u7406\u540E\u53F0" aria-hidden="true">#</a> \u8FD0\u884C\u7BA1\u7406\u540E\u53F0</h2><p>\u5230 dubbo-admin-0.0.1-SNAPSHOT.jar \u6240\u5728\u7684\u76EE\u5F55\u3002\u6267\u884C\u547D\u4EE4: <code>java -jar dubbo-admin-0.0.1-SNAPSHOT.jar</code></p><h2 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h2><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210092019249.png" alt="image-20221009201939199"></p><p>application.properties \u6587\u4EF6</p><p><img src="https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202210092019113.png" alt="image-20221009201952060"></p><h2 id="\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a> \u8FD0\u884C</h2><blockquote><ol><li>\u5148\u542F\u52A8\u6CE8\u518C\u4E2D\u5FC3</li><li>\u6267\u884C\u63D0\u4F9B\u8005\u9879\u76EE</li><li>\u542F\u52A8dubbo\u7BA1\u7406\u540E\u53F0: <code>java -jar dubbo-admin-0.0.1-SNAPSHOT.jar</code></li><li>\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165 http://localhost:7001 \u8BBF\u95EE\u76D1\u63A7\u4E2D\u5FC3-\u63A7\u5236\u53F0</li></ol></blockquote>',16),t=[o];function h(n,c){return e(),i("div",null,t)}const l=a(r,[["render",h],["__file","8. \u76D1\u63A7\u4E2D\u5FC3.html.vue"]]);export{l as default};

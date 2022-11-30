const e=JSON.parse('{"key":"v-3f8bd19d","path":"/docs/Java%20%E5%9F%BA%E7%A1%80/Java/15.%20%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html","title":"15. 异常处理","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-08-12T00:00:00.000Z","order":15,"category":["java"],"summary":"15. 异常处理 改进的错误恢复机制是提高代码健壮性的最强有力的方式。错误恢复在我们所编写的每一个程序中都是基本的要素，但是在 Java 中它显得格外重要，因为 Java 的主要目标之一就是创建供他人使用的程序构件。 发现错误的理想时机是在编译阶段，也就是在你试图运行程序之前。然而，编译期间并不能找出所有的错误，余下的问题必须在运行期间解决。这就需要错误源能","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/docs/Java%20%E5%9F%BA%E7%A1%80/Java/15.%20%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"空~"}],["meta",{"property":"og:title","content":"15. 异常处理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-30T09:18:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-08-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T09:18:29.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"异常概念","slug":"异常概念","link":"#异常概念","children":[]},{"level":2,"title":"异常处理机制","slug":"异常处理机制","link":"#异常处理机制","children":[{"level":3,"title":"使用 try...catch 捕获异常","slug":"使用-try-catch-捕获异常","link":"#使用-try-catch-捕获异常","children":[]},{"level":3,"title":"异常类的继承体系","slug":"异常类的继承体系","link":"#异常类的继承体系","children":[]},{"level":3,"title":"多异常捕获","slug":"多异常捕获","link":"#多异常捕获","children":[]},{"level":3,"title":"访问异常信息","slug":"访问异常信息","link":"#访问异常信息","children":[]},{"level":3,"title":"使用 finally 回收资源","slug":"使用-finally-回收资源","link":"#使用-finally-回收资源","children":[]},{"level":3,"title":"异常处理的嵌套","slug":"异常处理的嵌套","link":"#异常处理的嵌套","children":[]},{"level":3,"title":"try-with-resources","slug":"try-with-resources","link":"#try-with-resources","children":[]}]},{"level":2,"title":"Checked 异常和 Runtime 异常体系","slug":"checked-异常和-runtime-异常体系","link":"#checked-异常和-runtime-异常体系","children":[{"level":3,"title":"使用 throws 声明抛出异常","slug":"使用-throws-声明抛出异常","link":"#使用-throws-声明抛出异常","children":[]}]},{"level":2,"title":"使用 throw 抛出异常","slug":"使用-throw-抛出异常","link":"#使用-throw-抛出异常","children":[{"level":3,"title":"异常链","slug":"异常链","link":"#异常链","children":[]},{"level":3,"title":"抛出异常","slug":"抛出异常","link":"#抛出异常","children":[]},{"level":3,"title":"自定义异常","slug":"自定义异常","link":"#自定义异常","children":[]},{"level":3,"title":"catch 和 throw 同时使用","slug":"catch-和-throw-同时使用","link":"#catch-和-throw-同时使用","children":[]},{"level":3,"title":"增强的 throw 语句","slug":"增强的-throw-语句","link":"#增强的-throw-语句","children":[]}]},{"level":2,"title":"异常跟踪栈","slug":"异常跟踪栈","link":"#异常跟踪栈","children":[]},{"level":2,"title":"异常处理规则","slug":"异常处理规则","link":"#异常处理规则","children":[{"level":3,"title":"不要过度使用异常","slug":"不要过度使用异常","link":"#不要过度使用异常","children":[]},{"level":3,"title":"不要使用过于庞大的 try 块","slug":"不要使用过于庞大的-try-块","link":"#不要使用过于庞大的-try-块","children":[]},{"level":3,"title":"避免使用 Catch All 语句","slug":"避免使用-catch-all-语句","link":"#避免使用-catch-all-语句","children":[]},{"level":3,"title":"不要忽略捕获到的异常","slug":"不要忽略捕获到的异常","link":"#不要忽略捕获到的异常","children":[]}]}],"git":{"createdTime":1669799909000,"updatedTime":1669799909000,"contributors":[{"name":"superX","email":"1543403469@qq.com","commits":1}]},"readingTime":{"minutes":35.01,"words":10503},"filePathRelative":"docs/Java 基础/Java/15. 异常处理.md","localizedDate":"2022年8月12日"}');export{e as data};

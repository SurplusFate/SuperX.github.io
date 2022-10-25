const e=JSON.parse('{"key":"v-e5521da0","path":"/docs/Java/17.%20IO%E6%B5%81.html","title":"17. IO 流","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-08-13T00:00:00.000Z","order":17,"category":["java"],"summary":"17. IO 流 \\" 在丑陋的 Java I/O 编程方式诞生多年以后，Java 终于简化了文件读写的基本操作。\\" IO（输入/输出）是比较乏味的事情，因为看不到明显的运行效果，但输入/输出是所有程序都必需的部分——使用输入机制，允许程序读取外部数据（包括来自磁盘、光盘等存储设备的数据）、用户输入数据；使用输出机制，允许程序记录运行状态，将程序数据输出到磁盘","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/docs/Java/17.%20IO%E6%B5%81.html"}],["meta",{"property":"og:site_name","content":"空~"}],["meta",{"property":"og:title","content":"17. IO 流"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-25T10:07:49.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-08-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-25T10:07:49.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"File 类","slug":"file-类","link":"#file-类","children":[{"level":3,"title":"访问文件和目录","slug":"访问文件和目录","link":"#访问文件和目录","children":[]},{"level":3,"title":"文件过滤器","slug":"文件过滤器","link":"#文件过滤器","children":[]}]},{"level":2,"title":"理解 Java 的 IO 流","slug":"理解-java-的-io-流","link":"#理解-java-的-io-流","children":[{"level":3,"title":"流的分类","slug":"流的分类","link":"#流的分类","children":[]},{"level":3,"title":"流的概念模型","slug":"流的概念模型","link":"#流的概念模型","children":[]}]},{"level":2,"title":"字节流和字符流","slug":"字节流和字符流","link":"#字节流和字符流","children":[{"level":3,"title":"InputStream 和 Reader","slug":"inputstream-和-reader","link":"#inputstream-和-reader","children":[]},{"level":3,"title":"OutputStream 和 Writer","slug":"outputstream-和-writer","link":"#outputstream-和-writer","children":[]}]},{"level":2,"title":"输入/输出流体系","slug":"输入-输出流体系","link":"#输入-输出流体系","children":[{"level":3,"title":"处理流的用法","slug":"处理流的用法","link":"#处理流的用法","children":[]},{"level":3,"title":"体系","slug":"体系","link":"#体系","children":[]},{"level":3,"title":"转换流","slug":"转换流","link":"#转换流","children":[]},{"level":3,"title":"推回输入流","slug":"推回输入流","link":"#推回输入流","children":[]}]},{"level":2,"title":"重定向标准输入/输出","slug":"重定向标准输入-输出","link":"#重定向标准输入-输出","children":[]},{"level":2,"title":"Java 虚拟机读写其他进程的数据","slug":"java-虚拟机读写其他进程的数据","link":"#java-虚拟机读写其他进程的数据","children":[]},{"level":2,"title":"RandomAccessFile","slug":"randomaccessfile","link":"#randomaccessfile","children":[]},{"level":2,"title":"对象序列化","slug":"对象序列化","link":"#对象序列化","children":[{"level":3,"title":"使用对象流实现序列化","slug":"使用对象流实现序列化","link":"#使用对象流实现序列化","children":[]},{"level":3,"title":"对象引用的序列化","slug":"对象引用的序列化","link":"#对象引用的序列化","children":[]},{"level":3,"title":"自定义序列化","slug":"自定义序列化","link":"#自定义序列化","children":[]},{"level":3,"title":"另一种自定义序列化机制","slug":"另一种自定义序列化机制","link":"#另一种自定义序列化机制","children":[]},{"level":3,"title":"版本","slug":"版本","link":"#版本","children":[]}]},{"level":2,"title":"NIO","slug":"nio","link":"#nio","children":[{"level":3,"title":"NIO 概述","slug":"nio-概述","link":"#nio-概述","children":[]},{"level":3,"title":"使用 Buffer","slug":"使用-buffer","link":"#使用-buffer","children":[]},{"level":3,"title":"使用 Channel","slug":"使用-channel","link":"#使用-channel","children":[]},{"level":3,"title":"字符集和 Charset","slug":"字符集和-charset","link":"#字符集和-charset","children":[]}]},{"level":2,"title":"NIO.2","slug":"nio-2","link":"#nio-2","children":[{"level":3,"title":"Path、Paths 和 Files 核心 API","slug":"path、paths-和-files-核心-api","link":"#path、paths-和-files-核心-api","children":[]},{"level":3,"title":"使用 FileVisitor 遍历文件和目录","slug":"使用-filevisitor-遍历文件和目录","link":"#使用-filevisitor-遍历文件和目录","children":[]},{"level":3,"title":"使用 WatchService 监控文件变化","slug":"使用-watchservice-监控文件变化","link":"#使用-watchservice-监控文件变化","children":[]},{"level":3,"title":"访问文件属性","slug":"访问文件属性","link":"#访问文件属性","children":[]}]}],"git":{"createdTime":1666692469000,"updatedTime":1666692469000,"contributors":[{"name":"SurplusFate","email":"1543403469@qq.com","commits":1}]},"readingTime":{"minutes":71.2,"words":21360},"filePathRelative":"docs/Java/17. IO流.md","localizedDate":"2022年8月13日"}');export{e as data};

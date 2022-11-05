const e=JSON.parse('{"key":"v-3b9d7776","path":"/docs/Spring%E7%B3%BB%E5%88%97/SpringCloud/3.%20Eureka%20%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83.html","title":"3. Eureka 注册中心","lang":"zh-CN","frontmatter":{"summary":"3. Eureka 注册中心 假如我们的服务提供者 user-service 部署了多个实例，如图： 大家思考几个问题： order-service 在发起远程调用的时候，该如何得知 user-service 实例的 ip 地址和端口？; 有多个 user-service 实例地址，order-service 调用时该如何选择？; order-service","head":[["meta",{"property":"og:url","content":"https://SurplusFate.github.io/docs/Spring%E7%B3%BB%E5%88%97/SpringCloud/3.%20Eureka%20%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83.html"}],["meta",{"property":"og:site_name","content":"空~"}],["meta",{"property":"og:title","content":"3. Eureka 注册中心"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-05T11:20:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-11-05T11:20:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"3.1.Eureka 的结构和作用","slug":"_3-1-eureka-的结构和作用","link":"#_3-1-eureka-的结构和作用","children":[]},{"level":2,"title":"3.2.搭建 eureka-server","slug":"_3-2-搭建-eureka-server","link":"#_3-2-搭建-eureka-server","children":[{"level":3,"title":"3.2.1.创建子模块","slug":"_3-2-1-创建子模块","link":"#_3-2-1-创建子模块","children":[]},{"level":3,"title":"3.2.2.编写启动类","slug":"_3-2-2-编写启动类","link":"#_3-2-2-编写启动类","children":[]},{"level":3,"title":"3.2.3.编写配置文件","slug":"_3-2-3-编写配置文件","link":"#_3-2-3-编写配置文件","children":[]},{"level":3,"title":"3.2.4.启动服务","slug":"_3-2-4-启动服务","link":"#_3-2-4-启动服务","children":[]}]},{"level":2,"title":"3.3.服务注册","slug":"_3-3-服务注册","link":"#_3-3-服务注册","children":[{"level":3,"title":"3.3.1.引入依赖","slug":"_3-3-1-引入依赖","link":"#_3-3-1-引入依赖","children":[]},{"level":3,"title":"3.3.2.配置文件","slug":"_3-3-2-配置文件","link":"#_3-3-2-配置文件","children":[]},{"level":3,"title":"3.3.3.启动多个 user-service 实例","slug":"_3-3-3-启动多个-user-service-实例","link":"#_3-3-3-启动多个-user-service-实例","children":[]}]},{"level":2,"title":"3.4.服务发现","slug":"_3-4-服务发现","link":"#_3-4-服务发现","children":[{"level":3,"title":"3.4.1.引入依赖","slug":"_3-4-1-引入依赖","link":"#_3-4-1-引入依赖","children":[]},{"level":3,"title":"3.4.2.配置文件","slug":"_3-4-2-配置文件","link":"#_3-4-2-配置文件","children":[]},{"level":3,"title":"3.4.3.服务拉取和负载均衡","slug":"_3-4-3-服务拉取和负载均衡","link":"#_3-4-3-服务拉取和负载均衡","children":[]}]}],"git":{"createdTime":1667647234000,"updatedTime":1667647234000,"contributors":[{"name":"SurplusFate","email":"1543403469@qq.com","commits":1}]},"readingTime":{"minutes":4.52,"words":1355},"filePathRelative":"docs/Spring系列/SpringCloud/3. Eureka 注册中心.md","localizedDate":"2022年11月5日"}');export{e as data};

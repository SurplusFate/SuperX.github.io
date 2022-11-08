# 原来 @Autowired 注解还可以这么玩？

## @Autowired 字段

我们可以把 `@Autowired` 注解标注在类文件中的字段属性上，通过这种方式，Spring 容器启动的时候会查找相应的 `Bean` ，然后通过反射的方式注入到这个字段中。

例子如下：

```java
@Controller
public class PayController {
    @Autowired
    PayService aliPayService;
}
```

这种方式使用起来非常方便，而且对于字段的要求也比较低，它可以是 `public`,也可以是 `private`范围。

日常编程中，我一般是直接使用这种方式，简洁又便利。

## @Autowired 构造方法

第二种方式，我们可以使用类中的构造函数注入相应属性，例子如下：

```java
@Controller
public class PayController {

    PayService aliPayService;

    @Autowired
    public PayController(PayService aliPayService) {
        this.aliPayService = aliPayService;
    }
}
```

`@Autowired` 构造方法里的传参，可以是一个，也可以是多个。如果是多个参数，那 Spring 一起都注入进来。

```java
@Controller
public class PayController {

    PayService aliPayService;

    OrderService orderService;

    @Autowired
    public PayController(PayService aliPayService, OrderService orderService) {
        this.aliPayService = aliPayService;
        this.orderService=orderService;
    }
}
```

这种方式在注入多个属性的时候用起来还是比较方便的。

那其实有一种情况下，如果一个类不存在无参的构造函数，只存在有参的构造函数，那实际上我们即使不用 `@Autowired`标注，Spring 也会帮我们注入相应的属性。

![图片](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211051000604.jpeg)

可以看到，上面的例子，我们没有在构造函数上使用 `@Autowired`标注，但是 IDEA 依然显示我们成功注入相应的属性。

## @Autowired 方法

第三种方式，我们可以通过方法注入相应属性，例子如下：

```java
@Controller
public class PayController {

    PayService aliPayService;

    @Autowired
    public void setAliPayService(PayService aliPayService) {
        this.aliPayService = aliPayService;
    }
}
```

那之前我一直以为这种方式只能使用 `setxxx`才可以成功的注入属性 ，那其实是我理解错了，这个方法可以任意的命名。

那方法注入，其实跟构造方法一样，也可以同时有多个传参，Spring 将会把这些属性一起注入。

![图片](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211050958823.jpeg)

## @Autowired 多个 Bean

最后一种方式，Spring 可以使用 `@Autowired` 标注 `Array` (数组)，`Collections`(集合)，甚至是 `Map` (散列表)，通过这种命方式注入多个相同类型的 `Bean`。

比如这种方式，将 `PayService` 接口所有实现类注入到 `Array`数组中。

![图片](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211050958835.jpeg)

也可以是这种方式，注入到 `List` 集合中。

![图片](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211050958838.jpeg)

上面的两个例子，数组与集合中的 `Bean` 的顺序是根据 Spring 创建的顺序。

如果你想指定里面排序的优先级，那你就需要使用 `@Order`或者 `@Priority` 指定一下优先级，比如这样:

![图片](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211050958852.jpeg)

或者这样：

![图片](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211050958957.jpeg)

`@Order/Priority` 注解中值越小，那它的优先级就越高。

最后我们还可以将 `PayService` 接口所有实现类注入到 `Map` 中，其中里面的 `key` 就是 Spring 的 `Bean` 的名字。

![图片](https://gcore.jsdelivr.net/gh/SurplusFate/guide_img@main/img/202211050958275.jpeg)

> ps: 使用 `@Autowired` 注入属性到 Map 中，`key` 必须是 `String` 类型。
>
> 这也可以理解，你要是其他类型，Spring 都不知道去哪里给你找。。。

## 总结

`@Autowired`注解可以把相应 `Bean` 注入到相关属性中，它的注入方式有很多种。

我们可以使用 `@Autowired`直接标注类中的字段，快速使用。

我们也可以使用 `@Autowired` 标注构造方法/普通的方法，这样可以方便注入多个 `Bean`。

最后，我们还可以 `@Autowired`标注 `Array` (数组)，`Collections`(集合)，甚至是 `Map` (散列表)，将所有匹配到的 `Bean` 注入进来。

那最后一种方式，其实在某些场景非常有用。比如说，我们通过 `@Autowired`将所有匹配到 `Bean` 注入到 `Map` 中，利用这个特性，我们可以快速实现策略模式。

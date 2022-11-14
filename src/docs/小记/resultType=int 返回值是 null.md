---
icon: note
category:
  - note
---

# resultType=int 返回值是 null

在 xml 中写 SQL 语句时, 指定的 `resultType="int"` 当 `mysql` 中没查到数据时返回值不是 -1, 也不是 0, 而是 `null`.

原因:

mybatis 对 `resultType` 的官方描述

> 期望从这条语句中返回结果的类全限定名或别名。 注意，如果返回的是集合，那应该设置为集合包含的类型，而不是集合本身的类型。 resultType 和 resultMap 之间只能同时使用一个。

其中提到类别名, 在查找官方文档中类别名对照表时发现:

| 别名       | 映射的类型 |
| ---------- | ---------- |
| `_int`     | `int`      |
| `_integer` | `int`      |
| `int`      | `Integer`  |

`int` 对应的是 `Integer` 对象, 所以最后返回 `null`.

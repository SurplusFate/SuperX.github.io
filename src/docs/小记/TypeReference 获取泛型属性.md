# `TypeReference` 获取泛型属性

当一个对象含有的属性有泛型时, 反序列化该对象可以尝试使用 `TypeReference`.

例如:

```java
@Data
public class RedisData<T> {
    private LocalDateTime expireTime;
    private T data;
}
```

当尝试使用 hutool 工具类反序列化该对象时:

```java
RedisData<Shop> redisData = JSONUtil.toBean(json, new TypeReference<RedisData<Shop>>() {
        }, false);
```

使用 FastJson:

```java
JSONObject jsonObj = new JSONObject();
ist<String> list = jsonObj.getObject("key", new TypeReference<List<Integer>>(){});
```

hutool 工具类中的 `TypeReference` 是参考 `FastJson` 中的 `TypeReference`.

FastJson 中的 `TypeReference`.

```java
protected TypeReference(){
	Type superClass = getClass().getGenericSuperclass();

	Type type = ((ParameterizedType) superClass).getActualTypeArguments()[0];

	Type cachedType = classTypeCache.get(type);
	if (cachedType == null) {
		classTypeCache.putIfAbsent(type, type);
		cachedType = classTypeCache.get(type);
	}

	this.type = cachedType;
}

```
`Type[] getActualTypeArguments`

> 核心接口，返回泛型类型数组， 该接口可获取父类实际泛型类型，返回的Type数组对象表示该类型的实际类型参数。

`Type getRawType()`
> 返回原始类型Type

`Type getOwnerType()`
> 返回 Type 对象，表示此类型是其成员之一的类型。

示例

```java
public static void main(String[] args) {

	class IntMap extends HashMap<String,Integer> {

	}
	IntMap intMap = new IntMap();
	System.out.println("superClass："+intMap.getClass().getSuperclass());

	Type type = intMap.getClass().getGenericSuperclass();
	if(type instanceof ParameterizedType){
		ParameterizedType p = (ParameterizedType) type;
		for (Type t : p.getActualTypeArguments()){
			System.out.println(t);
		}
	}

	System.out.println("=====newclass=====");
	Map<String,Integer> newIntMap = new HashMap<>();
	System.out.println(newIntMap.getClass().getSuperclass());

	Type newClassType = newIntMap.getClass().getGenericSuperclass();
	if(newClassType instanceof ParameterizedType){
		ParameterizedType p = (ParameterizedType) newClassType;
		for (Type t : p.getActualTypeArguments()){
			System.out.println(t);
		}
	}

	System.out.println("=====subclass=====");
	HashMap<String,Integer> subIntMap = new HashMap<String,Integer>(){};
	System.out.println(subIntMap.getClass().getSuperclass());

	Type subClassType = subIntMap.getClass().getGenericSuperclass();
	if(subClassType instanceof ParameterizedType){
		ParameterizedType p = (ParameterizedType) subClassType;
		for (Type t : p.getActualTypeArguments()){
			System.out.println(t);
		}
	}

}
```

结果

```shell
superClass：class java.util.HashMap
class java.lang.String
class java.lang.Integer
=====newclass=====
class java.util.AbstractMap
K
V
=====subclass=====
class java.util.HashMap
class java.lang.String
class java.lang.Integer
```

参考文章: https://blog.csdn.net/u014764107/article/details/116933951
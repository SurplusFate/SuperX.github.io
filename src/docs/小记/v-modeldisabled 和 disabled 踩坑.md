##双向绑定基本知识

`v-model` 是 `:value` 和 `@input` 的结合, 相当于语法糖.

仅限：

- `<input>`
- `<select>`
- `<textarea>`
- `components`

修饰符：

`.lazy` —— 监听 change 事件而不是 input
`.number` —— 将输入的合法符串转为数字
`.trim` —— 移除输入内容两端空格

例如:

```js
<input
  :value="text"
  @input="event => text = event.target.value">
```

等价于:

```js
<input v-model="text">
```

- 文本类型的 `<input>` 和 `<textarea>` 元素会绑定 `value` 属性并侦听 `input` 事件；
- `<input type="checkbox">` 和 `<input type="radio">` 会绑定 `checked` 属性并侦听 `change` 事件；
- `<select>` 会绑定 `value` 属性并侦听 `change` 事件：

> v-model 会忽略任何表单元素上初始的 value、checked 或 selected attribute。它将始终将当前绑定的 JavaScript 状态视为数据的正确来源。你应该在 JavaScript 中使用data 选项来声明该初始值。

## 踩坑

### 问题一

习惯性的简写成 `:disabled` 结果发现无法监视复选框的变化.

```html
<div class="alert-input-agree">
	<input :checked="isOk.isAgree" name="isAgree" type="checkbox"/>
	我已阅读并同意
	<a href="javascript:;" target="_blank">《动力金融网注册服务协议》</a>
</div>
```

```js
  watch: {
    isOk: {
      deep: true,
      handler() {
        console.log(this.isOk.isAgree + "--------------------")
		...
      },
    },
  },
```

改成 `v-model:disabled` 就行了

```html
<div class="alert-input-agree">
	<input v-model:checked="isOk.isAgree" name="isAgree" type="checkbox"/>
	我已阅读并同意
	<a href="javascript:;" target="_blank">《动力金融网注册服务协议》</a>
</div>
```

### 问题二

简写的情况下是单向绑定, 收集的是 `input` 属性的变化值, 不会影响 `value` 属性的值.

```html
<div class="alert-input-btn">
	<input :disabled="isDisabledSub"
	:style="{background: isDisabledSubColor}"
	class="login-submit" type="submit" value="注册">
</div>
```

![image](https://img2022.cnblogs.com/blog/2451333/202210/2451333-20221020200557974-1187078830.png)

全称的情况下双向绑定, 收集的是 `value` 属性的值, 还会和 `value` 属性发送数据绑定.

```html
<div class="alert-input-btn">
	<input v-model:disabled="isDisabledSub"
	:style="{background: isDisabledSubColor}"
	class="login-submit" type="submit" value="注册">
</div>
```

![image](https://img2022.cnblogs.com/blog/2451333/202210/2451333-20221020200647700-821433387.png)

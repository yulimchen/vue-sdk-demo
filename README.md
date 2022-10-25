# vue-sdk-demo

## 依赖安装
```shell
yarn
```

### 运行服务

默认 `src/main.js` 入口文件

```shell
yarn serve
```

### 打包库

默认 `src/Login.js` 入口文件

```shell
yarn lib
```



### 库使用示例

`yarn lib` 之后得到 `Login.umd.js`，修改 `dist/demo.html` 文件后使用浏览器打开

```html
<meta charset="utf-8">
<title>Login demo</title>
<script src="./Login.umd.js"></script>


<script>
console.log(Login)
window.onload = function () {
  Login.test() // 打印666666
  Login.init({}) // 渲染组件
}
</script>
```


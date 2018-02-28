## 网站性能优化项目

#### 如何运行

直接访问[githup pages](http://cuilei.top/Website-Optimization_zh/)

```bash
  $> cd /你的工程目录
  $> python -m SimpleHTTPServer 8080
```

1. 打开浏览器，访问 localhost:8080
2. 下载 [ngrok](https://ngrok.com/) 并将其安装在你的工程根目录下，让你的本地服务器能够被远程访问。

``` bash
  $> cd /你的工程目录
  $> ./ngrok http 8080
```

#### Part 1: 优化 index.html 的 PageSpeed Insights 得分

-  用gulp.js
  - 压缩图片
  - 压缩css
- 内联css
- 添加media：print
- 异步JavaScript

#### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

- 参考避免强制同步布局对 changePizzaSizes 函数进行了重构，先读取样式而后执行更改以避免强制同步布局问题。
- 使用 requestAnimationFrame 优化 updatePositions 中的绘制动画操作。
- 为披萨滑窗增加了 will-change CSS 属性，这样每一个 pizza 都会有自己的图层，可以避免图层重绘制。

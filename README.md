# nodeJS-learning
nodejs的一些学习笔记

### 前言 为什么学习node
node的强大之处在于非阻塞I/O，适应分块传输数据、较差的网络环境，尤其擅长高并发的访问。简单（使用javascript，json进行编码），轻量，node本身是代码又可以是服务器。

### 使用
node xxx.js 

### 一些总结
#### 1.错误优先回调函数
回调函数的第一个参数始终是一个错误对象，用于检测程序是否出现错误，其余参数用于传递数据，例如
```
fs.readFile(filePath, function(err, data) {if (err) {//handle the error}// use the data object});
```

#### 2.避免回调地狱
可以将回调函数作为一个单独的函数 也可以使用util的promisify


#### 3.核心模块
fs、path、流、events、net和全局对象例如global、Buffer等等。

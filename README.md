# 设置跨域头中间件

一个跨域问题解决方案，对开发环境或者是匹配的域名规则的链接设置允许跨域，使用方便；

## 使用

> npm install gynamic-cors-headers --save

## 参数
```javascript
corsHeader(corsReg, /* allowHeaders */);
```

| 参数 | 意义 | 
|:---:|:----:|
| corsReg | 必填，需要跨域的域名匹配正则 |
| allowHeaders | <header-name>逗号分隔的受支持请求标头列表。|



## 用法

```javascript
// 对baidu.com设置允许跨域
var express = require('express');
var corsHeader = require('gynamic-cors-headers');
var router = express.Router();

router.use(
  corsHeader(/https?:\/\/(\w+\.?-?)+\.baidu\.com$/i, 'content-type, spanId')
);
```






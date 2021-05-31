# client
接口文档www.web-jshtml.cn
接口的基础路径 http://www.web-jshtml.cn/productapi

渡一接口地址:https://github.com/DuYi-Edu/VueMallAdmin
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## 布局问题：
.left{
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 250px;
    固定定位
}
.top{
    固定定位
}
.main{
    **绝对定位**
    position: absolute;
    top: 70px;
    right: 0;
    bottom: 0;
    left: 250px;
    加一个最小高度
    min-height:400px;
}

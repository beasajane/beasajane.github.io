当时得不到结果，后续得到结果，为异步
异步编程方式，稍后拿到结果


结构化信息：有着特定语法的格式，都可以叫结构化信息  html xml json等


```js
function get(url, callback) { // 异步请求 ，不会使得页面卡住
    var xhr = new XMLHttpRequest() 
    xhr.open('get', url)
    xhr.addEventListener('load', e => { // send 响应加载页面
        callback(xhr.responseText)
    })
    xhr.send()
}
```
// 阿贾克斯 ajax


<!-- 封装成函数 -->
```js
http1.0 http1.1 明文编码    http2.0 3.0 二进制编码，提高压缩率
requestHeader
responseHeader

xhr = new XMLHttpRequest() // 创建
xhr.open('get', '/', false) // 设定请求方法，url， 头部  // 只能请求当前网站的网页
xhr.send() // 如果open中的第三个参数为false（使用同步方式发起请求） ，send函数调用在会收到完整的相应之后返回（即，该函数会一直持续运行，会使得网页在该函数运行完之前，卡住）
xhr.responseText //  类似 FileRead

xhr.open('get','/', true) // 异步请求 ，但xhr.send()没有输出
// xhr.open('get','/')  // 默认值为true


function get(url) { // 同步请求   该封装会有卡顿  
    var xhr = new XMLHttpRequest() 
    xhr.open('get', url, false)
    xhr.send()
    return xhr.responseText
}

get('https://api.ipify.org/?format=text') //获取IP地址
get('https://api.ipify.org/?format=json') //获取IP地址
JSON.parse(get('https://xieranmaya.github.io/images/cats/cats.json'))// 此为阿贾克斯

 // 异步请求 ，不会使得页面卡住
    var xhr = new XMLHttpRequest() 
    xhr.open('get', url)
    xhr.addEventListener('load', e => { // 事件先于send()绑定，防止send()运行完，事件还未绑定, 输出为空
        console.log(xhr.responseText)
    })
    xhr.send()

function get(url, callback) { // 异步请求 ，不会使得页面卡住
    var xhr = new XMLHttpRequest() 
    xhr.open('get', url)
    xhr.addEventListener('load', e => { // send 响应加载页面
        callback(xhr.responseText)
    })
    xhr.send()
}


getFileContent(file, callback) {// 类似
  var fr = new FileReader()
  fr.addEventListener('load', function() {
    callback(fr.result)
  })
  fr.readAsText(file)
}
```
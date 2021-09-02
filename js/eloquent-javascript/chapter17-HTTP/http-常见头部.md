常见头部
# 请求头； 
  * Host: 告诉服务器浏览器是用什么域名和端口发的请求，其实就是地址中域名与端口的组合
  * User-Agent: 告诉服务器当前浏览器的信息，如版本号，系统，厂商与navigator.userAgent读出来的一样
  * Referer: 告诉服务器是哪个页面在请求这个资源。或者说档期那资源请求后被用在哪个页面（img，js，css）是地址栏当前地址。对于服务器来说，它可以通过这个请求头知道是哪个页面在请求这个资源。
    可以实现防盗链（没有用自己的服务器来回应该资源，用别人的服务器，使用别人服务器的流量）
  * accept: */*
    表示请求方希望接收的响应体类型 
  * accept-encoding: gzip, deflate, br
    表示接收方能够接收的压缩算法类型
  * accept-language: zh-CN,zh;q=0.9
    表示请求方希望接收的页面自然语言类型（给用户看的）
  * Connection: keep-alive/close
    表示请求方希望承载这个http请求的tcp连接在http流程结束后是保持还是关闭
    * 需要配合 content-length头使用
      可以在一个请求/响应流程结束后继续使用这个tcp连接进行下一个请求/响应流程
        更进一步则是一次发多个请求，在连接上按顺序等待对应的响应结果
          称为http管线化（pipeline）
          Connection: keep-alive
          Keep-Alive: timeout=5
  * If-Modified-Since: Wed, 01 Sep 2021 03:35:23 GMT
      如果自此时间之后修改过，就返回新的内容给我，浏览器此时有该时的缓存版本
  * If-None-Match: iklsdfjgksldfg3lsdfkgjsldfkgj
      如果你那里的这个资源不匹配这个Etag， 则返回新的

# 响应头
  * date: Thu, 02 Sep 2021 09:05:21 GMT
    * 表示服务器处理或响应该请求时间
  * Content-Type: text/html; charset=UFT-8
    * 响应体的媒体类型
  * content-length: 0
    * 响应体的长度
  * contention: keep-alive
  * content-encoding: gzip
    * 响应体的压缩算法
  * server: nginx
    * 表示服务器的软件，很多软件没有
  * transfer-encoding: chunked
    * 传输方式，一段段发送，往往有这个header，就没有content-length了
  * last-modinfied: Wed, 02 Sep 2021 03:35:23 GMT
    * 该资源的最后修改时间
  * expires:
    * 该资源的过期时间，在过期之前，浏览器可以使用缓存斑斑，过期之后须重新请求
      在过期之前用户如果按了F5或类似的刷新操作，浏览器可能重新请求
  * content-Disposition：attachment
    * 当响应中有这个header并且为attachment的时候，浏览器会触发下载对话框
  * ETag：iklsdfjgksldfg3lsdfkgjsldfkgj
    * 资源的hashcode 
  * WWW-Authenticate: Basic realm=""  // 响应头
    * 服务器要求客户端提供账号， 引号里是提示（浏览器不一定会展示）
    浏览器端要求启用输入账号以后请求会带上一下头部
      Authorization: Basic YWFhOmHiYg==  // 请求头
      YWFhOmHiYg== 是用户名和密码用号码拼接后的base64编码
      服务器验证后给出响应结果
  * content-security-policy: default-src 'none'; base-uri 'self'; block-all-mixed-content; connect-src 'self' uploads.github.com www.githubstatus.com collector.githubapp.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events translator.github.com wss://alive.github.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com; frame-ancestors 'none'; frame-src render.githubusercontent.com viewscreen.githubusercontent.com; img-src 'self' data: github.githubassets.com identicons.github.com collector.githubapp.com github-cloud.s3.amazonaws.com secured-user-images.githubusercontent.com/ *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; worker-src github.com/socket-worker-b05e50fc.js gist.github.com/socket-worker-b05e50fc.js
    * 内容安全策略，它是给html页面的响应头，限制这个页面的安全策略 (实例：GitHub有)
    * content-security-policy: 
        default-src 'none'
          没指定的项的默认值
        base-uri 'self'
          当前页面
        block-all-mixed-content
          组织所有混合内容，即https页面不能加载http资源
        connect-src 'self' uploads.github.com www.githubstatus.com collector.githubapp.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events translator.github.com wss://alive.github.com
          页面里的js能够（通过xhr或websocket）连接哪些服务器
        font-src github.githubassets.com
          页面能够加载来自哪里的字体
        form-action 'self' github.com gist.github.com
          页面能够将表单提交到哪个服务器（哪里）
        frame-ancestors 'none'
          这个页面能够将谁作为自己的frame祖先
          ‘none’谁都不能作为这个页面的frame祖先
          即这个页面无法用frame的形式嵌套在任何页面
        frame-src render.githubusercontent.com viewscreen.githubusercontent.com
          页面能够加载来自哪里的frame页面
        img-src 'self' data: github.githubassets.com identicons.github.com collector.githubapp.com github-cloud.s3.amazonaws.com secured-user-images.githubusercontent.com/ *.githubusercontent.com
          页面能够加载来自哪里的图片
        manifest-src 'self'
          页面能够加载来自哪里的manifest
        media-src github.com user-images.githubusercontent.com/
          页面能够加载来自哪里的多媒体资源
        script-src github.githubassets.com
          页面能够加载来自哪里的js。这种写法会让内联js都无法运行（<div onclick='fd()'>）
        style-src 'unsafe-inline' github.githubassets.com
          页面能够加载来自哪里的css。
        worker-src github.com/socket-worker-b05e50fc.js gist.github.com/socket-worker-b05e50fc.js
          页面启动的我让的人能够来自哪里


协商缓存: 

ETag/If-None-Match
  GET /resource HTTP/1.1
  *********************
  HTTP/1.1 200 OK
  ETag: hashcode of the resource
  *********************
  GET /resource HTTP/1.1
  If-None-Match: hashcode of the resource
  ******************
  HTTP/1.1 304 Not Modified // 无响应体  304 状态码表示协商缓存成功

last-modinfied/If-Modified-Since
  GET /resource HTTP/1.1
  *****************************
  HTTP/1.1 200 OK
  Last-modinfied
  *********************
  GET /resource HTTP/1.1
  If-Modified-Since: XXXX
  ******************
  HTTP/1.1 304 Not Modified // 无响应体  304 状态码表示协商缓存成功


// ftp rfc595  ftp文档
// tcp rfc793  tcp文档


专门控制缓存的header：
cacheControl 既可以出现请求头也可以出现响应头里
Cache-Control: adkfjaslkdfhajdhfgkdnfgjsdf

强缓存（使用资源时，直接使用，不发请求）： 网页的入口不使用强缓存   304缓存可以的   什么页面什么资源需要什么缓存
Cache-Control
Expires


cors相关
CORS:(corss 跨域资源共享  https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
  Access-Control-Allow-Access: *  //
  Access-Control-Allow-Methods: *  // 预检请求允许的请求方法
  Access-Control-Allow-Headers: *  // 预检请求允许的请求头
  Access-Control-Allow-Credientials: *  // 预检请求声明是否允许带上登录信息
  Access-Control-Max-Age: *  // 预检请求所声明的内容的有效期，在有效期内发送复合声明的请求，不用再发预检请求

预检请求（preflight request）预检请求的请求方法 OPTIONS0.
  在正式请求之前发起的一个用于[询问服务器当前客户端能否请求]的请求
  当并不是所有的请求都有预检请求，只有非简单请求
  简单请求: ( simple request  查 mdn 文档)
  
  非简单请求:
<!-- hypertext transfer protocal -->

HTTP 是请求响应模型（资源、resource）
浏览器请求 服务器回应
（c/s架构：一软件形式呈现的； b/s架构： 以网站形式呈现的 ；这两种是评价网络型的软件）
DNS 请求响应（域名）

http协议是（明文协 议Ascii码，并不是用通过二进制编码的形式呈现的。二进制编码效率最高（空间上效率））

状态码
2xx 4xx(404) 5xx

一个IP可以对应多个域名
a.com 指向一个IP
c.com 指向一个IP
b.com 指向一个IP



<!-- 请求 -->
<!-- https://www.google.com/search?q=hellow+world&oq=hellow+world&aqs=chrome..69i57.14053j0j15&sourceid=chrome&ie=UTF-8 -->
GET/POST/DELET  
<!-- 基于现成的http框架 大小都可以被识别 -->
METHOD URL HTTP/1.1
<!-- 头部  有标准的头部  有自行设计的头部   要记住十组头部  http响应模型  -->
Host: 域名加端口号
user-agent: alsdkjflka
SLDKFJ: ASLDKFJSLAKDF  
LFKASD:  ASLKDFJALKSDJF
ALSDJFK: FASLKDJFALS
FALSKD: ALSKDFJ

laskdfjadslfkmbkldbjndf


<!-- 响应 -->
HTTP/1.1 状态码（三字符 1xx 2xx 3xx 4xx等） 状态文字  
<!--  2xx => 成功 ； 3xx => 跳转 没有响应体；  4xx => 客户端有错误  有问题； 5xx 服务器 有问题 -->
data:  kajsdlkk
content-type: dalsdkjf
content-length: 1345


响应请求，再浏览器的开发工具中可以看到

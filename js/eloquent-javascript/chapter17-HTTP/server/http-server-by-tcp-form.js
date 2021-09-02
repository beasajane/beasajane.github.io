var net = require('net') // 获取tcp模块
var fs = require('fs') // 文件系统模块

var server = net.createServer() // 创建tcp服务器

//所有人的留言
var messages = loadMessages()
function loadMessages() {
  try{
    var str = fs.readFileSync('./messages.json')
    return JSON.parse(str)
  } catch(e) {
    return []
  }
}
function saveMessages() {
  var str = JSON.stringify(messages)
  fs.writeFileSync('./messages.json',str) // 建立一个留言json文件
}
// 当服务器接收到一个客户端连接时，浏览器每发一个请求，这个事件就会触发一次
server.on('connection', (conn) => {

  //连接上收到数据时,浏览器发来的数据
  conn.on('data', data => {  // 用户每点击一次，返回一次
    // console.log(data.toString())
    var str = data.toString()
    var [header, body] = str.split('\r\n\r\n')
    var [head, ...header] = header.split('\r\n')
    var [method, url] = head.split(' ')
    //解构
    console.log(method, url, body)

    if( method == 'POST' && url == '/liuyan' ) { // 如果请求的时留言信息
      var info = parseQueryString(body) //解析出留言信息
      info.time = new Date().toString() // 留言时间
      // console.log(info)
      messages.push(info)
      saveMessages()

      //若没有下方三行代码（服务器给浏览器回应），直接end，则不会直接断开，浏览器会尝试再次执行上方的代码，直到三次都会收到服务器返回的内容，页面关闭，同时报错，同时内容会添加到messages中三次
      conn.write('HTTP/1.1 301 OK please go to this url\r\n')  //（放置用户刷新，大多网站都用跳转方式）   301状态码 让该页面跳转到url页面  跳转页面时用GET请求    、、如果不跳转，用户刷新的时候，浏览器会再次发送刚才写的内容，post到服务器
      conn.write('Location: /\r\n')  // 目标地址: /\r\n
      conn.write('\r\n') // 

      // url == '/' // 该形式 下方的if没有&& method == 'GET'条件    由于时post请求 浏览器刷新，会再请求（提交）一次form表单，重复之前提交的操作

      conn.end() // 结束代码之前，必须有一个服务器回应的内容
    }

    // 
      // var [a, b, ...c] = [1,2,3,4,5,6,7]
      // var temp = str.split('\r\n\r\n')
      // var head = temp[0]
      // var body = temp[1]

    //格式
    if(url == '/' && method == 'GET') { // 如果请求的时留言的首页

      conn.write('HTTP/1.1 200 OK\r\n')
      conn.write('Content-Type: text/html; charset=UTF-8\r\n')
      conn.write('\r\n')

      // conn.write(`<h1>hellow world! i come in now!${new Date()}</h1>\r\n`)
      //POST 产生副作用 如提交表单
      // GET 不产生副作用 如在地址栏输入地址请求服务器的一个页面

      conn.write(`
        <form method='POST' action='/liuyan'>
          <fieldset>
            <legend>留言板</legend>
            Name: <br><input type='text' name='name'>
            <br>
            Message: <br><textarea cols='60' rows='6' name='message'></textarea><br>
            <button>确认</button>
          </fieldset>
        </form>
      `)

      for(var i = messages.length - 1 ; i >- 0; i--){  //只能留文本内容
        var msg = messages[i]
        conn.write(`
          <div>
            <h3>${escape(msg.name)}</h3>
            <p>${escape(msg.message)}</p>
            @ ${msg.time}
          </div>
        `)
      }
      conn.end()
    }

    if(url == '/favicon.ico') { // 网站图标  
      var img = fs.readFileSync('./a.png')  // 读取文件，

      conn.write('HTTP/1.1 200 OK\r\n')
      conn.write('Content-Type: image/png\r\n') // 类型
      conn.write('\r\n')

      conn.write(img)
      conn.end()
    }
  })
})

var port = 800
// 让服务器开始监听
server.listen(800, () => {
  // 监听成功后输出
  console.log('listening onport', port)
})

// %3F => ?

  // name=zhangsi&message=world%3F&age=28
  // {:'zhangsi', message:'world', age:'28'}
  // function parseQueryString(str) {
  //   var [name, message, age]= str.split('&')
  //   var obj = {}
  //   obj.name = name.split('=')
  //   obj.message = message.split('=')
  //   obj.age = age.split('=') }

var querystring = require('querystring')

function parseQueryString(str) { // 正确处理 + 
  return querystring.parse(str)
  // var pars = str.split('&')
  // var obj = {}
  // for( let par of pars ) {
  //   let [key, val] = par.split('=')
  //   // obj.key = decodeURIComponent(val)
  //   obj[key] = decodeURIComponent(val)
  // }
  // return obj
}

function escape(s) {
  // Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
  var ans = ""
  for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
          case "&":
              ans += "&amp;";
              break;
          case "<":
              ans += "&lt;";
              break;
          case ">":
              ans += "&gt;";
              break;
          case "\"":
              ans += "&quot;";
              break;
          case "\'":
              ans += "&apos;";
              break;
          default:
              ans += s[i];
      }
  }
  return ans
}

function escape(s) {
  // Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.
  var ans = ""
  for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
          case "&":
              ans += "&amp;";
              break;
          case "<":
              ans += "&lt;";
              break;
          case ">":
              ans += "&gt;";
              break;
          case "\"":
              ans += "&quot;";
              break;
          case "\'":
              ans += "&apos;";
              break;
          default:
              ans += s[i];
      }
  }
  return ans
}

// npm i -g nodemon
// nodemon asd.js  相对于 node asd.js  服务器每改动一次，就不需要重启
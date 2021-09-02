var net = require('net') // 获取tcp模块

var server = net.createServer() // 创建tcp服务器

// 当服务器接收到一个客户端连接时
server.on('connection', (conn) => {

  //连接上收到数据时
  conn.on('data', data => {
    console.log(data.toString())
    //格式
    conn.write('HTTP/1.1 200 OK\r\n')
    conn.write('Content-Type: text/html; charset=UTF-8\r\n')
    conn.write('\r\n')
    conn.write(`<meta charset="UTF-8">`)
    conn.write(`<h1>hellow world! i come in now!${new Date()}</h1>\r\n`)
    conn.end()
  })
})

var port = 800
// 让服务器开始监听
server.listen(800, () => {
  // 监听成功后输出
  console.log('listening onport', port)
})


// npm i -g nodemon
// nodemon asd.js  相对于 node asd.js  服务器没改动一次，就不需要重启
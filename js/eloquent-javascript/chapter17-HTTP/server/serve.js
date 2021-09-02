'use strict'
var net = require('net')
var server = net.createServer() // 创建服务端

server.on('connection', conn => {   // serve对象触发connection事件
  console.log(conn.remoteAddress, conn.remotePort, 'comes in') // 收到一个连接，打印该链接的远程地址

  conn.write('将会把传来的数据转换成大写') // 发送

  conn.on('data', dat => { // connection 事件触发data事件
    conn.write(conn.remoteAddress) // 连接上收到数据，将数据打印出来
    conn.write(dat.toString().toUpperCase()) // 连接上收到数据，将数据打印出来
  })
  conn.on('error', () => {})
}) // 监听事件 建立连接 当连接建立成功，触发函数  conn对象代表服务器与终端之间的连接

//  server.listen(40080, '0.0.0.0') // 监听电脑上所有IP地址的40080端口  在特定的IP地址上监听（非所有的IP地址， 用其他的IP地址连接到该服务器，无法监听） 
server.listen(40080, () => { // 开始监听
  console.log('监听成功')
}) 
// server.close() // 停止监听

// 以上是服务器

// 以下为终端
node// 打开node
conn = net.connect(40080, '127.0.0.1') // 建立连接

conn.on('data', data => { console.log( data.toString() )}) //接收数据
conn.read(5) // 主动读取收到的数据
conn.write('djalskdf', repeat(10))  // "DJALSKDF"  编码成json才能发送
// 按序送达
conn.end // 终止连接
conn.destroy() //

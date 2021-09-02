/*
WebSocket  应用层协议（wiki）  应用接口一般指定自己的默认端口号（好处是不用指定端口号） websocket没有
ftp 21端口  ftp://127.0.0.1:21/
http 80端口  http://www.baidu.com:80/
https 443端口
ssh  22端口
telnet 21端口
dns 53端口
DHCP 67端口
ntp 123端口

nc ip port (nc命令 创建一个端口号  bash    nc www.baidu.com 80 )
*/
var { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8088 });

wss.on('connection', function connection(ws) {
  console.log('some comes in')
  ws.on('message', function incoming(message) {
    console.log('received length:', message.length);
  });

  setInterval(() => {
    ws.send('something'.repeat(1000 * Math.random() | 0));
  }, 1000);
});

// npm i ws // 安装 ws module
// node ws-server.js


//ws = new WebSocket('ws://127.0.0.1:8088/')  
// ws.send('lfkasdj'.repeat(10000))
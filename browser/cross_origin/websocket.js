// 它实现了浏览器与服务器的全双工通信
// 原生的 WebSocket API 使用起来不太方便，一般用第三方库

const WebSocket = require('ws')

const ws = new WebSocket('ws://www.host.com/path')

ws.on('open', function open() {
  ws.send('something')
})

ws.on('message', function incoming(data) {
  console.log(data)
})

// Websocket 属于长连接，在一个页面建立多个 Websocket 连接可能会导致性能问题

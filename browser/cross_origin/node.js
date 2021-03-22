// 浏览器向代理服务器请求时仍然遵循同源策略，在 Node 层仍需要通过 CORS 做跨域处理

const https = require('https')

const sever = https.createServer((req, res) => {
  // ...
  const { method, headers } = req
  // 设置 CORS 允许跨域
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    // ...
  })
  // 请求服务器
  const proxy = https.request(
    { host: 'xxx', method, headers, ...rest },
    (response) => {
      let body = ''
      response.on('data', (chunk) => {
        body = body + chunk
      })
      response.on('end', () => {
        // 响应结果转发给客户端
        res.end(body)
      })
    }
  )
  // 结束请求
  proxy.end()
})

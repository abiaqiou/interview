const net = require('net')

const bindEvents = (server) => {
  server.on('connection', (socket) => {
    const { remoteAddress, remotePort, remoteFamily } = socket
    console.log('client', remoteAddress, remotePort, remoteFamily)

    socket.on('data', (data) => {
      // buffer to string
      const r = data.toString()
      console.log(`from client, server received:(${typeof r})(${r})`)

      const res = `HTTP/1.1 200 OK\r\n\r\nHello Socket!`
      socket.write(res)

      socket.destroy()
    })
  })

  server.on('error', (e) => {
    console.log('server error', e)
  })

  server.on('close', () => {
    console.log('server close')
  })
}

const runServer = (host, port) => {
  const server = new net.Server()
  server.listen(port, host, () => {
    console.log('server.listen', server.address())
  })

  bindEvents(server)
}

runServer('', 2000)

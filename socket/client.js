const net = require('net')

const httpRequest = (host, port = 80) => {
  const client = new net.Socket()
  client.connect(port, host, () => {
    console.log(`client connect to:(${host}:${port})`)

    const req = 'GET / HTTP/1.1\r\nHost: ${host}\r\n\r\n'
    client.write(req)
  })

  client.on('data', (data) => {
    // buffer to string
    const r = data.toString()
    console.log(`from server, client received:(${typeof r})(${r})`)

    client.destroy()
  })

  client.on('close', () => {
    console.log('client closed')
  })
}

httpRequest('localhost', 2000)

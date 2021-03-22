// JSON with Padding
// 原理：利用 <script> 标签的 src 属性没有跨域限制的漏洞

const formattedParams = (params) => {
  let s = []
  for (let k in params) {
    let v = params[k]
    let pair = `${k}=${v}`
    s.push(pair)
  }
  s = s.join('&')
  return s
}

const jsonp = ({ url, params, callback }) => {
  const p = new Promise((resolve, reject) => {
    let script = document.createElement('script')
    let fp = formattedParams({ ...params, callback })
    let src = `${url}?${fp}`
    script.setAttribute('src', src)
    document.body.appendChild(script)

    window[callback] = (data) => {
      resolve(data)
      document.body.remove(script)
    }
  })
  return p
}

// 优点：简单，兼容性好
// 缺点：需服务器支持，只支持 get 请求

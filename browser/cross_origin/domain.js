// 二级域名相同的情况下，设置 document.domain 就可以实现跨域

document.domain = 'test.com' // 设置 domain 相同

// 通过 iframe 嵌入跨域的页面
const iframe = document.createElement('iframe')
iframe.setAttribute('src', 'b.test.com/xxx.html')
iframe.onload = function () {
  // 拿到 iframe 实例后就可以直接访问 iframe 中的数据
  console.log(iframe.contentWindow.xxx)
}
document.appendChild(iframe)

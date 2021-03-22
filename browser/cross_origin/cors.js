// Cross-Origin Resource Sharing，跨域资源共享
// 原理：服务器返回的响应中使用额外的 HTTP 头 Access-Control-Allow-Origin

// 简单请求
// 请求方法：get 或 head 或 post，且 Content-Type 为 text/plain 或 multipart/form-data 或 application/x-www-form-urlencoded
// 会在请求头中增加一个 Origin 字段，表示这次请求是来自哪一个源

// 非简单请求
// 在正式通信前，会发送一个预检请求，目的是询问服务器
// 当前网页所在域名是否在服务器的许可名单中，以及可以使用哪些 http 动词和头信息字段
// 得到肯定答复后，浏览器才会发送正式的请求

// 优点，支持所有请求方法
// 缺点，与 jsonp 相比，兼容性较差

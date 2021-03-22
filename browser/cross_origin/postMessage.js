// 实现跨文档通信
// 类似设计模式中的发布-订阅模式
// 两个窗口之间没有直接通信，而是通过浏览器来通信

// window.postMessage(message, origin, [transfer])

// 推荐，兼容性更好
window.addEventListener('message', function receiveMessage(event) {}, false)

// 不推荐，这是一个实验性的功能，兼容性不如上面的方法
window.onmessage = function receiveMessage(event) {}

// 接收到消息后，消息对象 event 中包含了三个属性：
// source，origin，data，其中 data 就是我们发送的 message。

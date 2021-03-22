const func1 = async () => {
  console.log('func1 start')
  await func2()
  // await 后面的代码会放到微任务队列
  console.log('func1 end')
}

const func2 = async () => {
  console.log('func2 start')
  // setTimeout 会放到宏任务队列
  setTimeout(() => {
    console.log('func2 setTimeout')
  }, 0)
  console.log('func2 end')
}

func1()
console.log('log 01')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

new Promise((resolve, reject) => {
  console.log('resolve func start')
  resolve()
  setTimeout(() => {
    console.log('resolve setTimeout')
  }, 0)
  console.log('resolve func end')
}).then(() => {
  console.log('then start')
  setTimeout(() => {
    console.log('then setTimeout')
  }, 0)
  console.log('then end')
})

console.log('log 02')

const e = (selector) => document.querySelector(selector)
const outer = e('#outer')
const middle = e('#middle')
const inner = e('#inner')

// 事件传播有三个阶段，捕获 - 目标 - 冒泡
outer.addEventListener(
  'click',
  (event) => {
    console.log('outer 在捕获阶段设置的监听函数')
  },
  true
)
middle.addEventListener(
  'click',
  (event) => {
    console.log('middle 在捕获阶段设置的监听函数')
  },
  true
)
inner.addEventListener(
  'click',
  (event) => {
    console.log('inner 在捕获阶段设置的监听函数')
  },
  true
)

outer.addEventListener('click', (event) => {
  console.log('outer 在冒泡阶段设置的监听函数')
})
middle.addEventListener('click', (event) => {
  console.log('middle 在冒泡阶段设置的监听函数')
})
inner.addEventListener('click', (event) => {
  console.log('inner 在冒泡阶段设置的监听函数')
})

// 几乎所有事件都会冒泡，但也有一些例外，如 focus

// event.stopPropagation() 阻止事件继续传播

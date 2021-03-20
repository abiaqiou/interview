const e = (selector) => document.querySelector(selector)

// 防抖
const debounce = (func, ms) => {
  let timeout
  return (...arguments) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, arguments), ms)
  }
}

// 节流
const throttle = (func, ms) => {
  let isThrottled = false

  const wrapper = (...arguments) => {
    if (isThrottled) {
      return
    }
    func.apply(this, arguments)
    isThrottled = true
    setTimeout(() => {
      isThrottled = false
    }, ms)
  }

  return wrapper
}

const debouncedLog = debounce(
  (value) => console.log(`send request to server: ${value}`),
  2000
)
const throttledLog = throttle(
  (value) => console.log(`send request to server: ${value}`),
  2000
)

e('#normal').addEventListener('input', (event) => {
  let { value } = event.target
  console.log(`send request to server: ${value}`)
})
e('#debounce').addEventListener('input', (event) => {
  let { value } = event.target
  debouncedLog(value)
})
e('#throttle').addEventListener('input', (event) => {
  let { value } = event.target
  throttledLog(value)
})

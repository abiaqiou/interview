// not in strict
function func1() {
  console.log(this === global)
}
func1() // true

// in strict
function func2() {
  'use strict'
  console.log(this === undefined)
}
func2() // true

// arrow function
const outerThis = this
const func3 = () => {
  console.log(this === outerThis)
}
func3() // true

const counter1 = {
  count: 0,
  increment() {
    setInterval(function () {
      console.log(this)
      console.log(this.count++)
    }, 1000)
  },
}
counter1.increment()
// NaN
// NaN
// ...

const counter2 = {
  count: 0,
  increment() {
    setInterval(() => {
      console.log(this === counter2)
      console.log(this.count++)
    }, 1000)
  },
}
counter2.increment()
// true
// 0
// true
// 1
// ...

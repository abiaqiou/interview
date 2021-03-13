// 经典继承（借用构造函数）
function Parent(age) {
  this.name = ['abi', 'aqiou']
  this.age = age
}
Parent.prototype.logName = function () {
  console.log(this.name)
}

function Child(...arguments) {
  Parent.apply(this, arguments)
}

const c1 = new Child(18)
console.log(c1.name) // ['abi', 'aqiou']
console.log(c1.age) // 18

const c2 = new Child(28)
c1.name.push('wrong push')
console.log(c2.name) // ['abi', 'aqiou']
console.log(c2.age) // 28

// 缺点1，方法必须在构造函数中定义，且无法复用
// c2.logName() // TypeError: c2.logName is not a function
function Parent2(age) {
  this.name = ['abi', 'aqiou']
  this.age = age
  this.logName = function () {
    console.log(this.name)
  }
}
function Child(...arguments) {
  Parent2.apply(this, arguments)
}
const c3 = new Child(18)
const c4 = new Child(18)
console.log(c3.logName === c4.logName) // false

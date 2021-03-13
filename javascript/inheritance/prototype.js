// 原型链继承
function Parent(age) {
  this.name = ['abi', 'aqiou']
  this.age = age
}
Parent.prototype.logName = function () {
  console.log(this.name)
}

function Child() {}
Child.prototype = new Parent()

const c1 = new Child()
c1.logName() // ['abi', 'aqiou']

// 缺点 1，所有实例共享同一属性
c1.name.push('wrong push')
const c2 = new Child()
console.log(c2.name) // ['abi', 'aqiou', 'wrong push']

// 缺点 2，创建 Child 实例时传参无效
const c3 = new Child(18)
console.log(c3.age) // undefined

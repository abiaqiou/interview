// 组合继承（原型链继承 + 经典继承）
// 是 js 中最常用的继承模式
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

Child.prototype = new Parent()
Child.prototype.constructor = Child

const c1 = new Child(18)
c1.logName() // ['abi', 'aqiou']
console.log(c1.age) // 18

c1.name.push('wrong name')

const c2 = new Child(28)
c2.logName() // ['abi', 'aqiou']
console.log(c2.age) // 28

console.log(c1.logName === c2.logName) // true

// 缺点，会调用两次父构造函数
// 导致实例和实例原型对象两者属性重复

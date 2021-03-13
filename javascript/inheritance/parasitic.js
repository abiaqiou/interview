// 寄生式继承
function createObj(proto) {
  const instance = Object.create(proto)
  instance.logName = function () {
    console.log(this.name)
  }
  return instance
}

// 缺点 1，同经典继承一样，无法复用方法
// 缺点 2，同原型式继承一样，共享同一属性
const father = {
  name: ['abi', 'aqiou'],
  age: 18,
}
const c1 = createObj(father)
const c2 = createObj(father)

console.log(c1.name === c2.name) // true
console.log(c1.logName === c2.logName) // false

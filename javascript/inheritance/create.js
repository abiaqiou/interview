// 原型式继承
// Object.create() 的模拟实现
function createObj(proto) {
  function Func() {}
  Func.prototype = proto
  return new Func()
}

// 缺点，同原型链继承，所有实例共享同一属性
const father = {
  name: ['abi', 'aqiou'],
  age: 18,
}
const c1 = createObj(father)
const c2 = createObj(father)

console.log(c1.name) // ['abi', 'aqiou']
console.log(c2.name) // ['abi', 'aqiou']

c1.name.push('wrong push')
console.log(c2.name) // ['abi', 'aqiou', 'wrong push']

// 寄生组合式继承
// 只调用了一次 Parent 构造函数，原型链保持不变
// 避免在 Parent.prototype 上面创建不必要的、多余的属性
// 是引用类型最理想的继承范式。
function createObj(proto) {
  function Func() {}
  Func.prototype = proto
  return new Func()
}

function prototype_combination(child, parent) {
  const obj = createObj(parent.prototype)
  obj.constructor = child
  child.prototype = obj
}

function Parent(age) {
  this.name = ['abi', 'aqiou']
  this.age = age
}
function Child(...arguments) {
  Parent.apply(this, arguments)
}

prototype_combination(Child, Parent)

const c1 = new Child(18)
const c2 = new Child(28)

console.log(c1.name === c2.name) // false
console.log(c1.__proto__.name) // undefined
console.log(Object.getPrototypeOf(c2).name) // undefined

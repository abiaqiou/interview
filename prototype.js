// prototype
const Phone = function () {}
const p1 = new Phone()

console.log(p1.name) // undefined
Phone.prototype.name = 'my phone'
console.log(p1.name) // 'my phone'

// __proto__ is getter/setter, truth is getPrototypeOf
console.log(p1.__proto__ === Phone.prototype) // true
console.log(Object.getPrototypeOf(p1)) // Phone.prototype

console.log(p1.color) // undefined
p1.__proto__.color = 'black'
console.log(p1.color) // black

// constructor
console.log(p1.constructor === Phone) // true
console.log(p1.__proto__.constructor === Phone) // true

// prototype chain
console.log(p1.__proto__ === Phone.prototype) // true
console.log(Phone.prototype.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__ === null) // true

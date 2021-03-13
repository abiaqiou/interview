function Person1(firstName, lastName) {
  console.log(this)
  this.firstName = firstName
  console.log(this)
  this.lastName = lastName
  console.log(this)
}
const p1 = new Person1('f', 'l')
// Person1 {}
// Person1 { firstName: 'f' }
// Person1 { firstName: 'f', lastName: 'l' }

// return a different object
function Person2(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  return {
    a: 1,
    b: 2,
  }
}
const p2 = new Person2('f', 'l')
console.log(p2) // { a: 1, b: 2 }

// return value is not a object
function Person3(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  return null
  // return undefined
  // return 123
  // return 'abc'
}
const p3 = new Person3('f', 'l')
console.log(p3) // Person3 { firstName: 'f', lastName: 'l' }

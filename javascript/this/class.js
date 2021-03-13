class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  sayHi1() {
    console.log(`Hi, my name is ${this.firstName}!`)
  }

  sayHi2 = () => {
    console.log(`Hi, my name is ${this.firstName}!`)
  }
}

const p = new Person('f', 'l')
p.sayHi1()
// Hi, my name is f!

// methods in class are implicitly in strict mode
const greet1 = p.sayHi1
greet1() // TypeError: Cannot read property 'firstName' of undefined...

const greet2 = p.sayHi2
greet2() // Hi, my name is f!

const person = {
  firstName: 'f',
  sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`)
  },
}
person.sayHi() // Hi, my name is f!

const greet = person.sayHi
greet() // Hi, my name is undefined!

setTimeout(person.sayHi, 1000)
// Hi, my name is undefined!

setTimeout(() => {
  person.sayHi()
}, 1000)
// Hi, my name is f!

setTimeout(person.sayHi.bind(person), 1000)
// Hi, my name is f!

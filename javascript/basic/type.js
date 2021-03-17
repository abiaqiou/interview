// 原始类型 primitive type
// number bigint
// string boolean
// null undefined
// symbol

// 引用类型 reference type
// object

// typeof 所有值
console.log(typeof 0) // 'number'
console.log(typeof 10n) // 'bigint'
console.log(typeof 's') // 'string'
console.log(typeof true) // 'boolean'

// 官方承认的 typeof 的行为错误
console.log(typeof null) // 'object'

console.log(typeof undefined) // 'undefined'
console.log(typeof Symbol('id')) // 'symbol'

console.log(typeof { a: 1 }) // 'object'
console.log(typeof console.log) // 'function'

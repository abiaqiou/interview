// in browser, 'use strict' or not
console.log(this === window) // true

// in node REPL, 'use strict' or not
console.log(this === global) // true

// in node module, 'use strict' or not
console.log(this === module.exports) // true

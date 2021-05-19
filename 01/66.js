const a = 123
const b = 456

const a_ = (a+'').split('')
a_.pop()

const b_ = (b+'').split('')
b_.pop()

const c = a_.concat(b_).join('')

console.log(c)
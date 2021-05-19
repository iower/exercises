let a = 1234

const digits = (a + '').split('').map(_ => +_)

const min = Math.min(...digits)
const max = Math.max(...digits)

const minIndex = digits.indexOf(min)
const maxIndex = digits.indexOf(max)

digits[maxIndex] = min
digits[minIndex] = max

a = digits.join('')

console.log(a)
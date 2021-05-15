const a = Math.random() * 10
const b = Math.random() * 10
const c = Math.random() * 10

console.log(a, b, c)

console.log([a, b, c].filter(_ => _ < 5).length == 2 ? 'yes' : 'no')
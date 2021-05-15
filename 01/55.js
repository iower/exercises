const generateSign = () => Math.random() > 0.5 ? 1 : -1

const a = generateSign() * Math.random()
const b = generateSign() * Math.random()
const c = generateSign() * Math.random()

console.log(a, b, c)

console.log([a, b, c].filter(_ => _ > 0).length)
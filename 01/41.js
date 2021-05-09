const aSign = Math.random() < 0.5 ? -1 : 1
let a = aSign * Math.random() * 200

console.log(`a before = ${a}`)

if (a > 100 || a < -100) {
	a = 0
} else {
	a++
}

console.log(`a after = ${a}`)
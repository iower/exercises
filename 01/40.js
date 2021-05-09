const asign = Math.random() > 0.5 ? 1 : -1
let a = asign * Math.random() * 20

console.log(`a before = ${a}`)

if (-10 < a && a < 10) {
	a += 5
} else {
	a -= 10
}

console.log(`a after = ${a}`)
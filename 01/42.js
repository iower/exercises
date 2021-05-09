function f(a) {
	if (2 <= a && a <= 5) {
		a += 10
		return a
	}

	if (7 < a && a < 40) {
		a -= 100
		return a
	}

	if (a <= 0 || a > 3000) {
		a *= 3
		return a
	}

	a = 0
	return a
}

let a = 1

console.log(`a before = ${a}`)

a = f(a)

console.log(`a after = ${a}`)
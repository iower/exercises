const s1 = 10
const increment = 1.1

const sn = (n) => {
	return s1 * increment ** (n - 1)
}

const snSum = (n) => {
	let sum = 0
	for (let i = 1; i <= n; i++) {
		sum += sn(i)
	}
	return sum
}

// a

for (let i = 2; i <= 10; i++) {
	console.log(`S(${i}) = ${sn(i)}`)
}

// b

console.log(`snSum(7) = ${snSum(7)}`)

// c

const n = 3
console.log(`snSum(${n}) = ${snSum(n)}`)

// d

const snLimit = 80

for (let i = 1; ; i++) {
	if (sn(i + 1) > snLimit) {
		console.log(`Limit (${snLimit}) day = ${i}`)
		break
	}
}
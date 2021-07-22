const product = (a, n) => {
	let res = 1
	for (let i = 1; i <= n; i++) {
		res *= (a + i) ** 2
	}
	return res
}


const a = 1
const n = 3

console.log(product(a, n))
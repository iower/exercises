const sum = (x, n) => {
	let res = 0
	for (let i = 1; i <= n; i++) {
		res += 1 / Math.cos(x ** i)
	}
	return res
}

const x = 1
const n = 3

console.log(sum(x, n))
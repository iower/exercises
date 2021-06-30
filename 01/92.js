const from = 1
const to = 100

const sum1toN = (n) => {
	let res = 0
	for (let i = 1; i <= n; i++) {
		res += i
	}
	return res
}

for (let j = from; j <= to; j++) {
	console.log(sum1toN(j))
}
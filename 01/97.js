const productSum = (n) => {
	let sum = 0
	for (let i = 1; i <= n; i++) {
		let summand = 1
		for (let j = i; j <= 2 * i; j++) {
			summand *= j
		}
		sum += summand
	}
	return sum
}

console.log(productSum(4))
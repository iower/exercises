const sum = (n) => {
	let result = 0
	if (n < 1) {
		return result
	}
	for (let i = 1; i <= n; i++) {
		result += 1 / i
	}
	return result
}

console.log(sum(5))
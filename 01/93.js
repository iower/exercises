const sumOfSquares = (n) => {
	let sum = 0
	for (let i = 1; i <= n; i++) {
		sum += i ** 2
	}
	return sum
}

[1,2,3,4,5].forEach(_ => {
	console.log(sumOfSquares(_))
})
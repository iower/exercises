const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('a = ', a_ => {
	rl.question('b = ', b_ => {
		const a = +a_
		const b = +b_
		if (a !== 10 && b!== 10 && a % 2 == 0) {
			console.log(a + b)
		} else {
			console.log(a * b)
		}
	})
})
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('x = ', x => {
	rl.question('y = ', y => {
		if (x < 0 || y < 0) {
			console.log('No roots')
			return
		}
		const res = Math.sqrt(x - Math.sqrt(y))
		console.log(res)
	})
})
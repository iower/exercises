const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stout,
})

rl.question('a = ', a => {
	rl.question('b = ', b => {
		rl.question('c = ', c => {
			const res = a * 2 + (b - 3) + (c ** 2)
			console.log(`Result: ${res}`)
		})
	})
})
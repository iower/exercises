const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('a = ', aStr => {
	rl.question('b = ', bStr => {
		rl.question('c = ', cStr => {
			const [a, b, c] = [+aStr, +bStr, +cStr]
			const mean = (a+b+c)/3
			const res = (a+c)*2 - b*3
			console.log(`Mean: ${mean}`)
			console.log(`Result: ${res}`)
		})	
	})
})
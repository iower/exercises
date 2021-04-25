const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stout,
})

rl.question('', number => {
	console.log(number**2)
	console.log(number**3)
})
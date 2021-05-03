const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('a = ', a => {
	console.log(`P = ${a * 4}`)
	console.log(`S = ${a * a}`)
})
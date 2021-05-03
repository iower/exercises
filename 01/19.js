const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('P1 = ', p1Str => {
	rl.question('P2 = ', p2Str => {
		console.log(`S1 = ${0.3 * p1Str + 0.4 * p2Str}`)
		console.log(`S2 = ${3*(1.8 * p1Str + 2 * p2Str)}`)
	})
})
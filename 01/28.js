/*
sum0
r - rate
===
sum
*/

const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('sum0 = ', sum0 => {
	rl.question('rate = ', rate => {
		const n = 5
		console.log(`Result (simple interest) = ${+sum0 * (1 + rate/100*n)}`)
		console.log(`Result (compound interest) = ${+sum0 * (1 + rate/100)**n}`)
	})
})
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('t min = ', tmin => {
	rl.question('S km = ', skm => {
		const vms = (skm * 1000) / (tmin * 60)
		console.log(`V ms = ${vms}`)
	})
})
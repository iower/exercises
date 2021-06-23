const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('n = ', n => {
	for (let i = 1; i <= n; i++) {
		console.log('Silence is golden')
	}
})
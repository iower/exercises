const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

const cols = 5

rl.question('rows = ', rows => {
	for (let row = 1; row <= rows; row++) {
		console.log('0'.repeat(cols))
	}
})
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

const price = 20

rl.question('$ rate = ', rate => {
	for (let d = 1; d <= 100; d++) {
		const r = d * rate
		const kg = (r / price).toFixed(2)
		console.log(`${d}$ - ${r}₹ - ${kg} kg`)
	}
	
})
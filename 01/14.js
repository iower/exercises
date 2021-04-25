const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stout,
})

rl.question('Enter numbers:', (numbers) => {
	const [a, b] = numbers.split(' ').map(number => +number)
	console.log(`Sum: ${a + b}`)
	console.log(`Product: ${a * b}`)
})
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('a = ', a => {
	rl.question('b = ', b => {
		const S = (+a + +b)/2
		const c = Math.sqrt(a**2 + b**2)
		const P = +a + +b + +c
		console.log(`S = ${S}`)
		console.log(`P = ${P}`)
		console.log(`c = ${c}`)
	})
})
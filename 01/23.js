/*

| x (mass1) * price => a (cost1)
| y (mass2) * price => b`(cost2)
| z`(mass3) * price => k (cost3)
 
*/

const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('x = ', x => {
	rl.question('a = ', a => {
		rl.question('y = ', y => {
			rl.question('k = ', k => {
				const price = a / x
				const b = y * price
				const z = k / price
				console.log(`b = ${b}`)
				console.log(`z = ${z}`)
			})
		})
	})
})
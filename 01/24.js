/*

days
percent
sum
---
profit

=======

sum` = (sum + 3) * (1 + percent / 100)

*/

const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('days = ', days => {
	rl.question('percent = ', percent => {
		rl.question('sum = ', sum => {
			let result = +sum
			for (let d = 1; d <= days; d++) {
				result = (+result + 3) * (1 + +percent / 100)
			}
			console.log(`result = ${result}`)
		})
	})
})
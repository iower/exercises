const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('a = ', a_ => {
rl.question('b = ', b_ => {
rl.question('c = ', c_ => {
	const a = +a_
	const b = +b_
	const c = +c_
	if (a > 10 && b > 10 && c > 10 && a % 3 == 0 && b % 3 == 0) {
		console.log('yes')
	} else {
		console.log('no')
	}
})	
})	
})
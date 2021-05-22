const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('a = ', (a_) => {
rl.question('b = ', (b_) => {
rl.question('c = ', (c_) => {
	const a = +a_
	const b = +b_
	const c = +c_
	if (
		a + b <= c ||
		a + c <= b ||
		b + c <= a
	) {
		throw new Error('This triangle does not exist')
	}
	const p = (a + b + c) / 2
	const S = Math.sqrt(p * (p - a) * (p - b) * (p - c))
	console.log(`S = ${S}`)
})
})
})
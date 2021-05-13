const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('a = ', a => {
rl.question('b = ', b => {
rl.question('c = ', c => {
rl.question('d = ', d => {
	const even = [a, b, c, d].filter(_ => _ % 2 == 0)
	even.sort((_1, _2) => _1 < _2 ? 1 : -1)
	console.log(even)
	if (even.length) {
		console.log(even[0])
	} else {
		console.log('not found')
	}
})
})
})
})
const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('a = ', a_ => {
rl.question('b = ', b_ => {
rl.question('b = ', c_ => {
	const a = +a_;
	const b = +b_;
	const c = +c_;
	const toSum = [];
	[a, b, c].map(_ => {
		if (_ % 5 == 0) {
			toSum.push(_)
		}
	})
	if (toSum.length) {
		const sum = toSum.reduce((acc, _) => {
			return acc + _
		}, 0)
		console.log(sum)
	} else {
		console.error('error')
	}
})
})
})
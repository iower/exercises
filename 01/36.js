const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('number = ', n => {
	let mo
	switch (+n) {
		case 1: mo = 'Jan'; break
		case 2: mo = 'Feb'; break
		case 3: mo = 'Mar'; break
		case 4: mo = 'Apr'; break
		case 5: mo = 'May'; break
		case 6: mo = 'Jun'; break
		case 7: mo = 'Jul'; break
		case 8: mo = 'Aug'; break
		case 9: mo = 'Sep'; break
		case 10: mo = 'Oct'; break
		case 11: mo = 'Nov'; break
		case 12: mo = 'Dec'; break
		default: throw new Error('Unknown')
	}
	console.log(`Month = ${mo}`)
})
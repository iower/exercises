const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('n = ', (n) => {
	switch (true) {
		case [12, 1, 2].includes(+n): console.log('winter'); break;
		case [3, 4, 5].includes(+n): console.log('spring'); break;
		case [6, 7, 8].includes(+n): console.log('summer'); break;
		case [9, 10, 11].includes(+n): console.log('autumn'); break;
		default: throw new Error('Unknown');
	}
})
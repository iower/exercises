require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
}).question('tc = ', tc => {
	console.log(`tf = ${tc * 9/5 + 32}`)
})
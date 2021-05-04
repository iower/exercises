/*
w
m
y
===
d
*/

const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.question('w = ', w => {
rl.question('m = ', m => {
rl.question('y = ', y => {
	console.log(`dd = ${w*7 + m*30 + y*365}`) // not exactly :)
})
})
})
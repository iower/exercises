const from = 3
const to = 111
const step = 2

let sum = 0

for (let i = from; i <= to; i = i + step) {
	const addition = Math.cos(i / (i + 2))
	console.log(`${i}/${i + 2} = ${addition}`)
	sum += addition
}

console.log(sum)
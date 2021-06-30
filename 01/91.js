const from = 2
const to = 9

let sum = 0

for (let i = from; i <= to; i++) {
	const addition = i / (i + 1)
	sum += addition
	console.log(`${i}/${i + 1} = ${addition} | ${sum}`)
}

console.log(sum)
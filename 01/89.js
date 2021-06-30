const from = 1
const to = 112
const step = 3

let sum = 0

for (let i = from; i <= to; i = i + step) {
	sum += i
	console.log(`${i} ${sum}`)
}


console.log(sum)

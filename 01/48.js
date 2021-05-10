const a = Math.random()
const b = Math.random()
const c = Math.random()

const sums = [
	{ title: 'ab', sum: a + b },
	{ title: 'bc', sum: b + c },
	{ title: 'ac', sum: a + c },
]

sums.sort((item1, item2) => {
	return item1.sum > item2.sum ? 1 : -1
i })

console.log(a, b, c)
console.log(sums)

console.log(sums.pop().title, sums.pop().title)
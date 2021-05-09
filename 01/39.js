let a = 2
let b = 3

if (a > b) {
	console.log('yes')
} else {
	[a, b] = [b, a]
	console.log(`a = ${a}, b = ${b}`)
}
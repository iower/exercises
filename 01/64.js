const numbers = [
	1212,
	1111,
	1221,
	1222,
	1234,
]

console.log(numbers.map(_ => {
	const digits = (_ + '').split('')
	return digits[0] == digits[3] && digits[1] == digits[2]
}))
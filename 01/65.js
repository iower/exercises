const numbers = [
	1111,
	1112,
	1144,
	1165,
	5123,
	5612,
	5678,
]

console.log(numbers.map(number => {
	const digits = (number + '').split('')
	
	const less5 = []
	const more5 = []
	
	digits.forEach(digit => (digit < 5 ? less5 : more5).push(digit))
	
	return +(less5.concat(more5)).join('')
}))
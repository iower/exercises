function getKdigit(k) {
	if (k <= 1 || k >= 180) {
		console.log('err')
		throw new Error(`${k}: Out of range (1..180)`)
	}
	
	let sequence = ''
	
	for (let i = 10; i <= 99; i++) {
		sequence += i
	}
	return sequence[k-1]
}

console.log(getKdigit(2))
console.log(getKdigit(3))
console.log(getKdigit(4))
console.log(getKdigit(5))
console.log(getKdigit(6))


console.log(getKdigit(176))
console.log(getKdigit(177))
console.log(getKdigit(178))
console.log(getKdigit(179))
console.log(getKdigit(180))
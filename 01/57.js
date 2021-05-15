const a = 32
const b = 03
const c = 2001

const isExist = (a, b, c) => {
	if (c < 0) 
		return false
	if (b < 1 || b > 12)
		return false
	const daysInMonth = b == 2 ? 28 : (b % 2 == 0 ? 30 : 31)
	if (a < 1 || a > daysInMonth)
		return false
	return true
}

if (isExist(a, b, c)) {
	console.log('yes')
}
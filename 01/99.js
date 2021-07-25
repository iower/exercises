const isSameNumbers = (n) => {
	const nStr = '' + n
	const a = nStr[0]
	const b = nStr[1]
	const c = nStr[2]
	const d = nStr[3]
	return a == b || a == c || a == d || b == c || b == d || c == d
}

for (let i = 1000; i <= 9999; i++) {
	if (isSameNumbers(i)) {
		continue
	} else {
		console.log(i)
	}
}
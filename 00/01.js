// input AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// output A4B3C2XYZD4E3F3A6B28

function f(input) {
	
	const parts = input.split('')

	let out = ''

	let savedLetter = ''
	let counter = 0

	for (let i = 0; i < parts.length; i++) {
		const currentLetter = parts[i]
		
		if (i == 0) {
			savedLetter = currentLetter
		}

		if (currentLetter !== savedLetter || (i + 1 == parts.length && counter++)) {
			out += counter === 1 ? savedLetter : `${savedLetter}${counter}`
			counter = 0
		}
		
		counter++
		savedLetter = currentLetter
	}
	return out
}

console.log(f('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))
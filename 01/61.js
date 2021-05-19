const a = 1232

const numbers = (a + '').split('')

const uniqNumbers = []

numbers.forEach(_ => {
	if (!uniqNumbers.includes(_)) {
		uniqNumbers.push(_)
	}
})

const isRepeats = uniqNumbers.length < numbers.length

console.log(isRepeats)
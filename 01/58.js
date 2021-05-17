const date1 = '01.02.2021'
const date2 = '02.02.2021'

const [d1, m1, y1] = date1.split('.')
const [d2, m2, y2] = date2.split('.')

console.log(y1, y2, y1 < y2)

if (y1 < y2) {
	console.log('yes')
} else if (y1 > y2) {
	console.log('no')
} else {
	if (m1 < m2) {
		console.log('yes')
	} else if (m1 > m2) {
		console.log('no')
	} else {
		if (d1 < d2) {
			console.log('yes')
		} else {
			console.log('no')
		}
	}
}

/*
console.log(
	(y2 > y1
		? false
		: m2 > m1 
			? false
			: d1 < d2
				? true
				: false
	) ? 'yes' : 'no'
)
*/
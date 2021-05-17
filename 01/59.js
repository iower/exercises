console.log(
[
	1234,
	1111,
	1212,
	3145,
	6544,
	6543,
	5542,
	9871
].map(_ => {
	return (_ + '').split('').map((__, index, arr) => {
		if (index == 0) return true
		return __ < arr[index-1]
	}).every(___ => ___)
})
)
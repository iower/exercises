const a = -2
const b = 2
const c = 3

const D = b**2 - 4*a*c

const solutions = []

if (D == 0) {
	solutions.push(-b/(2*a))
}

if (D > 0) {
	solutions.push(
		(-b - Math.sqrt(D)) / (2*a),
		(-b + Math.sqrt(D)) / (2*a)
		
	)
}

console.log(solutions)

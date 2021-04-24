const a = 0.1, b = 0.2, x = 1

//  n __
//  \/x   = x ** (1/n)

const out = (x**2 + b) ** (1/5) - (b**2 * Math.sin(x+a)**3)/x
console.log(out)
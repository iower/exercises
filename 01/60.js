let a = 123

aNumbers = (a + '').split('')

a = +(`${aNumbers[2]}${aNumbers[1]}${aNumbers[0]}`)

console.log(a)
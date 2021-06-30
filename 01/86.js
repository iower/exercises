const sum1toN = (n) => [...Array(n+1).keys()].reduce((acc, _) => acc + _)


const n = 10
console.log(sum1toN(n))
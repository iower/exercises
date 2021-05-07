/*
2 ** 4 = 16
2 ** 6 = 64
2 ** 15 = 32768
*/


const a = 2


// only 2 multiplications = ^ 4 
const pow2 = a * a
const pow4 = pow2 * pow2
console.log(pow4)

// only 3 multiplications = ^ 6
const pow3 = a * a * a
const pow6 = pow3 * pow3
console.log(pow6)

// only 5 multiplications = ^ 15
const pow2_ = a * a
const pow4_ = pow2_ * pow2_
const pow5 = pow4_ * a
const pow15 = pow5 * pow5 * pow5
console.log(pow15)
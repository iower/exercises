/*
a, b, c
===
a2, b2, c2
*/


let a = 0, b = 2, c = 5

let a2 = a + b,
    b2 = c - a,
    c2 = a + b + c

a = a2
b = b2
c = c2

console.log(a, b, c)
/*
    |
    |               a2
 y2_|..#==========*----*
    |  # a1       |    |b2
 y1_|..*----*     |    |
    |  |    |b1   |    |
  y2|..|....|.....*----*
    |  |    |     .    #
  y1|..*----*==========#
    |  .    .     .    .
    |__.____._____.____._____
       x1   x1_   x2   x2_

*/

const x1 = 1
const y1 = 1
const a1 = 3
const b1 = 3

const x2 = 10
const y2 = 10
const a2 = 4
const b2 = 4


const x1_ = x1 + a1
const y1_ = y1 + b1

const x2_ = x2 + a2
const y2_ = y2 + b2


const x = Math.min(x1, x2)
const y = Math.min(y1, y2)

const x_ = Math.max(x1_, x2_)
const y_ = Math.max(y1_, y2_)


console.log([x, y], [x_, y_])


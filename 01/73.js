/*
     |
     |      a1
(y1_)|----######
     |    ###### b1
   y1|----######
     |    .    .
     |____.____.______
          x1   (x1_)

     |
     |      a2
(y2_)|----######
     |    ###### b2
   y2|----######
     |    .    .
     |____.____.______
          x2   (x2_)


intersection:

 (x2_, y2)          (x2, y2)
     o                 o
      \               /
       \             /
   y1_--(4)#######(1)
        #############
        #############
        #############
   y1---(3)#######(2)
       /.           .\
      / .           . \
     /  x1         x1_ \
    o                   o
(x2_, y2_)           (x2, y2_)

*/

const testCases = [
	{ // 1) no intersection, 1 ∉ 2, 2 ∉ 1
		x1: 1, y1: 1, a1: 1, b1: 1,
		x2: 3, y2: 3, a2: 1, b2: 1,
	},
	{ // 2) is intersection, 1 ∈ 2, 2 ∈ 1
		x1: 1, y1: 1, a1: 3, b1: 3,
		x2: 1, y2: 1, a2: 3, b2: 3,
	},
	{ // 2.2) is intersection, 1 ∉ 2, 2 ∉ 1
		x1: 1, y1: 1, a1: 1, b1: 1,
		x2: 2, y2: 2, a2: 1, b2: 1,
	},
	{ // 3) is intersection, 1 ∈ 2, 2 ∉ 1
		x1: 1, y1: 1, a1: 2, b1: 2,
		x2: 1, y2: 1, a2: 3, b2: 3,
	},
	{ // 4) is intersection, 1 ∉ 2, 2 ∈ 1
		x1: 1, y1: 1, a1: 3, b1: 3,
		x2: 1, y2: 1, a2: 2, b2: 2,
	},
	{ // 5) is intersection, 1 ∉ 2, 2 ∉ 1
		x1: 1, y1: 1, a1: 3, b1: 3,
		x2: 2, y2: 2, a2: 4, b2: 4,
	}
]

testCases.forEach(({x1, y1, a1, b1, x2, y2, a2, b2}) => {
	console.log(x1, y1, a1, b1, x2, y2, a2, b2)
	
	const x1_ = x1 + a1
	const y1_ = y1 + b1
	const x2_ = x2 + a2
	const y2_ = y2 + b2
	
	if (
		/* (1) */ x1 <= x2 && x2 <= x1_ && y1 <= y2 && y2 <= y1_ ||
		/* (2) */ x1 <= x2 && x2 <= x1_ && y1 <= y2_ && y2_ <= y1_ ||
		/* (3) */ x1 <= x2_ && x2_ <= x1_ && y1 <= y2_ && y2_ <= y1_ ||
		/* (4) */ x1 <= x2_ && x2_ <= x1_ && y1 <= y2 && y2 <= y1_
	) {
		console.log('is intersection')
	} else {
		console.log('no intersection')
	}
	
	if (x1 >= x2 && y1 >= y2 && x1_ <= x2_ && y1_ <= y2_) {
		console.log('1 ∈ 2')
	} else {
		console.log('1 ∉ 2')
	}
	
	if (x2 >= x1 && y2 >= y1 && x2_ <= x1_ && y2_ <= y1_) {
		console.log('2 ∈ 1')
	} else {
		console.log('2 ∉ 1')
	}
})
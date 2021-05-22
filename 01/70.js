const a = [1, 1]
const b = [1, 4]
const c = [4, 4]


const [ax, ay] = a,
      [bx, by] = b,
      [cx, cy] = c

/*

     |
     |
by cy|   .b       .c
     |
     |
ay dy|   .a       .d
     |____________________
         bx       cx
         ax       dx 

*/

if (
	(new Set([ax, bx, cx])).size !== 2 ||
	(new Set([ay, by, cy])).size !== 2
) {
	throw new Error('Wrong coordinates')
}

const leaveSingle = (nums) => {
	const set = new Set()
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]
		if (!set.has(num)) {
			set.add(num)
		} else {
			set.delete(num)
		}
	}
	return [...set][0]
}

const d = [
	leaveSingle([ax, bx, cx]),
	leaveSingle([ay, by, cy])
]

console.log(d)
const directions = {
	0: 'north',
	1: 'west',
	2: 'south',
	3: 'east'
}

const commands = {
	'-1': _ => --_,
	'0': _ => _,
	'1': _ => ++_,
}

const ring = _ => {
	let res = _
	if (_ == -1) res = 3
	if (_ == 4) res = 0
	return res
}


const input = {
	dirNumber: 14,
	moveNumber: -1,
}

const output = directions[ring(commands[input.moveNumber](input.dirNumber - 11))]

console.log(output)
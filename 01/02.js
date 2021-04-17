console.log([
	new Date().toLocaleTimeString('en-us', {weekday: 'long'}).split(' ')[0],
	new Date().toLocaleTimeString('en-us', {month: 'long'}).split(',')[0],
	'Myname'
].join('\n'))
const angleMax180 = (angles) => {
	angleMin = Math.min(...angles),
	angleMax = Math.max(...angles),
	angleDiff = angleMax - angleMin
	console.log('angles =', angles)
	console.log('angleMin =', angleMin)
	console.log('angleMax =', angleMax)
	console.log('angleDiff =', angleDiff)
	let res = angleDiff >= 360 ? angleDiff - 360 : angleDiff
	if (res > 180) {
		res -= 180
	}
	console.log('res =', res)
	return res
}

const angle = ([h, m]) => {
	/*
	60 [m] = 360 [*]
	m  [m] = angle [*]
	*/
	angleM_0 = 360 * m / 60
	
	/*
	24 [h] = 720 [*]
	h  [h] = angle [*]
	
	+
	
	60 [m] = 1h = 360/12 = 30 [*]
	m  [m] =               angle` [*]
	---
	angle` [*] = m / 2
	*/
	
	angleH_0 = 720 * h / 24 + m / 2
	if (angleH_0 > 360) {
		angleH_0 -= 360
	}
	
	return angleMax180([angleM_0, angleH_0])
}


[
	[0, 00], // =0*
	[12, 00], // =0*

	[6, 45], // ~= 60*
	[18, 45], // ~= 60*

	[0, 30], // ~= 180*
	[12, 30], // ~= 180*
	
	[9, 00], // = 90*
	[21, 00], // = 90*
	
	[9, 30], // ~= 90*
	[21, 30], // ~= 90*
	
	[11, 59], // ~= 0*
	[23, 59], // ~= 0*
].forEach(time => {
	console.log('time =', time)
	console.log(`${angle(time)}`)
})
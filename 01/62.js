let a = 12345

a = (a + '').split('').map(_ => _ % 2 == 0 ? 0 : _).join('')

console.log(a)
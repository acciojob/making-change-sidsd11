const makeChange = (c) => {
  // your name here
	let q = Math.floor(c / 25)
	let d = Math.floor((c - (q * 25)) / 10)
	let n = Math.floor((c - (q * 25) - (d * 10)) / 5)
	let p = c - (q * 25) - (d * 10) - (n * 5)
	return {'q': q, 'd': d, 'n': n, 'p': p}
};
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
function sum1(a, b) {
	return parseInt(a) + parseInt(b);
}

let ans1 = sum1('2', 3);
console.log(ans1);

function sum2(n) {
	let ans = 0;
	for (let i = 1; i <= parseInt(n); i++) {
		ans = ans + i
	}
	return ans;
}

const ans2 = sum2(100);
console.log(ans2);
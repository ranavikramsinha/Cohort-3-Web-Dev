//* Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.

function sum(n) {
	return (parseInt(n) * (parseInt(n) + 1))/2;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum('1000');
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);

const fs = require("fs");

fs.readFile("week-02/a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

function run() {
	console.log("I will run after 3s");
}

setTimeout(run, 3000);
console.log("I will run immedietely");

/**
I will run immedietely
Hi Rana!
I will run after 3s
*/

function timeout(){
  console.log('I will run after 5s');
}

console.log('Hi!');

setTimeout(timeout, 5000);

console.log('Welcome Here');

/**
I will run immedietely
Hi!
Welcome Here
Hi Rana!
I will run after 3s
I will run after 5s
*/

// let c = 0;

// for(let i = 0; i < 10000000000; i++){
//   c = c +1;
// }

// console.log('Expensive operation done');

/**
I will run immedietely
Hi!
Welcome Here
Expensive operation done
I will run after 3s
I will run after 5s
Hi Rana!
*/
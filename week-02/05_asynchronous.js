const fs = require("fs");

fs.readFile("week-02/a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

function run() {
	console.log("I will run after 3s");
}

setTimeout(run, 3000);
console.log("I will run immedietely");

/*
I will run immedietely
Hi Rana!
I will run after 3s
*/
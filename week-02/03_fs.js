// const fs = require("fs");

// const contents = fs.readFileSync("week-02/a.txt", "utf-8"); //* synchronous
// console.log(contents);

// const contents2 = fs.readFileSync("week-02/b.txt", "utf-8"); //* synchronous
// console.log(contents2);

// const constents3 = fs.readFileSync("week-02/b.txt", "utf-8"); //* synchronous
// console.log(constents3);



// const fs = require("fs");

// const contents = fs.readFile("week-02/a.txt", "utf-8"); //* asynchronous
// console.log(contents);

// const contents2 = fs.readFileSync("week-02/b.txt", "utf-8"); //* synchronous
// console.log(contents2);

// const constents3 = fs.readFileSync("week-02/b.txt", "utf-8"); //* synchronous
// console.log(constents3);



const fs = require("fs");

fs.readFile("week-02/a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("week-02/b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("week-02/a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

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


//* Asynchronous
const fs = require("fs");

function print(err, data){
  if(err){
    console.log('File not found');
  } else{
    console.log(data);
  }
}

fs.readFile("week-02/a.txt", "utf-8", print); //* passing the name(signature) of the function print

fs.readFile("week-02/b.txt", "utf-8", print);

fs.readFile("week-02/a.txt", "utf-8", print);

fs.readFile("week-02/ab.txt", "utf-8", print);

console.log('Done!');
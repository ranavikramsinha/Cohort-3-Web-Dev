// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

// function waitFor5S(reslove) {
//   // console.log(reslove);
//   setTimeout(reslove, 5000);
// }

// function main() {
//   console.log('waitFor5s');
//   console.log("main is called");
// }

// waitFor5S(main);

// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function setTimeoutPromisified2() {
//   return new Promise(waitFor7S);
// }

// function waitFor7S(reslove) {
//   // console.log(reslove);
//   setTimeout(reslove, 7000);
// }

// function main2() {
//     console.log('waitFor7s');
//     console.log("main2 is called");
//   }

// setTimeoutPromisified2().then(main2);

//* callback hell
// setTimeoutPromisified(6000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(8000).then(function () {
//     console.log("hello");
//     setTimeoutPromisified(10000).then(function () {
//       console.log("hello there");
//     });
//   });
// });

//* Alternative way by using then, catch & finally
// setTimeoutPromisified(6000);
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(8000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(10000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });

// function random(resolve){
//     setTimeout(resolve, 3000);
// }

// let p = new Promise(random);

// function callback(){
//     console.log('Promise succeeded');
// }

// p.then(callback);

// const fs = require("fs");

// function readTheFile(sendTheFileValueHere){
//     fs.readFile("week-02/a.txt", "utf-8", function(err, data){
//         sendTheFileValueHere(data);
//     })
// }

// function readFile(fileName){
//     return new Promise(readTheFile);
// }

// const p2 = readFile();

// function callback2(contents){
//     console.log(contents);
// }

// p2.then(callback2);


//* the real operation that we want to promisfy
function doAsyncOp(resolve){
    setTimeout(resolve, 3000);
}

function setTimeoutPromisified3(){
    return new Promise(doAsyncOp);
}

// const p3 = setTimeoutPromisified3();
const p3 = new Promise(doAsyncOp);


function callback3(){
    console.log('3 seconds have passed');
    
    console.log(p3);
}

p3.then(callback3);
console.log(p3);
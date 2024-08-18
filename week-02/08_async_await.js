function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function solve1() {
  await setTimeoutPromisified(1000);
  console.log("hi solve1");
  await setTimeoutPromisified(3000);
  console.log("hello solve1");
  await setTimeoutPromisified(5000);
  console.log("hi there solve1");
}

async function solve2() {
  await setTimeoutPromisified(5000);
  console.log("hi solve2");
  await setTimeoutPromisified(3000);
  console.log("hello solve2");
  await setTimeoutPromisified(1000);
  console.log("hi there solve2");
}

// solve1();
// solve2();

// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   fs.readFile(filePath, "utf-8", function (err, data) {
//     data = data.trim();
//     fs.writeFile(filePath, data, function () {
//       cb();
//     });
//   });
// }

// function onDone() {
//   console.log("file has been cleaned");
// }
// cleanFile("week-02/c.txt", onDone);

// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   return new Promise(function (resolve) {
//     fs.readFile(filePath, "utf-8", function (err, data) {
//       data = data.trim();
//       fs.writeFile(filePath, data, function () {
//         resolve();
//       });
//     });
//   });
// }

// async function main() {
//   await cleanFile("week-02/c.txt");
//   console.log("Done cleaning file");
// }

// main();

const fs = require("fs");

function print(err, data){
    if(err){
      console.log('File not found');
    } else{
      console.log(data);
    }
  }
fs.readFile("week-02/c.txt", 'utf-8', print);

function cleanFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }
      
      data = data.trim();
      
      fs.writeFile(filePath, data, (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

async function main() {
  try {
    await cleanFile("week-02/c.txt");
    console.log("Done cleaning file");
    fs.readFile("week-02/c.txt", 'utf-8', print);
  } catch (error) {
    console.error("Error cleaning file:", error);
  }
}

main();

// function afterDone(err, data) {
//   if (err) {
//     console.log("Error while reading file");
//   } else {
//     console.log(data);
//   }
// }

// fs.readFile("a.txt", "utf-8", afterDone);

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onDone).catch(onError);

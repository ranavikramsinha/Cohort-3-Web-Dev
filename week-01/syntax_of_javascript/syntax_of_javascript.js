//* Variables
let username = "John";     //* Variable that can be reassigned
const age = 30;        //* Constant variable that cannot be reassigned
var isStudent = true;  //* Older way to declare variables, function-scoped
console.log(username);
console.log(age);
console.log(isStudent);

//* Data Types
let number = 42;             //* Number
let string = "Hello World";  //* String
let isActive = false;        //* Boolean
let numbers = [1, 2, 3];     //* Array
console.log(number);
console.log(string);
console.log(isActive);
console.log(numbers);

//* Operators
let sum = 10 + 5;          //* Arithmetic operator
let isEqual = (10 === 10); //* Comparison operator
let isTrue = (true && false); //* Logical operator
console.log(sum);
console.log(isEqual);
console.log(isTrue);

//* Function declaration
function greet(name) {
    return "Hello, " + name;
}

//* Function call
let message = greet("Aryan");
console.log(message);

function add(a, b){
    return a + b;
}

let addition = add(5, 2);
console.log(addition); //* 7

function vote(age){
    if(age > 17){
        console.log("You can vote.");
    }
    else{
        console.log("You are minor that's why you can't vote.");
    }
}

let voter1 = vote(15);
let voter2 = vote(18);

//* Loops
let users1 = ['Raja', 'Rana', 'Aryan'];

for(let i = 0; i < users1.length; i++){
    console.log(users1[i]);
}

//* For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//* While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//* Do while loop
let k = 0;
do{
    console.log(k);
    k++;
}while(k < 6) //* Outputs 0 to 5 (Note:- do while loop runs one time even the condition for loop is false.)

let sumOfNumbers = 0;
for(let i = 0; i <= 5; i++){
    sumOfNumbers += i;
}
console.log(sumOfNumbers)

//* Objects
let userAryan = {
	name: "Aryan",
	age: 23,
    gender: "Male",
    findGender: function(){
        if(this.gender === 'Male'){
            return 'Mr';
        }
        else if(this.gender === 'Female'){
            return 'Mrs';
        }
        else{
            return 'Others';
        }
    },
    canVote: function(){
        if(this.age > 17){
            return 'eligible';
        }
        else{
            return 'not eligible';
        }
    }
}

console.log( userAryan.name + " age is " + userAryan.age + '.');
console.log('Hi ' + userAryan.findGender() + ' ' + userAryan.name + " age is " + userAryan.age + '.');
console.log('Hi ' + userAryan.findGender() + ' ' + userAryan.name + " age is " + userAryan.age + " and he is " + userAryan.canVote() + ' to vote.');

//* Array
const users2 = ['Raja', 'Rana', 'Aryan'];
const totalUsers = users2.length;
const firstUser = users2[0];
console.log(totalUsers);
console.log(firstUser);

function filterEvenNumber(arr){
    return arr.filter(num => num % 2 === 0 && num > 0);
}

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(filterEvenNumber(arr1));

//* Array of Objects
const users3 = [{
    name: "Raja",
    age: 22,
}, {
    name: "Rana",
    age: 19,
},
]

const user1 = users3[0] 
const user1Age = users3[0].age
console.log(user1);
console.log(user1Age);

function filterAdultUsers(peoples){
    return peoples.filter(people => people.age > 17);
}

let peoples1 = [
    { name: "Alice", age: 25, },
    { name: "Bob", age: 17, },
    { name: "Charlie", age: 19, },
    { name: "David", age: 16,},
    { name: "Eve", age: 22, },

]

console.log(filterAdultUsers(peoples1));

//* Object of Objects
const user4 = {
	name: "Raja",
	age: 22,
	address: {
		city: "Bangaluru",
		country: "India",
		address: "xyz",
	}
}

const city = user4.address.city;
console.log(city);

function filterAdultMale(malePeoples){
    return malePeoples.filter(malePeople => malePeople.age > 17 && malePeople.gender === 'Male');
}

let peoples2 = [
        { name: "Alice", age: 25, gender: 'Female' },
        { name: "Bob", age: 17, gender: 'Male' },
        { name: "Charlie", age: 19, gender: 'Male' },
        { name: "David", age: 26, gender: 'Male' },
        { name: "Eve", age: 22, gender: 'Female' },
]

console.log(filterAdultMale(peoples2));
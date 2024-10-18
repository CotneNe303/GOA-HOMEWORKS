// const lastname = "Nebieridze";


// const me = {
//     firstname: "cotne",
//     // lastname: lastname
//     lastname,
// };

// console.log(me)



// // const firstname = me.firstname;
// // const lastname = me.lastname;

// // console.log(firstname, lastname)




// const me = {
//     firstname: "cotne",
//     lastname: "nebieridze"

// };

// const {lastname, firstname: Name} = me;
// console.log(Name, lastname) 


// const me = ["cotne", "nebieridze", 23];

// const [firstname, lastname, age = 16] = me;
// console.log(firstname, lastname)



// #1  
// const me =["cotne", "nebieridze"];
// [me[0], me[1]] = [me[1], me[0]]

// #2

// const person = { Name: 'Alice', age: 25, city: 'New York' };
// const {Name, age} = person;
// console.log(Name);
// console.log(age);


// // #3
// const nestedArray = [1, [2, 3, [4, 5]]];
// const [num, [num1, num2, [num3]]] = nestedArray

// console.log(num3)


// // #4
// const fruits = ['apple'];
// const [first, second ="banana"] = fruits
// console.log(first); 
// console.log(second);


// // #5
// const user = { id: 101, username: 'john_doe' };
// const{ id: user1, username: userName} = user;
// console.log(user1); 
// console.log(userName)

// function myFunc(num1, ...arr){
//     console.log(num1, arr)
// }

// myFunc(1,2,3,'fwihfkw', true)

// const numbers = [1,2,3,4,5]
// console.log(...numbers)



// #1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const cArr = [...array1, ...array2];

console.log(cArr);

//#2
const colors = ['red', 'green', 'blue'];
const cCopy = [...colors];

console.log(cCopy)

//#3
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mObj = { ...obj1, ...obj2 };

console.log(mObj);

//#4
const numbers = [10, 20, 30, 40, 50];
const [first, ...rest] = numbers;

console.log(first);
console.log(rest); 

//#5
function lArguments(...args) {
    console.log(args);
} 
lArguments(1, 2, 3, 4, 5);
lArguments('apple', 'banana', 'cherry');  
lArguments();  

//#6
const nums = [1, 2, 3];
function add(a, b, c) {
  return a + b + c;
}
const result = add(...nums);
console.log(result);

// #7
const user = { name: 'John', age: 30 };
const userClone = { ...user };

console.log(userClone);


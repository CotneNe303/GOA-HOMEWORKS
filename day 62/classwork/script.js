
// const secondArr = new Array ();
// secondArr[0] = "nika"
// secondArr[0] = "giorgi"


// secondArr.push("cotne");


// const person = {
//     1: "cotne",
//     2: "gio",
//     3: "nika",
//     length: 3
// }

// const myArr = ["cotne", "gio", "nika"];

// #1

// let arr = [];
// for(let i = 0; i < 100; i++){
//     arr.push(i)
// }

// let evenSum = 0;
// for(let i = 0; i < evenSum.lenght; i++){
//     if(i % 2 === 0){
//         evenSum += i;
//   }
// }
// console.log(evenSum)




// // #2
// const Arr = ["cotne", "luka", "gio"]
// console.log(Arr[5])


// myArr = ["HTML", "CSS", "JS"];
// myArr.splice(1,0,10);
// let newArr = myArr.slice(1,3);
// myArr.ushift(2);
// myArr.pop();

// console.log(myArr)
// console.log(newArr)

// shift - შლის პირველ ელემნტს მასივიდან
// unshift - ამატებს ელემნტს მასივის დასაწყისში
// splice - 
// slice -
// pop

// #3

// NewArr = [1,2,3,4,5]
// NewArr.shift()

// NewArr = ["HTML", "CSS", "JS"]
// NewArr.shift()

// // shift - შლის პირველ ელემნტს მასივიდან


// NewArr = [1,2,3,4,5]
// NewArr.unshift(3)


// NewArr = ["HTML", "CSS", "JS"]
// NewArr.shift(2)

// // unshift - ამატებს ელემნტს მასივის დასაწყისში



// NewArr = [1,2,3,4,5]
// NewArr.splice(1,0,8)

// NewArr = ["HTML", "CSS", "JS"]
// NewArr.splice(2,1,"c++")

// // splice - ამატებს ცვლის ან აშორებს ელემენტს სიიდან დამწყები ინდექსიდან



// NewArr = [1,2,3,4,5]
// const Arrrnew =NewArr.slice(1,3)

// NewArr = ["HTML", "CSS", "JS"]
// const Arrnew =NewArr.slice(2,1)

// // slice - ამატებს სიის მხლოდ იმ ნაწილს რომელიც არის მითითებული მეთოდში


// NewArr = [1,2,3,4,5]
// NewArr.push(8)

// NewArr = ["HTML", "CSS", "JS"]
// NewArr.push("C++")

// //push - ამატებს ერთს ან მეტ ელემენტს სიის ბოლოში


// NewArr = [1,2,3,4,5]
// NewArr.pop()

// NewArr = ["HTML", "CSS", "JS"]
// NewArr.pop()

// // pop -შლის ბოლო ელემენტს სიიდან


// #4

// function manualSlice(arr, start,end){
//     let slicedArr = new Array();
//     for( let i = start; i < end; i++){
//         slicedArr.push(arr[i])
//     }
// }

// console.log(slicedArr)


// const myArr = ["HTMl", "CSS", "JS", "JS", "C++", "PYTHON", "C#"];
// console.log(myArr.lastIndexOfindexOf("PYTHON"))
// // indexoff- აბრუნებს გააცემული არგუმენტის პირველ პოზიციას სიიდან
// const myArr = ["HTMl", "CSS", "JS", "JS", "C++", "PYTHON", "C#"];
// console.log(myArr.IndexOfindexOf("PYTHON"))
// // lastindexoff - აბრუნებს გააცემული არგუმენტის უკანასკნენლ პოზიციას სიიდან

// const secondArr =[23,235,252,34,56,78,17,43,88]
// secondArr.sort()
// console.log(secondArr)
// // sort - ალაგებს სიას ზრდის მიხედვით


// const thirdArr =[23,235,252,34,56,78,17,43,88]
// secondArr.reverse()
// console.log(secondArr)
// // reverse - სიას აბრუნებს შემობრუნებულად


// // #5

// function manualreverse(arr){
//     const reverseArrr = [];

//     for (let i = arr.lenght - 1; i >= 0; i--){
//         reverseArrr.push(arr[i]);
//     }

//     return reverseArrr
 
// }

// #6

// function manualindexOf(arr,value){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == value){
//             return i;
//         }
//     }
//     return -1
// }

// #7

// const myArr = ["HTMl", "CSS", "JS", "JS", "C++", "PYTHON", "C#"];
// console.log(myArr.IndexOfindexOf("JS"))
// console.log(myArr.IndexOfindexOf("JS"))
// console.log(myArr.IndexOfindexOf("JS"))
// console.log(myArr.lastIndexOfindexOf("PYTHON"))
// console.log(myArr.lastIndexOfindexOf("PYTHON"))
// console.log(myArr.lastIndexOfindexOf("PYTHON"))
// myArr.sort()
// myArr.sort()
// myArr.sort()
// myArr.reverse()
// myArr.reverse()
// myArr.reverse()


























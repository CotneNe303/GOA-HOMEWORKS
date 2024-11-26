// let arr =[10,20,30,40,50]
// let obj ={
//     name: "davit",
//     age: 14
// }

// for(let str in obj){
//     console.log(str)
// }

// for(let str in obj){
//     console.log(obj.tr)
// }

//sowriaa es
// for(let str in obj){
//     console.log(obj[str])
// }

// for(let i =0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for(num of arr){
//     console.log(num)
// }

// let arr =[
//     let obj={
//     name: "cotne",
//     age: 16
// }]


let obj= [
    { name: '', age: 0 },
    { name: '', age: 0 },
    { name: '', age: 0 }
];


const names = ['cotne', 'gurami', 'irodi'];
const ages = [16, 36, 18];


for (let i in obj) {
    obj[i].name = names[i];
    obj[i].age = ages[i];
}

console.log(obj); 


obj = [
    { name: '', age: 0 },
    { name: '', age: 0 },
    { name: '', age: 0 }
];


let index = 0;
for (let oBj of obj) {
    oBj.name = names[index];
    oBj.age = ages[index];
    index++;
}

console.log(obj); 

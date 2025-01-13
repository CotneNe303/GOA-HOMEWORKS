// new Promise(function(resolve, reject) {
//     if (success)
//         resolve(result);
//     else
//         reject(Error("failure"));
// })



setTimeout(()=>console.log("walking the dog!"), 2000);
setTimeout(()=>console.log("take out the trash!"), 1000);
setTimeout(()=>console.log("clean the room!"), 3000);

// function task1(callback){
//     console.log("starting task 1")
//     setTimeout(() => {console.log("take out the trash!"), callback()}, 1000);
// }
// function task2(callback){
//     console.log("starting task 1")
//     setTimeout(() => {console.log("walking the dog!");  callback()}, 2000);
// }
// function task3(){
//     console.log("starting task 1")
//     setTimeout(() => console.log("clean the room!"), 3000);
// }

// task1(()=>task2(()=>task3()));



function task1(){ return new Promise(resolve => setTimeout(() => resolve("take out the trash"),1000))};
function task2(){ return new Promise(resolve => setTimeout(() => resolve("walking the dog"),2000))};
function task3(){ return new Promise(resolve => setTimeout(() => resolve("clean the room"),3000))};

task1().
then(result =>{console.log(result); 
return task2()}).
then(result=>{console.log(result); 
task3()});
then(result =>{console.log(result)});
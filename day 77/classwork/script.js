
// // let arr = [1,2,3,4,5]

// // for(let i = 0;  i<arr.length; i++ ){
// //     console.log(arr[i])
// // }


// let arr = [[1,2,3], [1,2,3], [1,2,3]]

// console.log(arr[0][2])

// for(let i= 0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         console.log(arr)
//     }
// }

// morning - 20
// afternoon - 22
// noon - 23
// night - 21


let temp = [[20,22,23,21],[15,16,12,10]]
let days = ['mornig', 'afternoon', 'noon', 'evening']

for(let i=0; i<temp.length; i++){
   
    for(let j=0; j<temp[i].length; j++){
        console.log(days[j] + ':' + ' ' + temp[i][j])
    }
}
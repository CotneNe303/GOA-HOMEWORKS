// 1) (set) ნაკრებების გაერთიანება
// დაწერე ფუნქცია, რომელიც მიიღებს ნაკრებების მასივს და დააბრუნებს მათ გაერთიანებას.
// მაგალითი:
// ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]); 
// // შედეგი: Set {1, 2, 3, 4}

// function combSets(sets) {
//     const gaertianeba = new Set();
//     for (const set of sets) {
//         for (const item of set) {
//             union.add(item);
//         }
//     }
//     return gaertianeba;
// }
// const result = combSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]);
// console.log(result);






// 2) (map) სიმბოლოების სიხშირე
// დაწერე ფუნქცია, რომელიც მიიღებს სტრინგს და დააბრუნებს რუკას, სადაც გასაღებები სიმბოლოებია, ხოლო მნიშვნელობები – მათი სიხშირეები.
// მაგალითი:
// სიმბოლოსიხშირე("hello"); 
// // შედეგი: Map {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}

//










// 3) (map) რუკის ინვერტირება
// დაწერე ფუნქცია, რომელიც გასაღებებს და მნიშვნელობებს შეცვლის ადგილმონაცვლეობით რუკაში. თუ მნიშვნელობები მეორდება, დაიტოვე ბოლო გასაღები.
// მაგალითი:
// ინვერტირებულრუკა(new Map([['a', 1], ['b', 2], ['c', 1]])); 
// // შედეგი: Map {1 => 'c', 2 => 'b'}


// function reverseMap(realMap) {
//     const reverse = new Map();

//     for (const [key, value] of realMap) {
//         reverse.set(value, key);
//     }

//     return reverse; 
// }

// const real = new Map([['a', 1], ['b', 2], ['c', 1]]);
// const result = reverseMap(real);
// console.log(result); 














// 4) (set) სიმეტრიული სხვაობა
// შექმენი ფუნქცია, რომელიც იპოვის ორ ნაკრებებს შორის სიმეტრიულ სხვაობას (ელემენტები, რომლებიც ერთ-ერთშია, მაგრამ არა ორივეში).
// მაგალითი:
// სიმეტრიულისხვაობა(new Set([1, 2, 3]), new Set([3, 4, 5]));
// // შედეგი: Set {1, 2, 4, 5}



function symmetricDifference(set1, set2) {
    const result = new Set(); 
    for (const item of set1) {
        if (set2.has(item) === false) { 
            result.add(item);
        }
    }
  
    for (const item of set2) {
        if (set1.has(item) === false) { 
            result.add(item);
        }
    }

    return result; 
}


const result = symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5]));
console.log(result); 


function shuffleArray(arr) {
    
    for (let i = arr.length - 1; i > 0; i--) {
      
      const randomIndex = Math.floor(Math.random() * (i + 1));
      
      
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
  }

const myArray = [1, 2, 3, 4, 5];
console.log('Before shuffle:', myArray);
  
shuffleArray(myArray);
console.log( myArray);
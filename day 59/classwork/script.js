// for loop

// for(let i = 20; i < 50; i++){
//     console.log(i)
// }



//while loop

// let i = 30;
// while(i <61){
//     console.log(i)
//     i++
// }





// let block = document.getElementById("colorfull")

// function changeColor(color){
//     block.style.backgroundColor = color
// }

// let block = document.getElementById("colorfull")

// block.addEventListener("click", changeColor())

// function changeColor(){
//     block.style.backgroundColor = "red"
// }




// const messageBox = document.getElementById("message")
// const countBox = document.getElementById("count")

// messageBox.addEventListener("input", counter)

// function counter(){
//     const limit = 200;
//     let current_count = messageBox.value.length

//     if(current_count > limit){
//         countBox.style.color = "red"
//         countBox.textContent = "Character limit exceeded"
//     }
//     else{
//         countBox.style.color = "green"
//         countBox.textContent = current_count + "/" + limit;
//     }

// }


// const p = document.getElementById("p")
// const btn = document.getElementById("counter")

// let number = 0



// btn.addEventListener("click",function(){
//     number += 1
//     p.textContent = number
// })

const password = "luka1234";
let pass;
let attempts = 3;


while(attempts > 0){
    let pass = prompt("Enter your password");
    if(pass !== password){
        attempts --
        alert("You have attempts " + attempts + "left")
    }
    else {
        alert("Access granted")
        break;
    }
    if(attempts === 0){
        alert("System blocked, you have run out tries")
    }
}




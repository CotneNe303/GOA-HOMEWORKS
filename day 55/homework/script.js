const p = document.getElementById("paragraph")
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")

let number = 0


btn.addEventListener("click", function(){
    number += 1
    p.textContent = number

})

btn2.addEventListener("click", function(){
    number -= 1
    p.textContent = number
})
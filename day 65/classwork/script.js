// document.body.children[0].textContent = "Goa is BEST";
// document.body.children[0].style.color = "red";

// console.dir(document)

// console.log(document.getElementById("me"))



// function manualGetElementById(id){
//     const elements = document.body.all;

    for(let i = id; i < elements.length ; i++ ){
        if(elements[i].id === id){
            return elements[i]
        }
    }

// }

// console.log(manualGetElementById("me"));

// const Parr = document.getElementsByClassName("family");
// console.log(pArr)

function manualgetElementsByClassName(className){
    const elements = document.all;
    const result = []

    for(let i = 0; i < elements.length; i++){
        if(elements[i].classList.contains(className)) {
            result.push(elements[i])
        }
    }

    return result;
}

console.log(manualgetElementsByClassName('family'))


const pArr = document.getElementsByTagName('p');



function manualGetElementsByTagName(tagName) {
    const elements = document.all;
    const result = [];

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].tagName === tagName.toUpperCase()) {
            result.push(elements[i]);
        }
    }

    return result;
}
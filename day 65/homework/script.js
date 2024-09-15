//#1 changing text of an elment
document.getElementById("myParagraph").textContent = "paragraph"

//#2 changing the backgorund color of multiple elements

let list = document.getElementsByClassName("colorDiv")
for(i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = "red"
}

// #3 count the number of tags

let count = document.getElementsByTagName("li").length

console.log(count)

// #4 change the style of an elemnet by ID

document.getElementById("mainHeading").style.color = "green"
document.getElementById("mainHeading").style.fontFamily = "Arial"
document.getElementById("mainHeading").style.fontSize = "64px"

// #5 create clone of getelementbyID
function manualGetElementById(id){
    const elements = document.documentElement; // getting rootElem

    function goingThrough(element) {
        if(element.id === id){ 
            return element //if elem.id == param -> return to previous
        }

        for(let i = 0; i < element.children.length; i++){ // going through elem's children
            let found = goingThrough(element.children[i]) // calling recursively and getting result to previous level
            if (found) {
                return found
            }
        }
        return;
    }
    

    return goingThrough(elements) // calling goingThrough with initial element
}

console.log(manualGetElementById("mainHeading"))

// #6 create clone of getelementbyclassname
function manualgetElementsByClassName(classi) {
    const elements = document.documentElement;

    function goingThrough(element){
        if(element.classi === classi){
            return element
        }

        for(let i =0; i < element.children.lenght; i++){
            let found = goingThrough(element.children[i])
            if (found) {
                return found
           }
        }
        return;
    }

    return goingThrough(elements)



}

console.log(manualgetElementsByClassName("colorDIv"))
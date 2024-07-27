function ColorChange() {
    console.log("clicked")
    let headerDiv = document.getElementById("header")
    headerDiv.style.backgroundColor = 'blue'
    let nameField = document.getElementById("nameField")
    console.log(nameField.value);

    console.log(headerDiv);   
}


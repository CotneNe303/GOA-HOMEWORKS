let ch = prompt("Enter a character: ").toLowerCase(); 
let xmovani = "aeiou";

if (xmovani.includes(ch)) {
    console.log("xmovani");
} else {
    console.log("dausrulebeli");
}


let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));
let num4 = parseInt(prompt("Enter the fourth number:"));

let gamotvla = num1 * num2;
let gamotvla2 = num1 * num3;
let gamotvla3 = num1 * num4;
let gamotvla4 = num2 * num3;
let gamotvla5 = num2 * num4;
let gamotvla6 = num3 * num4;

let maxGamotvla = Math.max(product1, product2, product3, product4, product5, product6);

console.log("The maximum gamotvla is:", maxGamotvla);

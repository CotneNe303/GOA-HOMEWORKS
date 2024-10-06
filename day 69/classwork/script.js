// 5
// var გამოყენება ცუდია იმიტომ რომ,
// თუ კი ცვლადის შესაქმნელად გამოვიყენებთ varს კოდის
// ბლოკის გარეთ varის ცვლადი მაინც გამოიძახება რამაც
// შეიძლება კოდში არეულობა გამოიწვიოს

// 4
// let myfunc =(a,b) => a * b
// // arrow ფუნქცია გვეხმარება რომ თუ რაიმე პატარა
// // კონკრეტული მოქმედება გვაქვს შესასრულებელი მისი
// // დახმარებით მარტივად და მოკლედ შევასრულოთ
// // ყოველგავრი {}ისა და return კეივორდის გამოყენების გარეშე

// // 3
// const numbers = [4, 48, 9, 1, 13];

// let txt = "code is";
// for (let i in numbers) {
//   txt += numbers[i];
// }

// const numbers1 = ['a', 'b', 'c'];

// for (const i of numbers1) {
//   console.log(i);
// }

// for in გვირბრუნებს ცვლადების სახელებს
// ხოლო for of გვირბრუნებს ცვლადების მნიშვნელობებს

//2

const form = document.querySelector('form');
const accountsDiv = document.querySelector('div');

const accounts = [];


function Account(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

function displayAccounts(accounts) {
    accountsDiv.innerHTML = '';
    for(const acc of accounts) {
        accountsDiv.innerHTML += `<p>Account ${acc.firstname} ${acc.lastname}</p>`
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;

    const acc = new Account(firstname, lastname);

    accounts.push(acc);

    displayAccounts(accounts);
})


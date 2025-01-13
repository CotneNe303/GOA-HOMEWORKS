if (localStorage.getItem('email')) {
    arsebuliInfo();
} else {
    damamatebeliInfo();
}

function damamatebeliInfo() {
    
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    const age = prompt("Enter your age:");
    const gender = prompt("Enter your gender:");

    
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);

    
    arsebuliInfo();
}

function arsebuliInfo() {
    
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const age = localStorage.getItem('age');
    const gender = localStorage.getItem('gender');

}
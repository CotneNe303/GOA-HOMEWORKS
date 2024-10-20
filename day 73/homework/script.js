class Animal {
    constructor(name, species, age) {
      this.name = name;     
      this.species = species; 
      this.age = age;       
    }
    speak() {
      console.log(this.name + ' makes a sound.');
    }
    displayDetails() {
      console.log('Name: ' + this.name);
      console.log('Species: ' + this.species);
      console.log('Age: ' + this.age + ' years');
    }
  }
  let lion = new Animal('alika', 'Lion', 5);
  lion.speak();           
  lion.displayDetails(); 
































class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    start() {
        console.log("The" + this.make + '' + this.model + '' + this.year + '' + this.color + 'is starting')
    }


    stop() {
        console.log("The" + this.make + '' + this.model + '' + this.year + '' + this.color + 'is stopping')
    }


    displayDEtails() {
        console.log('Make: ' + this.make);
        console.log('Model: ' + this.model);
        console.log('Year: ' + this.year);
        console.log('Color: ' + this.color);
    }
}

let myCar1 = new Car('Mercedes', "E-klass", "2022", "Silver")
let myCar2 = new Car('Landrover', 'Rangerover', '2020', 'Black')

myCar1.start();
myCar1.stop();
myCar1.displayDEtails();

myCar2.start();
myCar2.stop();
myCar2.displayDEtails();

















class Human {
    constructor(name, age, gender, profesion) {
      this.name = name;      
      this.age = age;          
      this.gender = gender;    
      this.profesion = profesion;  
    }
  
    greet() {
      console.log('Hello, my name is ' + this.name + '.');
    }
  
    introduce() {
      console.log('I am ' + this.name + ', ' + this.age + ' years old, and I work as a ' + this.profesion + '.');
    }

    work() {
      console.log(this.name + ' is working as a ' + this.profesion + '.');
    }
  

    displayDeTails() {
      console.log('Name: ' + this.name);
      console.log('Age: ' + this.age);
      console.log('Gender: ' + this.gender);
      console.log('Profesion: ' + this.profesion);
    }
  }

  let person = new Human('Irodi', 25, 'male', 'webDeveloper');
  
  person.greet();          
  person.introduce();     
  person.work();            
  person.displayDeTails();  
  
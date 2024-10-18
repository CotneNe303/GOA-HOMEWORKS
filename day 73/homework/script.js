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
  let lion = new Animal('Leo', 'Lion', 5);
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

let myCar = new Car('Mercedes', "E-klass", "2022", "Silver")

myCar.start();
myCar.stop();
myCar.displayDEtails();



class Human {
    constructor(name, age, gender, occupation) {
      this.name = name;      
      this.age = age;          
      this.gender = gender;    
      this.occupation = occupation;  
    }
  
    greet() {
      console.log('Hello, my name is ' + this.name + '.');
    }
  
    introduce() {
      console.log('I am ' + this.name + ', ' + this.age + ' years old, and I work as a ' + this.occupation + '.');
    }

    work() {
      console.log(this.name + ' is working as a ' + this.occupation + '.');
    }
  

    displayDeTails() {
      console.log('Name: ' + this.name);
      console.log('Age: ' + this.age);
      console.log('Gender: ' + this.gender);
      console.log('Occupation: ' + this.occupation);
    }
  }

  let person = new Human('Irodi', 25, 'male', 'webDeveloper');
  
  person.greet();          
  person.introduce();     
  person.work();            
  person.displayDeTails();  
  
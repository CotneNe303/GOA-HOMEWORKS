// const car = {
//     name: "BMW",
//     country: "German",
//     model: "E34",
//     createAt: 2014,
//     color: "red",
//     stock: true,
//     printInfo: function(){
//         console.log(this.createAt)
//     }

// }
// car.printInfo()

// car.kg = 658.8
// car.model = "M4"
// delete car.name
// console.log(car.country)


// const me = {
//     Name: "Cotne",
//     lastName: "Nebieridze",
//     Age: 15,
//     birthCountry: "Georiga"
    
// }

// me.Age = 16
// me.height = 184
// delete me.height

// console.log(me)
// console.log(me.Name)
// console.log(me.lastName)
// console.log(me.Age)
// console.log(me.birthCountry)
// console.log(me.height)


// ობიექტი აირს ცვლადი რომელიც შეიცავს კუთვნილებებსა და მნიშვნელობებს.
// this კეივორდი აირს მეთოდი რომლითაც ჩვენ შეგვიძლია ობიექტშივე გამოვიძახოთ მნიშვნელობები ისე რომ ყოველჯერზე არ დაგვჭირეს ობიექტის სახელის გამოყენება

// const car ={
//     Name: "Mercedes-Benz",
//     Model: "E400",
//     CreatingDate: 2017,
//     Color: "white",
//     stock: true,

//     info: function(){
//         console.log(this.Name)
//     }

// }

// car.Model = "e320"
// car.weight = 670
// delete car.stock




// function Car(name, crateat){
//     this.name = name;
//     this.crateat = crateat;

//     // კუსნტრუქტოის გამოყენებით ობიექტში მოვახდენთ კუტვნილებბბის შექმნა ა ინიციალიზება
//     this.Printinfo = function(){
//         console.log(this.name, this.crateat)
//     }

// }

// // new შექმნის ახალ ცარიელ ობიექტს როემლსაც გადასცემს შემდეგ კი კონსტრუქტორი ამ ცარიელ ობიექტს ინიციალიზებსას ანუ კუთვნლიებბების მინიჯჭებას აკეთებს

// const car1 = new Car("BMW", 2014)
// const car2 = new Car("Mercedes", 2010)

// console.log(car2)


function Robot(name, material){
    this.name = name;
    this.material = material;

    this.printInfo = function(){
        console.log(this.name, this.material)
    }
}

const robot1 = new Robot("robo", metal)
const robot2 = new Robot("rob", titanum)
const robot3 = new Robot("copper", copper)

console.log(robot3)

// new ქმნის ახალ ცარიელ ობიექტს რომელსაც გადაცემს კონსტრუქტორს შემდეგ კი კონსტრუქტორი
// ამ ცარიელი ობიექტის ინიციალიზებას ანუ კუთვნილებების მინიჭებას აკეთებს

// კონსტრუქტორის გამოყენებით ობიექტში დავამატეთ მეთოდი



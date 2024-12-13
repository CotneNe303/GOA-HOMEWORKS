// const obj ={
//     name: "cotne",
//     surname: "nebieridze"
// }

// const GOA = new Map([
//     ["group14", "lasha lomidze"],
//     ["group15", "luka cxvaradze"],
//     ["group16", "Garbieli"]
// ])

// console.log(GOA)
// console.log(GOA.size)

// console.log(GOA.get("group14"))
// console.log(GOA.get("group15"))
// console.log(GOA.get("group16"))


// const cars = new Map([
//     ["MERCEDES", "E400"],
//     ["BMW", "E36"],
//     ["AUDI", "TT3"],
//     ["HYUNDAI", "KONA"],
//     ["TOYOTA", "PRADO"]
// ])

// console.log(cars.size)
// console.log(cars.get('MERCEDES'))
// console.log(cars.get('BMW'))
// console.log(cars.get('AUDI'))
// console.log(cars.get('HYUNDAI'))
// console.log(cars.get('TOYOTA'))

const goa = new Map([
    ['group14', 'gabrieli']
])
goa.set('group14', 'lasha')
goa.set('group15', 'luka')

let itterator = goa.keys()
for(let element of itterator){
    console.log(`${element} ${goa.get(element)}`)
}

// goa.delete('group15')
// goa.clear()

// console.log(goa.has('group14'))

// console.log(goa.get('group14'))
// console.log(goa)

// // console.get(typeof goa)




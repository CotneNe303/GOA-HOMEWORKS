// const divElements = document.getElementsByTagName('div')
// for(const div of divElements){
//     div.addEventListener('click', () =>{
//         console.log('clicked on div with id: ${div.id}');
//     });
// }

// for(const div of divElements){
//     div.addEventListener('click', () => {
//         console.log('clicked on div with id: ${div.id}');
//         true
//     });
// }

// event propagation - ნიშნავს მოვლენის მოძრაობას ელემენტში


// bubbling - ნიშნავს როდესაც ელემენტზე დაჭერისას
// ყველაზე შიდა ნაწილიდან იწყება მოვლენის მოძრაობა


// capturing - ნიშნავს როდესაც ელემენტზე დაჭერისას
// ყველაზე გარე ნაწილდან იწყება მოვლენის მოძრაობა


// const next = document.getElementById('next');
// const prev = document.getElementById('prev');
// const img = document.querySelectorAll('img');


// const imgArr = ["car.jpg", "car1.jpg", "car2.jpg","car3.jpg", "car4.jpg", "car5.jpg"];
// let currentIndex = 0

// next.addEventListener('click', function(){
//     currentIndex++;
//     if(currentIndex >= imgArr.length){
//         currentIndex = 0;
//     }

//     img.src = imgArr[currentIndex]
// });

// prev.addEventListener('click', function(){
//     currentIndex--;
//     if(currentIndex > 0){
//         currentIndex = 5;
//     }
//     img.src = imgArr[currentIndex]
// });

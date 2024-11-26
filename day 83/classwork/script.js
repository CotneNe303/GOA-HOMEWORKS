class Animal{
    constructor(name, habitat, diet, imageUrl){
        this.name = name;
        this.habitat = habitat;
        this.diet = diet;
        this.imageUrl = imageUrl;
    }
}


class AnimalApp{
    constructor(){
        this.animals =[]
    }
    addAnimal(animal){
        this.animals.push(animal)
    }


    static createCard(animal) {
        const card = document.createElement('div');
        card.classList.add('animal-card');
    
        const image = document.createElement('img');
        image.classList.add('animal-image');
        image.src = animal.imageUrl;
        image.alt = `${animal.name} image`;
    
        const name = document.createElement('h2');
        name.textContent = animal.name;

        const info = document.createElement('div');
        info.classList.add('animal-info');
        info.innerHTML = `
            <p><strong>Habitat:</strong> ${animal.habitat}</p>
            <p><strong>Diet:</strong> ${animal.diet}</p>
        `;
    
        card.appendChild(image);
        card.appendChild(name);
        card.append(info);
        
        return card;
    }

    render() {
        const container = document.getElementById('animal-list');
        this.animals.forEach(animal => {
            const card = AnimalApp.createCard(animal);
            container.appendChild(card);
        });

    }    

}


let  app = new AnimalApp();
app.addAnimal(new Animal('Mgeli', 'Ymuili', 'XORCI', 'mgeli.webp'))
app.addAnimal(new Animal('boberi', 'bajbaji', 'mcenare', 'boberi.webp'))
app.addAnimal(new Animal('arwivi', 'knavili', 'XORCI', 'arwivi.webp'))

app.render();


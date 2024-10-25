class Square{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get peremiter() {
        return this.width + this.height + this.width + this.height
    }
}

let info = new Square(10,5)

console.log(info.peremiter)



class Animal{
    constructor(name, spicies){
        this.name = name;
        this.spicies = spicies;
    }
}

class dzudzumwovari extends Animal{
    constructor(name, spicies, fourleg){
        super(name, spicies)
        this.fourleg = fourleg;
    }
}

class  wolf extends dzudzumwovari{
    constructor(name, spicies, fourleg, wolf){
        super(name, spicies, fourleg,)
        this.wolf = wolf;
    }
}


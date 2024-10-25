class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Mammal extends Animal {
    constructor(name, furColor) {
        super(name);
        this.furColor = furColor;
    }
}

class Bird extends Animal {
    constructor(name, wingSpan) {
        super(name);
        this.wingSpan = wingSpan;
    }
}

class Dog extends Mammal {
    constructor(name, furColor, breed) {
        super(name, furColor);
        this.breed = breed;
    }
}

class Cat extends Mammal {
    constructor(name, furColor, breed) {
        super(name, furColor);
        this.breed = breed;
    }
}

class Eagle extends Bird {
    constructor(name, wingSpan, habitat) {
        super(name, wingSpan);
        this.habitat = habitat;
    }
}

class Sparrow extends Bird {
    constructor(name, wingSpan, color) {
        super(name, wingSpan);
        this.color = color;
    }
}
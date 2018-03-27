class Animal {
    constructor(name) {
        this.name = name;
        this.isAlive = true;
        this.age = 0;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed;
        this.fur = true;
        this.eyelids = true;
    }

    bark() {
        console.log('woof WOOF!');
    }
}

class Fish extends Animal {
    constructor(name, species) {
        super(name)
        this.species = species;
    }

    gloop() {
        console.log("gloop... gloop")
    }
}

var sparky = new Dog("Sparky", "Labrador");
var nemo = new Fish("Nemo", "Clown Fish")
console.log(sparky);
sparky.bark();
console.log(nemo);
nemo.gloop()
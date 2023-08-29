class Animal{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    hello(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

let king = new Animal("Mufasa", 4.5);
console.log(king);
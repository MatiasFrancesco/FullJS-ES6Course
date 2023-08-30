class Animal{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }
    hello(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

export default Animal;
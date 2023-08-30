import Animal from "./animal";

class Lion extends Animal{
    constructor(name, height, color){
        super(name, height);
        this.color = color;
    }

    Hello(){
        console.log(`Hi i'm ${this.name}`)
    }
}

export default Lion;
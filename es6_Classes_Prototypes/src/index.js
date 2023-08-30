import Lion from "./lion";
let animal = new Lion("Mufasa", 10.5, "white");
animal.Hello();




function Wizard(name, house, pet) {
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm  ${this.name} from ${this.house} and I have a ${this.pet}`;
}
//use of prototype for add pet_name to the object
Wizard.prototype.pet_name;

Wizard.prototype.info = function () { return `I have a ${this.pet} named ${this.pet_name}` };


let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry.info());

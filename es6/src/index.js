
const limit = 200;

{
    //local let
    const limit = 10;
    console.log('backstage limit', limit);
}

//console.log('overall venue limit', limit);





/* use of ${} */


let a = `good`;
let greeting = `${a} morning`;   //I have use `` instead of ''
console.log(greeting);

let b = 'birthday';
let c = `happy ${b}`;
console.log(c);


/*collect method */
let x = [20, 30, 40];
let y = [10, ...a, 50];
//console.log(x);

//update data in array

let people = [`erik`, `bob`, `carl`];
//console.log(people);

function addPeople(...take_from_form) {
    //like java's varargs
    people.push(...take_from_form);
}

addPeople(`alice`, `milke`);
//console.log(people);

/* Destructuring Assignment on Arrays and Object */



//with arrays

let z = [4, 5, 6];
//let four = z[0];
//let five = z[1];
let [four, five] = z

//console.log(four, five);


let animals = [`Simba`, `Zazu`, `Ed`];
let [lion, bird] = animals;
//console.log(lion, bird);




//with object



let king = { name: "mufasa", kids: 1 };
//let name = king.name;
//let kids = king.kids;

let { name, kids } = king; //NB: use the same variable name in the object

{
    //you can use it if you want to declare variables first
    //let name, kids;
    //({name, kids} = king)
}

//console.log(name, kids);  


/* Arrow Function */


setTimeout(function () {  //anonymus function
    //console.log("Woohoo!");
}, 3000);


setTimeout(() => { console.log("Woohoo! Arrow Function!"); }, 5000);

/* Map and Filter Method */

let values = [20, 30, 40];

//method 1
//let double = (n) => {
//    return n*2;
//}
//let doubled = values.map(double);


//method 2 (better, you save soo much line)
let doubled = values.map((n) => n * 2);

//console.log(doubled);



//use of Filter
let points = [7, 16, 21, 4, 3];
let highScores = points.filter((n) => n > 15);
//console.log(highScores);







/* IMPORT-EXPORT MODULES */
import { fellowship } from "./fellowship";

console.log(fellowship);


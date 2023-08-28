

//let limit = 100;
//limit += 100;
//limit = 200;

//const limit = 100;
//limit = 200; 

//console.log(limit);


/*
const emails = ['frodo@email.com', 'drunkfox@email.com', 'strudu@email.com' ];

emails.push('pippo@emails.com');
console.log(emails);

emails.pop();
console.log(emails);
*/


/*

const limit = 200;

{
    //local let
    const limit = 10;
    console.log('backstage limit', limit);
}

console.log('overall venue limit', limit);

*/




/* 
use of ${}


let a = `good`;
let greeting = `${a} morning`;   //I have use `` instead of ''
console.log(greeting);

let b = 'birthday';
let c = `happy ${b}`;
console.log(c);

*/

/*collect method*/

let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b);

//update data in array

let people = [`erik`, `bob`, `carl`];
console.log(people);

function addPeople(...take_from_form){
    //like java's varargs
    people.push(...take_from_form);
}

addPeople(`alice`, `milke`);
console.log(people);




/*GENERATORS */
function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';
}

let letterGen = letterMaker();
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);


//this function count how many people enter through a shop's door
function* countMaker() {
    let count = 0;
    //max of 3 people
    while (count < 3) {
        yield count += 1;
    }

}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);


/* Controlling Flow with Generator */

function* evens(){
    let count = 0;
    while(true){
        count +=2;
        let reset = yield count;
        if(reset){
            count =0;
        }
    }
}
let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
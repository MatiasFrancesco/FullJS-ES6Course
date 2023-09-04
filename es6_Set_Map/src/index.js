/* use of SET */

let numbers = [231, 45, 332, 12, 2];
let numberSet = new Set(numbers);
console.log(numberSet);

numberSet.add(55);
numberSet.add(69);
console.log(numberSet);
console.log(numberSet.has(69))
console.log(numberSet.has(240))


/* use of MAP */

let a = new Map();
let key_1 = "string key";
a.set(key_1, 'return value for a string key');
console.log(a);

let key_2 = {
    a: 'key'
};
a.set(key_2, 'return value for a object key');
console.log(a);

let key_3 = (a,b) => { return a*b};
a.set(key_3, 'return value for a function key' );
console.log(a);

//simple use of Map 
let numArr = [[1, "one"], [2,"two"], [3, "Three"]];
let valMap = new Map(numArr);
//console.log(valMap);

for (let [key, value] of valMap.entries()){
    console.log(`${key} points to ${value}`);
}


//how many letters have a string
let string = "dasdasjhdgashgjdasjdfgashjkdvaseduawefgd";
let letters = new Map();
for (let i = 0; i<string.length; i++){
    let letter = string[i];
    if(!letters.has(letter)){
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}
console.log(letters);
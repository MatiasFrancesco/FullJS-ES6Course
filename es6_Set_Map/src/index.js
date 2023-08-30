/* use of SET */

let numbers = [231,45,332,12,2];
let numberSet = new Set(numbers);
console.log(numberSet);

numberSet.add(55);
numberSet.add(69);
console.log(numberSet);
console.log(numberSet.has(69))
console.log(numberSet.has(240))



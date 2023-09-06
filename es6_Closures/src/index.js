let call = () => {
    let secret = 'ES6 rocks!';
    let reveal = () => {
        console.log(secret);
    }
    return reveal;
}
//
//console.log(secret);
let unveil = call();
unveil();


/* FUNCTION FACTORIES */
const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h);
h = add_ness("blind");
console.log(h);


const product = (x) => {
    return y => {
        return y * x;
    }
}

let mult5 = product(5);
console.log(mult5(3));
let double = mult5(2);
console.log(double);



/* PRIVATE METHODS */

const budget = () => {
    let balance = 0;
    let changeBal = (val) => {
        return balance += val;
    }

    const deposit20 = () => {
        changeBal(20);
    }

    const check =()=> balance;

    return {
        //deposit20: deposit20,
        //check:check
        deposit20,
        check
    }
};

let wallet = budget();
console.log(wallet);
wallet.deposit20();
console.log(wallet.check());


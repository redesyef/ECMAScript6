class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB; 
    }
}
const calc = new calculator();
console.log(calc.sum(2,5));


// import

import { hello } from './module/'

const hello = require("./module");
hello();
console.log(hello())

//es6 generator
function* hw(){
    if(true){
        yield 'hello';
    }
    if (true){
        yield"World";
    }
};
const generatorHello = hw();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


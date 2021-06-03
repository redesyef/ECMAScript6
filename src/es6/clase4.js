let name = 'Yef';
let age = 26;

//es5
obj = { name: name, age: age};

//es6
obj2 = {name, age};

console.log(obj);
console.log(obj2);

const names = [
    {name: 'Yef', age: 26},
    {name: 'Mauricio', age: 26}
]
let listifNames = names.map(function (item){
    console.log(item.name);
})
let istifNames2 = names.map(item => console.log(item.name));
let istifNames3 = (names, ages, country) => {
    
};

//es6 promiese
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Hey!');
        } else{
            reject('ups!!');
        }
    });
}
helloPromise()
.then(Response => console.log(Response))
.then(() => console.log('hola'))
.catch(error => console.log(error));


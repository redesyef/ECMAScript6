const obj = {
    name: 'Yef',
    age: 26,
    country: 'CO'
}

let { name, ...all } = obj;
console.log(name, all);
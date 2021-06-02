function newFunction(name, age, country){
    var name = name || 'yef';
    var age = ager || 26;
    var country = country || 'CO';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Yef', age = 26, country = 'CO'){
    console.log(name, age, country);
};
newFunction2();
newFunction2('Ricardo', '23', 'CO');



//
let hello ="Hello";
let world = "World";
let epicPhrase = hello + ' '+world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)



let lorem ="Mollit ea veniam ad magna. Voluptate qui commodo do commodo elit officia. \n" +
  "Sit quis mollit esse quis reprehenderit labore esse nisi.";

//es6
let lorem2 = `otra frase épica`;

console.log(lorem);
console.log(lorem2);

let person ={
    'name': 'Yef',
    'age': 26,
    'country': 'CO',
}
console.log(person.name, person.age);

//es6
let{ name, age, country} = person;
console.log( age, country);

let team1 = [ 'Yef', 'Oscar', 'Juana'];
let team2 = ['Valentina', 'Yessica', 'Camila'];
//es6
let education = ['David', ...team1, ...team2];
console.log(education);

{
    var globalvar = "Global Var"
}

{
    let globallet= 'Global let'
    console.log(globallet);
}
console.log(globalvar);

const a = 'b';
console.log(a)






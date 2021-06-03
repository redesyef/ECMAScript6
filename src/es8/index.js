//entris

const data = {
    frontend: 'Yef',
    backend: 'Peña',
    design: 'Yefer',
}
const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

//values
const data = {
    frontend: 'Yef',
    backend: 'Peña',
    design: 'Yefer',
}
const values = Object.values(data);
console.log(values);
console.log(values.length);

//padStart
const string = 'hello';
console.log(string.padStart(9,' hi'));
console.log(string.padEnd(12, '----'));

//Async 
const helloWord = () => {
    return new Promise((resolve, reject)=> {
        (true)
        ? setInterval(()=> resolve ('Hello World'),3000)
        : reject(new Error('Test Error'))
    })
};
const helloAsync = async () => {
    const hello = await helloWord();
    
    console.log(hello);
}
helloAsync();

//Await
const anotherFuntion = async () => {
    try {
        const hello = await helloWord
        console.log(hello);
    } catch (error) {
        console.log(erro);
    }
}


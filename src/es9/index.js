const obj = {
    name: 'Yef',
    age: 26,
    country: 'CO'
}

let { country, ...all } = obj;
console.log(all);

// Porpagation Properties
const obj = {
    name: 'Yef',
    age: 26
}

const obj1 ={
    ...obj,
    country: 'Co'
}

console.log(obj1);

//
const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  
//Regex
const regexData = /([0-9]{2})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);
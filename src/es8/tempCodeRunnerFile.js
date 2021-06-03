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
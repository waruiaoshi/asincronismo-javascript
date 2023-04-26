const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!'), 2000)
            : reject(new Error('Error!!!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello elkin async');
}

console.log('Before');
console.log(anotherFn());
console.log('after');
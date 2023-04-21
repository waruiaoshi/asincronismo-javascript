const promise = new Promise((resolve, reject) => {
    resolve('hey!');
});

const cows = 5;
const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have de ${cows} in the farm`);
    } else {
        reject('not enough cows');
    }
})

countCows.then(
    (result) => {
        console.log(result);
    }
).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log('Finally');
});
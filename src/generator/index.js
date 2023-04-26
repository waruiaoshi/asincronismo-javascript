function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterable(array) {
    for (let value of array) {
        yield value;

    }
}

const it = iterable([
    'oscar',
    'lucia',
    'ana',
    'elkin'
]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
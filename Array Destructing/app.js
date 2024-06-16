const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];


console.log(fruit1, fruit2, fruit3);


const [peter, bob, anna, john, kelly, susan] = friends;
console.log(peter);
console.log(bob);
console.log(susan)


let first = 'John'
let second = 'Peter';
// let temp = second;
// second = first;
// first = temp;

// console.log(first, second);

[second, first] = [first, second]
console.log(first, second)


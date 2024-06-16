const people = [
    {
        name : "John",
        age : 30,
        job : "developer",
    },

    {
        name : "Denny",
        age : 21,
        job : "intern",
    },

    {
        name : "Mark",
        age : 40,
        job : "boss",
    }
]

const youngPeople = people.filter((person) => person.age < 30);
console.log(youngPeople);

const developers = people.filter((person) => person.job === "developer");
console.log(developers);

const seniorDevs = people.filter((person) => person.position === "senior dev");
console.log(seniorDevs);

const mark = people.find((person) => person.name === "Mark");
console.log(mark);
console.log(mark.job)


const fruits = ['orange', 'pear', 'lemon'];

const fruit = fruits.find((item) => item === "lemon");
console.log(fruit);

const grape = fruits.find((item) => item === "grape");
console.log(grape);


const oldPerson = people.find((person) => person.age < 2);
console.log(oldPerson);

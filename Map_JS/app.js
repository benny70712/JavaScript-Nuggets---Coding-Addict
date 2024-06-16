
// Map is an array of objects
people = [
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


// Get the age of an object
const getAges = (person) => person.age;

// Use map function for every items in the array
const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((person) => {
   return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
   }
} );


console.log(newPeople)


const newPeopleNames = newPeople.map((person) => {
    return `<h2>${person.firstName}</h2>`
});


console.log(newPeopleNames)

const result = document.querySelector("#result");
result.innerHTML = newPeopleNames.join("");




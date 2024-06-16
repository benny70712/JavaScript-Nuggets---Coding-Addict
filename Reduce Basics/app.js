
// Reduce
// Iterates , callback function
// reduced array to a single valye, number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/ value
const people = [
    {
        name : "John",
        age : 30,
        job : "developer",
        salary: 300,
    },

    {
        name : "Denny",
        age : 21,
        job : "intern",
        salary: 100,
    },

    {
        name : "Mark",
        age : 40,
        job : "boss",
        salary: 400,
    },
    {
        name : "Bob",
        age : 24,
        job : "designer",
        salary: 300,
    },
]


// Must return a total
const dailyTotal = people.reduce((total, person) => {
    console.log("total:", total)
    console.log(`${person.name}: ${person.salary}`)
    total += person.salary;
    // return total;
}, 0)


console.log(dailyTotal)

// an object 
const person = {
    "name" : "john",
}

// accessing to the object attribte
console.log(person.name);

// addeed a new attribute to the object
person.age = 25;
console.log(person)

// square bracket notation
const items = {
    "featured-items": ["item1", "item2"],
}

console.log(items["featured-items"]);
console.log(person["age"]);

let appState = "loading";
appState = "error";
const keyName = "computer";
const app = {
    [appState]: true,

}

app[keyName] = "apple";
console.log(app)


const state = {
    loading: true,
    name: "",
    job: "",
}


const updateState = (key, value) => {
    state[key] = value;
}

updateState("name", "John");
updateState("job", "developer");
updateState("loading", false);
updateState("ethnicity", "burmese");
updateState("properties", [])
console.log(state);
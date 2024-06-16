// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

// using spread operator on a strings turns it into an array of characters
const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const greeting = "hello world!";
const greetingLetters = [...greeting].join(" ");
console.log(greetingLetters);

// using spread opeataors on the array copy the values of the current array to a new array
const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';
const friends = [...boys, ...girls, bestFriend];

const newFriendsReference = friends
const newFriendsCopy = [...friends]
console.log(friends);
newFriendsReference[0] = "nancy";
console.log(friends);
console.log(newFriendsReference);
console.log(newFriendsCopy);


// spread operator on objects
// you can overwrite and add more attributes or method in objects
const person = {name: "john", job: "developer"};
const newPerson = {...person, favFood: "sushi", name: "Kyaw"}
console.log(newPerson);
console.log(person)

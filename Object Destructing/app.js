const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
      sister: 'jane',
    },
  };


const {first, last: lname, city, siblings:{sister: favouriteSibling}} = bob;
console.log(first, lname, city, favouriteSibling);



// const printPerson = (person) => {
//     const {first, last} = person;
//     console.log(first, last);
// }


const printPerson = ({first,last,city, siblings:{sister}}) => {
    console.log(first, lname, city, sister)
}
printPerson(bob)



// Q 3. Name Cases: Store a person’s name in a variable, and then print
//  that person’s name in lowercase, 
// uppercase, and titlecase.


// let personName = "noureen Ramzan";
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// console.log(personName.replace(/\b\w/g,(char) => char.toUpperCase()));

//second methode

let personName="Noureen";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLocaleLowerCase());





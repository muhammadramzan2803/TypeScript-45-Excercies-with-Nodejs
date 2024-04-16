// Q 43 Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a 
// copy of the array of magicians’ names. Because the original array will be unchanged, return the new array
//  and store it in a separate array. Call show_magicians() with each array to show that you have one array
//   of the original names and one array with the Great added to each magician’s name.
// Define the function to show magicians names
function show_magicians(magicians) { magicians.forEach(function (name) { return console.log(name); }); }
// Function to make magician great through .map() it will modify array
function make_great(magicians) { return magicians.map(function (name) { return "The Great ".concat(name); }); }
// Deefine an array of magicians names
var magician_names = ["Harry poter", "Noureen", "Hoorab"];
// Making a copy of orignal array through .slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" whith their names
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays Original and Copied
// Original
console.log("Orignal Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);

// Q 16 More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end
//  of your list. • Print a new set of invitation messages, one for each person in your list.
// Creating a Guest list Of Array
var guestList = ["Aliza", "Faryal", "Hoorab", "Ifrah"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
//print the name of guest who cant come
console.log(dontCome, "Nahi Ah sakti");
// Add or remove guest from guest list Array
guestList.splice(0, 1, "Samreen");
// Message print for  Bigger Table
console.log("Good News ! we have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of Array
guestList.unshift("Noureen");
//Adding a new guest at ending index of array 
guestList.push("zain");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array 
guestList.splice(middleIndex, 0, "Farheen");
// print Message of Updated List
console.log("Updated List of our Guests");
//Sending a invitation message to our guests one by one with thier nemes.
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me ?")); });

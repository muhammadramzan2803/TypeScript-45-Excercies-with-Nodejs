// Q 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
// has changed.


//Making a Array of countries and print its orginal order
let countriesToVisit: string[] = ["China","Denmark","Brazil","Argentina"];
console.log("Original Order:",countriesToVisit);

//print the Array Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:",[...countriesToVisit].sort());

//show that the array is still in its orginal order
console.log("still in Orginal Order:",countriesToVisit);

// print the Array in Reversed order without modifying the Actual Array list
console.log("Reverse Order:",[...countriesToVisit].reverse());

// /show that the array is still in its orginal order
console.log("still in Orginal Order:",countriesToVisit);

// we have changed the orginal Array order Now
console.log("Orginal Array Reversed:",countriesToVisit.reverse());

// print the Array to show that it's back to its orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in Alphabetical oreder now
console.log("Sorted in Alphabetical Order:",countriesToVisit.sort());

// we have changed again the orginal Array order Now in reverse order again
console.log("Orginal Array Reversed Again:",countriesToVisit.reverse());



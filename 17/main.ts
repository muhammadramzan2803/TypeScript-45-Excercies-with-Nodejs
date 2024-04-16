// Q 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for
//  the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time 
// you pop a name from your list, print a message to that person letting them know you’re sorry you
//  can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure
//  you actually have an empty list at the end of your program.

// Q 16 More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end
//  of your list. • Print a new set of invitation messages, one for each person in your list.



// Creating a Guest list Of Array
let guestList = ["Aliza","Faryal","Hoorab","Ifrah"];

// Making variable for those guest who cant come
let dontCome = guestList[0];

//print the name of guest who cant come
console.log(dontCome,"Nahi Ah sakti");

// Add or remove guest from guest list Array
guestList.splice(0, 1, "Samreen");

// Message print for  Bigger Table
console.log("Good News ! we have Found a Bigger Table For Dinner.");

// Adding a new guest at starting index of Array
guestList.unshift("Noureen");

//Adding a new guest at ending index of array 
guestList.push("zain");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2)

//Adding a new guest to middle index of array 
guestList.splice(middleIndex, 0,"Farheen");

// print Message of Updated List
console.log("Updated List of our Guests");

//Sending a invitation message to our guests one by one with thier nemes.
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me ?`));

// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new table wont arrive on time, so I can only invite two Guests to dinner with me");


// using while loop to remove guests from the array until only two names remain
while(guestList.length > 2) {

    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

// sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// Removing last two Guest from the list 
guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);












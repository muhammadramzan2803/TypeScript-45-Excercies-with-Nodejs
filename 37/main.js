"use strict";
// Q 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt 
// of any size with a different message.
// Making a Function
function make_shirt(size = "Large", printMessage = "I Love TypeScript") {
    console.log(`Craeting a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a function with by-defualt values
make_shirt();
// Calling a function now with Medium size and  default message
make_shirt("Medium");
// Calling a function now with small size and also Diffrent print Message 
make_shirt("Small", "I Love JavaScript");

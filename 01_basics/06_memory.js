// Two types

// Stack (Primitive type) 
//  When we use stack memory we'll get a copy of the varible has been used.

// Heap (Non_primitive type)
// We get the reference of the original value whatever we want to change we have to change from its original value.


let myYoutubeName = "ananyadotcom"

let anotherName = myYoutubeName
console.log(anotherName); 
// Here the value will be shown as ananyadotcom

 anotherName = "ananya18dotcom"
 console.log(anotherName); // Here the value will be different as now we give it a new ones
 console.log(myYoutubeName); // But here it will be same as before we just made a copy from it haven't changed it


 // Heap
 let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "ananya@google.com"

 console.log(userTwo);
 console.log(userOne);

 /* But here after changing the value of userTwo ,, userOne value will also change becoz it's take the original
 at its reference */ 

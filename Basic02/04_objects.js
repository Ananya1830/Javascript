// singleton = In literals we can't create singleton object but through constructor we can create it.
// Object.create (This is the constructor method) will do this later


// For Symbol
const mySym = Symbol("key 1")

// Object literals
const myDetails = {
    name: "Ananya" , // system name ko as a "name" string leta hai
    "full name" : "Ananya Mohapatra" ,
    age: 20 , 
    location: "BBSR" ,
    email: "ananya@.com" ,
    isLoggedIn: false , 
    lastLoginDays: ["Monday" , "Thursday"],

    [mySym] : "myKey1" // In object we declare symbol like this
    // For symbol we have to give square bracket
}
console.log(myDetails.email); // Mostly we don't use this 
console.log(myDetails["email"]);
// we use this method here we have to use [] and "" we don't use . here
console.log(myDetails["full name"]); // Here we can't access it with .

console.log(myDetails[mySym]);

myDetails.email =  "ananya181@.com" // Can change value like this
// Object.freeze(myDetails) // We can freeze our datas by using this
myDetails.email = "ananya@google.com" // We freeze our data already so it will not change now

console.log(myDetails);

myDetails.greeting = function (){
    console.log("Hello");  // Hello
}

console.log(myDetails.greeting()); // console.log(myDetails.greeting());
// It will show like this and will shows error becoz still it is not a function

console.log(myDetails.greeting); // [Function (anonymous)]
// Function will not execute only reference will come


myDetails.greeting2 = function (){
    console.log(`Hello user, ${this.name}`);  // Hello user, Ananya
    // this likh ke . lagane ke baad object ke andar jitne properties hoga will shows those
}

console.log(myDetails.greeting2());
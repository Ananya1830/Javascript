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
}
console.log(myDetails.email); // Mostly we don't use this 
console.log(myDetails["email"]);
// we use this method here we have to use [] and "" we don't use . here
console.log(myDetails["full name"]); // Here we can't access it with .

console.log(myDetails[mySym]);

myDetails.email =  "ananya181@.com" // Can change value like this
Object.freeze(myDetails) // We can freeze our datas by using this
myDetails.email = "ananya@google.com" // We freeze our data already so it will not change now

console.log(myDetails);



const mySym1 = Symbol("mynameis")
const me = {
    [mySym]:"mynameis",
    msg:"hello",
    lang:"English"
}


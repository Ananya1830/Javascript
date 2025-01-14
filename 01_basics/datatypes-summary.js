// Data types are of two types
// Primitive and Non primitive(Reference types)

// Primitive
// 7 types : String , number , boolean , null , undefined , symbol , BigInt
// symbol(To make a value unique)

// Javascript is a 

// Number type
const score =100
const scoreValue = 100.3

const isLoggedIn = false // Boolean
const outsideTemp = null // null is 0
let userEmail; // We can write undefined or we can leave it like this it will show undefined


const id = Symbol('123')
const anotherId = Symbol('123')
// Both values are same but the results will be different

console.log(id === anotherId); // False ,,,, even the values are same


const bigNumer = 7646798764567645n 
// If we write n after the number it will converted to bigInt


// Reference types (Non primitive)

// Array, Objects, Functions

const heros = ["captain america" , "ironman" , "superman"] // Array


//Object
let myObj = {
    name:"Ananya",
    age:20,
}  
// whatever inside {} is object


// Function
const myFunction = function () {
    console.log ("Hello World!")
}


console.log(typeof bigNumber); // undefined ,,,, shows type
console.log(typeof myFunction); // function
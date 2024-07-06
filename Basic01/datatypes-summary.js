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
let userEmail; // We can write undefined or we can leave it like this


const id = Symbol('123')
const anotherId = Symbol('123')
// Both values are same but the results will be different

console.log(id === anotherId); // False even the values are same


const bigNumer = 7646798764567645n // n lagane se it will be bigint


// Reference types (Non primitive)

// Array, Objects, Functions

const heros = ["captain america" , "ironman" , "superman"] // Array

{
    name : ""
}
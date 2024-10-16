// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.

//  All values are truthy unless they are defined as falsy.

// All the falsy values are

// false , 0 , -0 , 0n (in Bigint) , "" ,null , undefined , NaN.


// Example 

let user = false
 
if (user) {
    console.log(`user is there`);
} else {
    console.log(`There is no user.`);
} // There is no user.

let user1 = 0
 
if (user1) {
    console.log(`user is there`);
} else {
    console.log(`There is no user.`);
} // There is no user.


let user2 = -0

if (user2) {
    console.log(`user is there`);
} else {
    console.log(`There is no user.`);
} // There is no user


let user3 = -0

if (user3) {
    console.log(`user is there`);
} else {
    console.log(`There is no user.`);
} // There is no user.


let user4 = 0n

if (user4) {
    console.log(`user is there`);
} else {
    console.log(`There is no user.`);
} // There is no user.




//truthy values

// "0", 'false', " ", [], {}, function(){}

// If any values are in string(" " , ' ' ) called truthy values


let user5 = [false, 0, -0, 0n, "", null, undefined, NaN]

if (user5) {
    console.log(`user is there`);
} else {
    console.log(`There is no user.`);
} // user is there



// How to check if the array is empty or having some value

if (user5.length === 0){
    console.log(`empty`);
} else {
    console.log(`not empty`);
} // not empty



// How to check wheather an object is empty or not 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log(`it is an empty obj`);
} // it is an empty obj




// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10            // 5
// val1 = null ?? 10         // 10
// val1 = undefined ?? 15    // 15
val1 = null ?? 10 ?? 20      // 10

console.log(val1);




// Terniary Operator
// Short hand notation of checking if else

// SYNTAX :  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
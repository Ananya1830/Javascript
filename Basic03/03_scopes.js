// SCOPE

// Scope determines the accessibility (visibility) of variables.

// Javascript has 3 types of scopes those are Block scope, Function scope, and global scope.

// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

// ES6 introduced two important new JavaScript keywords: let and const.

// These 2 keywords provide Block Scope in Javascript.

// Block Scope

//  variables declared inside a {} can't be accessed from outside of the block by using these keywords as let and const.


{
    let x = 1
    const y = 8
}
// console.table[(x,y)] // not defined

// But the variable declared with the keyword var can not have block scope.
// While declaring a variable with var keyword inside a {} can be accessed from outside the block.

{
    var c = 18
}
 console.log(c); // 18


 // Local Scope 
 
 //  Variable declared within a Javascript function becomes LOCAL of the function.

 function myCar(){
    let car1 = "Porsche"
    const car2 = "Rolls Royce"
    var car3 = "Bugatti"
 }
 //console.log(car1); // car1 is not defined
 //console.log(car2); // car2 is not defined
 //console.log(car3); // car3 is not defined


 // Local Scope is  applicable for all keywords (var, let, const)

 // Local variables have function scope it can only be applicable within a function.

 // Since local variables are created within a function they can also be used in different functions.
 // LOCAL VARIABLE EXISTS WHEN A FUNCTION STARTS AND GETS DELETED WHEN THE FUNCTION IS DELETED.




// 3.Function Scope

// Each function creates a new scope.

// Variable defined inside a scope or the function is not accessible or visible outside of the function.

// All the variable declaration keywords such as var, let and const have functional scope.


function myFunction(){
    var carName = "Lamborghini"
}
//console.log(carName); // carName is not defined.

function myFunction_two(){
    let carr = "Mercedes"
}
//console.log(carr); // carr is not defined.

function myFunction_three(){
    const car4 = "hyundai"
}
//console.log(car4); // car4 in not defined.



// 4. Global Scope

// Variables declared globally or outside any function have global scope.

// Global variables can be accessed from anywhere in a javascript program.

// var, let, const all have a global scope if they get declared outside the function scope.

var x = 18 ;
let y = 55 ;
const z = 69 ;

function math(){
    console.log(x+y+z);
}
console.log(math()); // 142
 

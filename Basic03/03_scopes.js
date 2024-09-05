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
    const y  = 8
}
console.table[(x,y)] // not defined

// But the variable declared with the keyword var can not have block scope.
// While declaring a variable with var keyword inside a {} can be accessed from outside the block.

{
    var c = 18
}
 console.log(c); // 18
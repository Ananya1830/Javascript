// JAVASCRIPT ARROW FUNCATIONS

// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax.

// There are 2 types of basic ways where we can declare an arrow functions.

// Explicit or Regular arrow function

// In this type of arrow function we use the return keyword with curly braces.

// EX>>>>>

const add = (n1,n2) => {
    return n1+n2
}
console.log(add(8 , 4)); // 12

// We can also write the regular or explicit arrow function by another way that is writing the return keyword and curly braces within the same line

const add2 = (num1,num2) => {return num1+num2}
console.log(add2(68 , 41)); // 109

// If the function has only one statement and the statement return a value we can remove the brackets and the return keyword as well 


// ex>>>

const hello = () => "Hello World"

console.log(hello()); // Hello World

//  Note: This works only if the function has only one statement.

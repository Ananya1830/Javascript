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


// if we have only one parameter in the function we can pass that without paranthesis.

const yo = greet => {
    return `${greet} , Ananya.`
}
console.log(yo("Hiii")); // Hiii , Ananya.



// Implicit arrow function

// It is an arrow fucntion where "return" keyword is removed with the curly braces and paranthesis are used instead of them.

// ex 

const me = () => (console.log("hello everyone"))

console.log(me()); // hello everyone

// Another example with parameter and argument.

const price = (rs) => (console.log(`${rs} is the price.`))

console.log(price(14)); // 14 is the price.

// so here the implicit expression of arrow or the implicit arrow function is used mostly in react js.

// implicit arrow fucntion is used mostly because if the object is used then it will show the object as an output.
// Ex>>>.


const obj = (num1 , num2) => ({
    username:"Ananya"
})

console.log(obj(56.75)); // { username: 'Ananya' }
// It returns while we use the paranthesis.

// Other wise it will give undefined as the output .
// / ex

const obj2 = (number) => {
{
useris: "Ananya"
}}
console.log(obj2(18)); // undefined

// Let us have look what happens when we use "this" keyword in an arrow fucntion in multiple scenarios.

const tea = () => {
    let username = "Ananyaa"
    console.log(`${this.username} , how are uh?`);
}

console.log(tea()); // undefined , how are uh?  

// It shows undefined.

const myy = () => {
    let user = "Virat"
    console.log(this); // undefined
}

// Everytime we use "this" keyword in the function wheather it is general function or arrow funtion it doesnot 
// show the current conext.

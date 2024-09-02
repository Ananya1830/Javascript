// Function

/* A function in JavaScript is a block of code that performs a specific task. Functions are reusable, meaning 
 that you can use the same function multiple times in your code without having to rewrite it. */

// Declaring a function 

function myName(){
    console.log("Ananya");
    console.log("Mohapatra");
}
/* so here we first write the function keyword, then we write the name of our function as we do to declare a 
variable, then the() {} syntax, and in the {} we mention what is gonna be executed. */

// So now if we write only the name of the function that is 

myName;  // It is called as the reference of the function.

// But when we want to call or execute the function we have to write

myName(); // Ananya
          // Mohapatra

function addTwoNum(num1 , num2){ /* In javascript the types given 9n the parameter does not need to have any 
                                 kind of mention of datatypes. */
    
    console.log(num1 + num2);  // NaN, because of their no value of a parameter or called as an argument.
}  
addTwoNum ()  // NaN
addTwoNum ( 18 , 10 )  // 28
addTwoNum (8 , "6")  //  86
addTwoNum (7 , "a")  // 7a
addTwoNum (100 , null)  //  100

//Here the input given in the functions are called parameters.
// And the values we give while executing the functions are called arguments,


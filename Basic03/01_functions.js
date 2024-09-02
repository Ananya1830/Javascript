// Function

/* A function in JavaScript is a block of code that performs a specific task. Functions are reusable, meaning 
 that you can use the same function multiple times in your code without having to rewrite it. */

// Declaring a function 

function myName(){
    console.log("Ananya");
    console.log("Mohapatra");
}
/* so here we first write the function keyword, then we write the name of our function as we have to declare a 
variable, then the() {} syntax, and in the {} we mention what is gonna be executed. */

// So now if we write only the name of the function that is 

myName;  // It is called as the reference of the function.

// But when we want to call or execute the function we have to write

myName(); // Ananya
          // Mohapatra

function addTwoNum(num1 , num2){ /* When we make definition of function is known as parameters. Here num1 and
                                    num2 are parameters */
    
    console.log(num1 + num2);  // NaN, because of their no value of a parameter or called as an argument.
}  
addTwoNum ()  // NaN
addTwoNum ( 18 , 10 )  // 28  
addTwoNum (8 , "6")  //  86
addTwoNum (7 , "a")  // 7a
addTwoNum (100 , null)  //  100   Here the values are 100 and null so these are arguments here 
// But when we call a function the values we passes through it is known as arguments. Read above




 function addTwoNumbers (number1 , number2) {
     console.log(number1 + number2);
    
 }

addTwoNumbers(4 , 6)

// In javascript we can store {addTwoNumbers(4 , 6)} in a variable as we did below

const result = addTwoNumbers(4 , 6)

console.log("Result:" , result ); // undefined
/* We have already got the sum is 10 but after console the value of result here it will shown as undefined becoz
 we have not returned the value the value we returned was actually not the returned value. Here return is a 
 concept of it self. We will not do console log will done by some other 2 to 3 methods above and we will comment
 out the console log part. */



 function addTwoNumber (number1 , number2) {

    let result2 = number1 + number2
    console.log("Ananya"); // will print
    return result2
    console.log("Fuck off"); // will not print
    
 }

 const result2 = addTwoNumber(10 , 6)

console.log("Result:" , result2 );  // Result: 16 
// Here it will returned nothing becoz we haven't asked it to but wii print,,, Result: 16

/* And one imp thing here if we will console.log something after the return.result it will execute becoz bydefault
there is a rule of function that after return nothing will execute but before return it will execute. */



// Another step

function addTwoNumber2 (number1 , number2) {
    return number1 + number2
}

const result3 = addTwoNumber(10 , 10)

console.log("Result:" , result3 ); // Result: 20



// The other way we can took values and can do works 
function loginUserMessage (username) {
    return `${username} just logged in`
}

loginUserMessage("Ananya")
// Here it will print nothing becoz we haven't asked it and not even stored it it will only return

console.log(loginUserMessage("Ananya")); // Ananya just logged in
// Now it will be printrd

console.log(loginUserMessage()); // undefined just logged in
// If we had not passed any value



function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` // This line will not returned becoz we already add a return above 
}
/* Please enter a username
   undefined (will print this) */

// Above code will always run if the situation will be true



// But here is an another professional way
/* will use !(not) symbol before username it convers true into false or false into true */

function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


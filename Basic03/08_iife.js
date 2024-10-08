// Immediately Invoked Function Expressions (IIFE)


function one () {
    console.log(`DB CONNECTED`);
    
}
one();


// This is iife

// We use iife to execute a function immediately and mainly we use iife to remove the pollution of global scope
(function two () {
    console.log(`DB CONNECTED`);
    
})(); 
// Here we have to end this line by using a semicolon


// Can write this it will not print if we have not use ; at the end of above line to end
( () => {
    console.log(`DB CONNECTED TWO `);
} )();



// If it expect a variable 
( (name) => {
    console.log(`LOGGED IN ${name}`);
} )('Ananya')

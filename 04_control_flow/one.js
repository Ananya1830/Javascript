// if
// first ever control flow is if statement

// In this approach, we are using an if statement to check a specific condition, the code block gets executed 
// when the given condition is satisfied.



// < , > , <= , >= , ==(equal) , !=(not equal) , ===(find equals and type) , !==(reverse of not equal)

 if (18 != 100) {
     console.log("Executed");
}

if (16 !== 17) {
    console.log("Executed");   
}



const temperature = 60

if (temperature < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is greater than 50");  
}



const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`); // User power: fly
}

// console.log(`User power: ${power}`); // will show error becoz it is outside of the scope



const price = 1000
if (price > 500) console.log("test"),console.log("test2");
// Implict code not recommandable


const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else { 
    console.log("less than 1200"); // This line will execute

}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) { //   (&& = and, check all conditions
    console.log("Allow to buy course"); // Allow to buy course
}
// all conditions are true if we wrote 2==4 code will not executed

if (loggedInFromGoogle || loggedInFromEmail) {  // ( || = or, check one condition)
    console.log("User logged in"); // User logged in
}
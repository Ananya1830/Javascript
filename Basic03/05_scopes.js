// Nested Scope

 // let us have an example with a nested function

 function one(){
   const username = "Ananya"

   function two(){
       const website = "Github"
       console.log(username);
   }
    //console.log(website);  This will not execute becoz it is defined above the scope here it should have to
                            // defined above the {} scope 

    two() // Ananya is output becoz in func. two we declared username

}

 one() // It will not even execute becoz it is not declared in above function

/* From the above example we learned that in a nested function, the child function can have access to the 
variables of its parent function. */

// But the parent function can not have the accessibility for the variables of its child function.

// Here one is parent and two is child


// Hum jitni baar function declare krte hai uske liye utni baar callstag or scope banta hai




// We can also have an example for the nested if statements

if (true) {
   const firstName = "Ananya"
   if (firstName === "Ananya") {
       const lastName = " Mohapatra"
        console.log(firstName + lastName);  // Output : Ananya Mohapatra (It wii execute becoz it inside scope)
   }

   // console.log(lastName); // It wii not execute becoz we declared it outside the scope where we mentioned it
}

// console.log(firstName); // It will not becoz it's completely outside of the function







// ++++++++++++++++++ interesting ++++++++++++++++++

// Little discussions about hoisting

function addOne(num){
   return num+1
 }

 console.log(addOne(5)); // 6 

 function addOne2(num){
  return num+1
}

console.log(addOne2(100)); // 101

 // What if we declare the function as it is and call or execute the function above the function?

 console.log(addOne(5)); // 6
 
 function addOne(num){  // Here we only declare the function
    return num+1
  }
  // The ans is still 6.

  // Let us store function into a variable and then execute
  
  console.log(addT(5)); // error becoz 

  const addT = function(num){   // Here wedeclared it as we as we hold it in a variable.
   return num+2
  }
  
// This code will through an error as we are storing a function in a variable.
// If we do so the variable becomes or is also called an expression.
// Although it is an expression it is also a variable and we know variables are not recognized before its declaration.


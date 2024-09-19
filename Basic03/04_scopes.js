// Global Scope

// A variable or function declared outside of any function or block is in the global scope.

// It can be accessed from anywhere in code.

let globalVar = "I am global!";  

function showGlobalVar() {
  console.log(globalVar);  // Can access globalVar inside the function
}

showGlobalVar();  // Output: I am global!


//Local Scope (Function and Block Scope)

// Variables declared inside a function or block (like inside {}) are local to that function or block.

// Local variables are not accessible outside their scope.


// Function Scope

// Variables inside a function are accessible only within that function.


function myFunction2() {
    let localVar = "I'm local!";
    console.log(localVar); // Accessible here
  }
  
  myFunction2(); // Output: "I'm local!"
  console.log(localVar); // Error: localVar is not defined
  


// Block Scope 

// Variables declared with let and const are confined to the block they are defined in.


if (true) {
    let blockScoped = "I'm block-scoped!";
    
    console.log(blockScoped); // Accessible here
  }
  
  console.log(blockScoped); // Error: blockScoped is not defined

  


  //  FROM CHAT-GPT
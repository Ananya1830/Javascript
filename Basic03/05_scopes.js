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

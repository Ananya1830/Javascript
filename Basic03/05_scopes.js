// Nested Scope

 // let us have an example with a nested function

 function numOne(){
    const x = 45
    function numTwo(){
       let y = 10
       console.log(x+y);
    }
    console.log(y); //  y is not defined

    numTwo()
}

numOne() 

// From the above example we learned that in a nested function, the child function can have access to the variables of its parent function.
// But the parent function can not have the accessibility for the variables of its child function.

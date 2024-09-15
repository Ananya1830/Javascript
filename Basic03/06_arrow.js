// THIS keyword

// In JavaScript "this" keyword refers to an object.
// "this" keyword refers to the current context object.

// This keyword refers to different objects depending on how it is used.

// let us see an example of this and how it refers to the object.



const user = {
    username: "Ananya" ,
    price: 599,

    message: function() {
        console.log(`${this.username} , welcome to website`); // We use this for refering the current context
        
    }

}

//user.message()
console.log(this); // {} ,,, Here we are in node enviroment (this) refers to a empty{} object becoz there is
                   // no context in global

console.log(user); //  { username: 'Ananya', price: 599, message: [Function: message] }
console.log(user.message()); // Ananya , welcome to website


//let's change the value of the property

user.username = "V"
console.log(user.message()); // V , welcome to website ( here the current context of the keyword userName is "V")

// now we know that the "this" keyword refers to the current context of the scope.

//  so we can say "In an object method, this refers to the object."

// In a function, this refers to the global object.


// example
 
const userN = {
    name:"Ananya",
    msg:function(){
        console.log(`${this.name}, heiii.`); // Ananya, heiii.
        console.log(this);
    }
    
}

console.log(userN.msg()); // { name: 'Ananya', msg: [Function: msg] }

// So here the output is the current context we we print the"this" keyword.

//Let us see if we console log this keyword in the global scope or globally.

console.log(this); // {} (it shows empty. because we are in the node js environment where there is no object 
                   // means empty object)





 // BUT >>IMPORTANT<<

// IF WE CONSOLE LOG "this" keyword in the browser it will show "window" as the object.


// So we got to know that 
// Alone, this refers to the global object.
// Here in the node environment no object or empty object is present.

// but in the browser there is a window object which is a global object in the browser.

// Let us see if we console log "this" in a function

function ai(){
    console.log(this);
}
ai()

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  crypto: [Getter]
}
*/

//These are the value of this keyword as a global object.

/* The values of the global object in Node.js are functions and variables that are available to all modules in 
 Node.js program. This means that you can access them anywhere in your program without having to import them.*/

//let's check if the "this" keyword also refers to the current context while in the function or not.

function heii(){
    let user = "Ananya"
    console.log(this.user);

}

heii() // undefined

//Now we got to know that reference for the current context using this doesn't work in the function.                  
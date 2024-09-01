const course = {

    coursename: "Javascript" ,
    price: 999 ,
    owner: "YouTube" ,
    mode : "Online"
}

// So as we know we can access the value of this object by

// this below

console.log(course.coursename); // Javascript

// or by this

console.log(course["coursename"]); // Javascript


// But we can also access the value of the object by destructuring it

const {coursename} = course 

console.log(coursename); // Javascript



// We can also give or change the name of our key while accessing it by destructuring the object.

const {price: rate} = course

// So here rate is the new name while accessing the value of the "price" key

console.log(rate); // 999



// Now we will have a little bit of conversation about APIs.

/* So API stands for Application Programming Interface, which is basically the way for communication between 
two computers over a network. */


/* Before the Api value came up with a .xml structure which was complex then, but now Api comes up with a JSON 
structure. */

// JSON is basically an object without any name,

// EXAMPLE>>

{

    "Name":"Ananya",

    "coursename":"JS",

    "price":"free"

}

// In JSON structure both value and keywords are written between "".

// SOmetimes JSON values don't come up within an object necessarily, they also come up in an array

[

    {},

    {}

]
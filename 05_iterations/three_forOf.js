// for of

// ["", "", ""] strings in array
// [{}, {}, {}] object in array

// These are array specific loops

// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more


const arr = [11 , 22 , 33 , 44 , 55]

for (const num of arr) {
    console.log(num);
    
}
/* op
11
22
33
44
55 */


const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}
/* op
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is
Each char is W
Each char is o
Each char is r
Each char is l
Each char is d */



// MAPS
// Only for unique values
// value will not repeated

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

console.log(map);

/* op
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
  */

for (const key of map) {
    console.log(key);
    
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
 */

// Will print like this if we want to print differently then here is a shortcut

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}
/* op
IN :- India
USA :- United States of America
Fr :- France
*/



// for of loop on object

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}

// TypeError: myObject is not iterable

// Not for object
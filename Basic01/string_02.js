//     METHODS USED IN STRINGS


let a = ("Hello World")

console.log(a.charAt(1)) // e

console.log(a.charCodeAt(2)); // 108

console.log(a.includes("World")); // True becoz World is there otherwise shows false

console.log(a.startsWith("Hello")); // True

console.log(a.endsWith("World")); // True

console.log(a.endsWith("Hello")); // False becoz it ends with world

console.log(a.endsWith()); // false

console.log(a.toUpperCase());
// The toUpperCase() method converts all characters in the string to uppercase

console.log(a.toLowerCase());
// The toLowerCase() method converts all characters in the string to lowercase

//***************/ indexOf()  ********************

let b = "Hello world, welcome to the universe.";
console.log(b.indexOf("the")); //24 shows position
console.log(b.indexOf(",")); //11
console.log(b.indexOf("w" )); //6 first appearance


//******************** */ lastIndexOf() shows from ends to start *******************

let c = "Hello planet earth, you are a great planet.";
console.log(c.lastIndexOf("planet")); // 36
console.log(c.lastIndexOf("a")); // 38 (a of planet)


//********************** repeat *******************

let d = "HELLO WORLD!"
console.log(d.repeat(3)); 
// Returns a string with a number of copies of a string of its original string


//******************* replace ***********************

let e = "Visit Microsoft!"
console.log(e.replace("Microsoft" , "Google")); // Visit Google!
// It replaced with new string

let f = "Mr Blue has a green house and a green car and a green garden.";
console.log(f.replace("green" , "purple")); //Mr Blue has a purple house and a green car and a green garden.
// Here only first blue will be purple

// But if we add /g there
// The 'g' flag at the end of the pattern tells JavaScript to perform a global search
// This means all occurrences of "blue" will be replaced, not just the first one
console.log(f.replace(/green/g , "purple"));
     //Mr Blue has a purple house and a purple car and a purple garden.



//********************* replaceAll ********************
                                   
let g = "I love cats. Cats are very easy to love. Cats are very popular." ;
 console.log(g.replaceAll(/Cats/g , "Dogs"));
 console.log(g.replaceAll(/cats/g , "dogs"));


//************* search  ***********************

let h = "Mr. Blue has a blue house.";
console.log(h.search("has"));  // 9


//*******************  slice  *********************

//The slice() method extracts a part of a string.
//The slice() method returns the extracted part in a new string.
//The slice() method does not change the original string. 

let i = "HELLO WORLD"
console.log(i.slice(0 , 5)); // HELLO
/* The first parameter (0) is the start index, and the second parameter (5) 
is the end index (exclusive).

Extracts the substring from index 0 to index 4 from the text string.

The start index is inclusive (0), and the end index is exclusive (5), so it includes characters at 
positions 0, 1, 2, 3, and 4, resulting in the substring "Hello". */

console.log(i.slice( 3 )); // LO WORLD
// Because slicing starts from the 4th character (index 3) to the end of the string


//********************* split **********************

let j ="Hello world! How are you?";
console.log(j.split(" "));  // [ 'Hello', 'world!', 'How', 'are', 'you?' ]    
// The string "Hello world! How are you?" is split into an array of words

let k = "apple,banana,orange";
console.log(k.split(",")); // [ 'apple', 'banana', 'orange' ]

let l = "Hello world! How are you?";
console.log(l.split("o")); // [ 'Hell', ' w', 'rld! H', 'w are y', 'u?' ]
// Is split into an array at each "o"

let m = "Ananya";
console.log(m.split(""));  // [ 'A', 'n', 'a', 'n', 'y', 'a' ]
// Is split into an array of individual characters



//********************* subString ********************

let n = "Hello, world!"
console.log(n.substring(0, 5)); // Hello
// Extracting a substring from index 0 to index 5 (not including 5)

console.log(n.substring(7)); // world!
// Extracting a substring from index 7 to the end of the string


//     METHODS USED IN STRINGS


let a = ("Hello World")

console.log(a.charAt(1)) // e

console.log(a.charCodeAt(2)); // 108

console.log(a.includes("World")); // True becoz World is there otherwise shows false

console.log(a.startsWith("Hello")); // True

console.log(a.endsWith("World")); // True

console.log(a.endsWith("Hello")); // False becoz it ends with world



let b = "Hello world, welcome to the universe.";
// indexOf()
console.log(b.indexOf("the")); //24 shows position
console.log(b.indexOf(",")); //11
console.log(b.indexOf("w" )); //6 first appearance


let c = "Hello planet earth, you are a great planet.";
// lastIndexOf() shows from ends to start
console.log(c.lastIndexOf("planet"));
console.log(c.lastIndexOf("a"));
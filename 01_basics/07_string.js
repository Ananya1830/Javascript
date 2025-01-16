const name = "ananya"
const repoCount = 50

// console.log(name + repoCount + " Value"); // This syntax is outdated so not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)  // Hello my name is ananya and my repo count is 50
// This is more readable and reliable so recommended.
// This is string interpolation.

const gameName = new String('ananya-mo-com')

console.log(gameName[4]); // y

console.log(gameName.__proto__); // {}


console.log(gameName.length); // 13 ,,,, Total characters here 
console.log(gameName.toUpperCase()); // ANANYA-MO-COM ,,, Convert to uppercase
console.log(gameName.charAt(2));   // a ,,,, Position
console.log(gameName.indexOf('m')); // 7 ,,,, Character in which position


const newString = gameName.substring(1,5) 
/* When we divide it into substring character from 0 to 4 will show last no means 5 will not include
 which is [anan]
*/
console.log(newString); // nany


const anotherString = gameName.slice(-5, 3)
/* In slice we can give -ve numbers means it will start from reverse
*/
console.log(anotherString);

const newStringOne = "   ananya    "
console.log(newStringOne);
console.log(newStringOne.trim()); // After using trim it will remove the starting and ending spaces


const url = "https://ananya.com/ananya%20mohapatra"

console.log(url.replace('%20', '-')) // https://ananya.com/ananya-mohapatra ,,,, We replace %20 into -

console.log(url.includes('sundar'))  // false
/* We can ask some keywords are here or not by writing its name it will show true or false*/

console.log(gameName.split('-')); // [ 'ananya', 'mo', 'com' ]
// Here we split gameName bases on - in other ways can do this also.
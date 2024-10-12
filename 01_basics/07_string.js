const name = "ananya"
const repoCount = 50

 console.log(name + repoCount + " Value"); // This syntax is outdated so not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) 
// This is more readable and reliable so recommended.
// This is string interpolation.

const gameName = new String('ananya-mo-com')

console.log(gameName[4]);

console.log(gameName.__proto__);


console.log(gameName.length); // Total characters here [13]
console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.charAt(2));   // Position
console.log(gameName.indexOf('m')); // Character in which position


const newString = gameName.substring(1,5) 
/* When we divide it into substring character from 0 to 4 will show last no means 5 will not include
 which is [anan]
*/
console.log(newString);


const anotherString = gameName.slice(-4, 3)
/* In slice we can give -ve numbers means it will start from reverse
*/
console.log(anotherString);

const newStringOne = "   ananya    "
console.log(newStringOne);
console.log(newStringOne.trim()); // After using trim it will remove the starting and ending spaces


const url = "https://ananya.com/ananya%20mohapatra"

console.log(url.replace('%20', '-')) // We replace %20 into -

console.log(url.includes('sundar')) /* We can ask some keywords are here or not by writing its name it will show
                                    true or false*/

console.log(gameName.split('-')); // Here we split gameName bases on - in other ways can do this also.
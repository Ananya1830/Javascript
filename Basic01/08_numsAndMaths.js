const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

/* There can be some prototype methods which can be immplememnted with the number like the way 
 we can do in string. D1 */

console.log(balance.toString()); // 100(Type is a string.)

console.log(balance.toString().length) // Here length will be 3 becoz 100 has 3 letters.

console.log(balance.toFixed(2)); // 100.00 
/* We have to give a property after to.fixed means a number if we put 2 then two 0 will be add after that number
if we put 3 then it will add 3 zeroes. */

const firstNumber = 4125.456
console.log(firstNumber.toPrecision(5)); //4125.4
// It will return untill 4125.4

const secondNumber = 4125.856
console.log(secondNumber.toPrecision(4)); //4126
// It will return 4126 will round of .856 to 4126

 const zeros = 100000000
 console.log(zeros.toLocaleString());// 100,000,000 
 // (It is in US standards by default)

 //To make it a result in Indian Standard the code is>>
 console.log(zeros.toLocaleString('en-IN'));// 10,00,00,000



//************************ MATH **************************

// Math is a object in javascript where there is a lot of values and methods are present.


console.log(Math); // It is a object itself and it has so many properties.

console.log(Math.abs(-4)); // 4
// .abs() {absolute value} method converts the negative number into a positive one

console.log(Math.round(7.8));// 8
// .round() converts a decimal number into an round figured integer
console.log(Math.round(4.5)); // 5
console.log(Math.round(5.7)); //6

console.log(Math.ceil(7.1)); // 8
/* .ceil() method will always round up decimal number with upper value agr thoda bhi 7 se
jyada hua it will choose 8 */

console.log(Math.floor(5.9)); // 5
// .floor(0) method will always chhose the lower value to round up the decimal number.

console.log(Math.min(4, 54, 78, 1, 0.14)); // 0.14 Finds the minimum value
console.log(Math.max(45, 4256, 7895, 1110));// 7895 Finds the max value

console.log(Math.random()); // This method gives us the random value between 0 and 1

// so to get minimum of one value at left of the decimal we need to multiply it with 
// 10 and add a 1

console.log((Math.random()*10)+1); 
// now it will give a number between 1 to 9 at the left side of the decimal number 
// +1 krne se . ke baad 0 nhi aayega

// And we can round up the number with the math.floor function or method() 
// as we know it gives the lower value.
console.log(Math.floor((Math.random()*10)+1));
// Now it will give the value from 1 to 9


// Now there is another way to use Math.random() with min and max range.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(min - max +1)) + min);

// Math.floor krne se one lowest digit will come
// Becoz of +1 0 will not come after decimal 
// + min becoz the minimum value we want is 10

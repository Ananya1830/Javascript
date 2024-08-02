/*  Math.abs() is a method used to return the absolute value of a number. 
The absolute value of a number is its non-negative value without regard to its sign. 
In other words, it converts negative numbers to positive numbers and leaves
positive numbers and zero unchanged. */

console.log(Math.abs(-5));   // 5
console.log(Math.abs(5));    // 5
console.log(Math.abs(0));    // 0
console.log(Math.abs(-3.14)); // 3.14

console.log(Math.abs('-10')); // 10 (string to number conversion)
console.log(Math.abs(null));  // 0 (null is converted to 0)
console.log(Math.abs('abc')); // NaN (cannot convert string to number)



/* The Math.ceil() static method always rounds up and returns the smallest integer greater 
than or equal to a given number. */

console.log(Math.ceil(0.95)); // 1
console.log(Math.ceil(4)); // 4
console.log(Math.ceil(7.004)); // 8
console.log(Math.ceil(-7.004)); // -7



// Math.floor() is a method that rounds a number down to the nearest integer. 

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(-4.2)); // -5



// The Math.round() function is used to round a number to the nearest integer.

console.log(Math.round(0.9)); // 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); // 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95)); // -5 -5 -6




// The Math.trunc() static method returns the integer part of a number by removing any fractional digits.

console.log(Math.trunc(13.37)); // 13
console.log(Math.trunc(42.84)); // 42
console.log(Math.trunc(0.123)); // 0
console.log(Math.trunc(-0.123)); // -0




// The Math.cbrt() static method returns the cube root of a number.

console.log(Math.cbrt(-1)); // -1
console.log(Math.cbrt(1)); // 1
console.log(Math.cbrt(Infinity)); // Infinity
console.log(Math.cbrt(64)); // 4




// The Math.max() static method returns the largest of the numbers given as input parameters.

console.log(Math.max(1, 3, 2 , 7 ,9 , 5)); // 9
console.log(Math.max(-1, -3, -2)); // -1

console.log(Math.max()); // -Infinity
//  If no arguments are given, the result is -Infinity.

console.log(3 , 6 , 'a' , ); // Output: NaN
// // If any argument cannot be converted to a number, the result is NaN (Not a Number).

const array1 = [1, 3, 2];
console.log(Math.max(...array1)); // 3




// The Math.min() static method returns the smallest of the numbers given as input parameters.

console.log(Math.min(2, 3, 5, 4, 6)); // 2
console.log(Math.min(-4, -6, -3 , -2 , -7)); // -7

const array2 = [2, 3, 1, 4, 6];
console.log(Math.min(...array2)); // 1

console.log(Math.min()); // -Infinity
//  If no arguments are given, the result is -Infinity.




//
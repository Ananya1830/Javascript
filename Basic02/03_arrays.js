// sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]
/* sort() compares the strings character by character based on their Unicode values. 'D' (from "Dec") has a 
Unicode value of 68. 'F' (from "Feb") has a Unicode value of 70. 'J' (from "Jan") has a Unicode value of 74.
'M' (from "March") has a Unicode value of 77. */

const numbers = [1, 21, 4, 30, 200 , 77, 5000, 100000 ]
console.log(numbers.sort()); // [1, 100000, 200, 21, 30, 4, 5000 , 77,]
// This happens because the default sort is based on string comparison,
// so "100000" comes before "21", and "21" comes after "200" based on the first digit.



//Slice method
let array = [4, 5, 6, 7, 8, 9]
console.log("A " , array); //A  [ 4, 5, 6, 7, 8, 9 ]

let slicearr = array.slice(1,3);
console.log(slicearr); //[ 5, 6 ]  It will print value  of 1st and 2nd position will not print 3rd.
console.log("B ",array)// B  [ 4, 5, 6, 7, 8, 9 ]
/* The slice method detaches the particular element as mentioned in the parameter as range and does not 
include the last range. The slice() method does not manipulate the original array as well. If we will print 
the array again after using slice it will return the original value */



// Splice
let array2 = [11, 13, 15, 17, 19]
console.log("A ", array2); // A  [11, 13, 15, 17, 19]
let splicearr = array2.splice(1,3)
console.log(splicearr); // [ 13, 15, 17 ]   It include all the range it return 1st , 2nd and 3rd
 
console.log("B ",array2); // B  [17, 19 ]
/* The splice method also detaches particular elements as mentioned in the parameter as range and it 
does include the last range. The splice() method manipulates the original array as well by cutting off 
the elements that are mentioned in the parameter. */

/* In slice last range is not included.
   But in splice last range is included.

   In slice it doesnot manipulate the original array value returns the original value
   But in splice it does manipulate the original array value and only returns the value which are not included 
   in range. */



// concat
const array01 = ['a', 'b', 'c'];
const array02 = ['d', 'e', 'f'];
const array03 = array01.concat(array02);
console.log(array03); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const digits = ["a" , "s" , "v", "j"]
const number = [1, 14 ,30 ]
const digNum = digits.concat(number);
console.log(digNum); // ['a', 's', 'v', 'j', 1, 14,  30 ]



// join
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // "Fire,Air,Water"
// join() is called without any arguments, the default separator is a comma ,
console.log(elements.join('')); // "FireAirWater"
// This means there will be no separator between the elements, so they are simply concatenated together.
console.log(elements.join('-')); //"Fire-Air-Water"
// The join('-') method will insert a hyphen between each element in the array.




// reverse
// // The reverse() method reverses the order of elements in the array.
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.reverse()); // [ 5, 4, 3, 2, 1 ]



// includes
const fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits.includes("apple")); //true becoz apple is defined here
console.log(fruits.includes("pineapple")); //false becoz it's not defined here
console.log(fruits.includes("banana", 2)); // false
// becoz "banana" is at index 1, and the search starts from index 2



// flat
/* The array.flat() method in JavaScript is used to flatten an array, meaning it reduces 
the nesting of arrays within an array to a single level or to a specified depth. */
const array04 = [1, 2, [3, 4], [5, 6], 7];
console.log(array04.flat()); // [1,2,3,4,5,6,7]

const array05 = [1, [2, [3, [4, [5]]]]]
console.log(array05.flat(2)); // [ 1, 2, 3, [ 4, [ 5 ] ] ]



// findIndex
/* The findIndex() method of Array instances returns the index of the first element in an array that satisfies
the provided testing function. If no elements satisfy the testing function, -1 is returned. */

const array1 = [5, 32, 8, 130, 44];
const newElement = (element) => element > 100;
console.log(array1.findIndex(newElement)); // 3 (becoz 130 is greater than 100)

const newElement2 = (element) => element < 2;
console.log(array1.findIndex(newElement2)); // -1



// fill
/* The fill() method of Array instances changes all elements within a range of indices 
in an array to a static value. It returns the modified array. */

const array06 = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
console.log(array06.fill(0, 2, 4)); // [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array06.fill(5, 1)); // [1, 5, 5, 5]

console.log(array06.fill(6)); // [6, 6, 6, 6]



// toLocaleString
/* The elements of an array into a string, separating them by a locale-specific string (usually a comma ,). 
Each element of the array is converted to a string using its toLocaleString() method */

let fruitss = ["apple", "banana", "cherry", "date"];

console.log(fruitss.at(0));   // apple
console.log(fruitss.at(1));  // banana
console.log(fruitss.at(-1)); // data
console.log(fruitss.at(-2)); // cherry
// Negative indexing starts from the end of the array.




// toString 
// Converts an array into a string where each element is separated by a comma.
const elementss = ["apple", "banana", 1 , 18];
console.log(elementss.toString()); // apple,banana,1,18




// from
console.log(Array.from('fool')); // [ 'f', 'o', 'o', 'l' ]
console.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]



// isArray
/* It is used to check if a given value is an array. It returns true if the value is an array,
 and false otherwise. */
const flowers = ['rose' , 'lily' , 'orchids']
const evenNum = 18

console.log(Array.isArray(flowers)); // true
console.log(Array.isArray(evenNum)); // false



// concat
/* It is used to merge two or more arrays into a new array. It does not change the existing arrays 
but returns a new array. */
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = arr1.concat(arr2);
console.log(combinedArray); // [ 1, 2, 3, 4, 5, 6 ]



// findLast
/* It is used to find the last element in an array that satisfies a provided testing function. 
It returns the value of that element, or undefined if no element passes the test. */
const nums = [1, 2, 3, 4, 5, 6];
const lastEven = nums.findLast(num => num % 2 === 0);
console.log(lastEven); // 6

const nums2 = [41 , 42 , 43 , 44 , 45];
const result = nums2.findLast(num => num > 50);
console.log(result); // undefined



// findLastIndex
/*  returns the index of the last element in an array that satisfies a provided testing function. If no elements satisfy the testing function, 
it returns -1. */

const nums3 = [31 , 32 , 33 , 34 , 35];
const newNums3 = nums3.findLastIndex(num => num < 40)
const newNums4 = nums3.findLastIndex(num => num > 50)
console.log(newNums3); // 4
console.log(newNums4); // -1


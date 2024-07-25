// How to declare an array

const myArr = [0, 1 , 2 , 3 , 4]
// It can be a mixture of all this element like number ,boolean, string, object and array also
// Array is resizeable add we can add data again

//We can access the element in an array like below
// it is zero-indexed
console.log(myArr[0]); // 0 it also starts from 0 th position

const myArr2 = new Array(1, 18 , 30 , 77 , 81)
//By declaring this way we can enable various prototype methods 


// ARRAY METHODS

console.log(myArr2); // [ 1, 18, 30, 77, 81 ]

// The push() method returns the new array length
myArr2.push(88)
console.log(myArr2); // [ 1, 18, 30, 77, 81, 88 ]

// The pop() method removes the last element from an array
myArr2.pop()
console.log(myArr2); // [ 1, 18, 30, 77, 81 ]

myArr2.unshift(14) 
console.log(myArr2); // [ 14, 1, 18, 30, 77, 81 ]
// It adds the value as the first element which involves the shifting positions of every existing element.

myArr2.shift() 
console.log(myArr2); // [ 1, 18, 30, 77, 81 ]
// It removes the first element


console.log(myArr2.includes(99)); // false
console.log(myArr2.includes(18)); // true
// It is a questionnaire method which gives the output in boolean

console.log(myArr2.indexOf(30)); // 2
/* It gives the index value of the given element, it gives a valid number if the input given input 
in the parameter is present in the array otherwise it gives the out as -1 which is false */
console.log(myArr2.indexOf(69)); // -1


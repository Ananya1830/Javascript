// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500)); // 200  Here it will only print 200

function calculateCartPrice(...num1){
    return num1
} // Here it is rest operator

/* Here we will use rest operator we will use ...num1 (...) is rest and spread operator and it depends upon its
use cases. */

console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ]


// Now there is another type of case where

function nuM(value1,value2,...value3){
    console.log(value1);
    console.log(value2);
    console.log(value3);
}
console.log(nuM (45, 78, 215, 569, 36, 27, 91)); // [ 215, 569, 36, 27, 91 ]
/* Becoz
value1 = 45
value2 = 78 
value = [ 215, 569, 36, 27, 91 ]
*/


const user = {
    username: "Ananya",
    prices: 499
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
    // console.log(`Username is ${anyObject["username"]} and price is ${anyObject["prices"]}`);
}

console.log(handleObject(user));  // Username is Ananya and price is 499


handleObject({
    username: "ANANYA",
    prices: 799
})  // Username is ANANYA and price is 799




/* Like objects we can also pass arrays into the function by both storing it in a variable or declaring it 
while executing the function. */


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // 400
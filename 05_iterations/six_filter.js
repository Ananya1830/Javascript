const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values);
/* op
js
ruby
java
python
cpp
undefined
*/

// For Each loop didn't return any value



// FILTER
// It return values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]


const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = myNums2.filter( (num) => {
    return num > 5 // If we are opening scope here then we have to write return otherwise we don't have to
})

// console.log(newNums2); [] // Empty becoz we haven't return there
console.log(newNums2); // [ 6, 7, 8, 9, 10 ]


// Same thing using for each

const newNums3 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums3.push(num)
    }
} )

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


// MAP

// The Map object holds key-value pairs and remembers the original insertion order of the keys.

// Any value like all the primitive datatypes and object can be the value of the "valu"e and "key" keyword.


// It doesnot store repeated values .


// Essential map methods to perform

// 1.new Map()

// The new Map() method creates a new map object.


// We can create a javascript map by passing an array to new Map()

const cars = new Map([
    ['tyre',"ROLLS ROYCE"],
    ['seat',"BUGATTI"],
    ['type',"LAMBORGHINI"]
])

// 2.The set() method

// we can element to the map using set() method

cars.set('driving',"automating")

// 3. The get method

// We can get the value of a key by using the get() method
console.log(cars.get('type')); // LAMBORGHINI

// 4. The size property

// the size property returns the number of elements in a map.

console.log(cars.size);// 4

// 5. The delete() method
// The delete() method removes a map element

cars.delete("seat")

console.log(cars.size);// 3

// 6. The has method()
// the has () method return the value in a boolean context if the element it does exist or doesnot exist


console.log(cars.has('seat'));// false






// Now let us run for of loop in a map object

let students = new Map([
    ['Virat',"9999"],
    ['Kim Taehyung',"9999"],
    ['Jeon Jungkook',"9999"]
])


for (const key of students) {
    console.log(key);
}

/*
[ 'Virat', '9999' ]
[ 'Kim Taehyung', '9999' ]
[ 'Jeon Jungkook', '9999' ]
*/

// If we want to show the individual elements in the terminal then

for (const [key,value] of students) {
    console.log(`${key} :-> ${value}`);
}
/*
Virat :-> 9999
Kim Taehyung :-> 9999
Jeon Jungkook :-> 9999
*/

// Lets apply the for of loop in an object with "key" and "value" keyword


const newObj = {
    'game1' : "Candy",
    'game2' : "Crush",
    'game3' : "Saga"
}

for (const [key,value] of newObj) {
    console.log(`${key} -->> ${value}`);
    
} // newObj is not iterable
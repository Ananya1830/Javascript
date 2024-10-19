const  myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
/* op
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/


// for in loop in array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   // console.log(key); // only key will come means 0 1 2 3 4
    
    console.log(programming[key]);
}

 

// MAP


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }      

// NOTE>>>> AND we cant apply for in loop in map
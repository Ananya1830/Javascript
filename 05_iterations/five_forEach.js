// The forEach() method or iteration

// The forEach() method of an array executes a provided function for each array element.

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )
/* op
js
ruby
java
python
cpp
*/

coding.forEach( (item) => {
    console.log(item);
} )

// We can also use the general function here with the forEach()

// NOTE>> There should not be any name of the function.


function printMe(item){
        console.log(item);
}
    coding.forEach(printMe)
    

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
/* op
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
/* op
javascript
java
python
*/

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName);
} )
/* op
js
java
py
*/
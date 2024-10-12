//NUMBER

let score = 78
// It will show the type of score here 78 is a number

// 2 ways of typeof

console.log(typeof score);
// console.log(typeof(score));

let secScore = "43"
console.log(typeof secScore);
// Here 43 is a string

let valueInNumber = Number(secScore)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//Type is a number



let thirdScore = "43abc" //In js its type will change into a number
console.log(typeof thirdScore);

let secValueInNumber = Number(thirdScore)
console.log(typeof secValueInNumber);
console.log(secValueInNumber); // But its value will show as NaN(Not a Number)


//null
let fourthScore = null 
console.log(typeof fourthScore); // Type is a object

let thirdValueInNumber = Number(fourthScore)
console.log(thirdValueInNumber); // Conversion is 0

//undefined
let fifthScore = undefined
console.log(typeof fifthScore); // Type is a object

let fourthValueInNumber = Number(fifthScore)
console.log(fourthValueInNumber); // Conversion is undefined

//boolean
let num = true
console.log(typeof num);

let valueNumber = Number(num)
console.log(valueNumber) // It will return 1 if we put false it will return 0.

let secNum = "Ananya"
console.log(typeof secNUm);

let secValueNumber = Number(secNum)
console.log(secValueNumber)


// 78 => 78
// 43abc => NaN
// True => 1 , False => 0



//BOOLEAN 

let loggedIn = ""

let booleanLoggedIn = Boolean(loggedIn)
console.log(booleanLoggedIn)

// 1 => true ; 0 => false
// "" => 
// "Ananya" => true



//STRING

let someNumber = 69

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



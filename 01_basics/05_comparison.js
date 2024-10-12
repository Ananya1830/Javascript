console.log(4 > 2);
console.log(4 >= 2);
console.log(4 < 2);
console.log(4 == 4);
console.log(4 != 2);


// Two different data types
// js automatically converts string into numbers 
console.log("2">1); // true
console.log("02">1); // true


// An equality check == and comparisons >< >= <=
console.log(null > 0 ); //false [Comparisons convert null to a number treating it as 0. That's why it is false]
console.log(null == 0); //false
console.log(null >= 0); //true [Comparisons convert null to a number treating it as 0. That's why it is true]


console.log(undefined = 0); // 0
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
// From line no 13 to 23 it always confusing so it will be better to avoid such type of codes.



// === [It also check the data type]
console.log("2" === 2); // [It will not convert]


// In == string will be converted in a number but in === it will not.
// Comparison and conversion acts differently.
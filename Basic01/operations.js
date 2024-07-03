let value = 14
let negValue = -value
console.log(negValue);

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**3); // 12
console.log(2/3); // 0.6666666666666666
console.log(2%3); // 2


let str1 = "Hello"
let str2 = " Ananya"

let str3 = str1 + str2
console.log(str3);


//IMP

console.log("2" + 3); // 23
console.log(3 + "2"); // 32
console.log("2" + 4 + 6); // 246 [If string came first then all digit will be perform as strings]
console.log(3 + 2 + "4"); // 54 [First conversion will occur and then string will be same]


//TRICKY

console.log(true); // true
console.log(+true); // 1 [In boolean true is 1]
console.log(+""); // 0 ["" is 0]



let gameCounter = 100
++gameCounter 
console.log(gameCounter); //101 if it was gameCounter++ also the ans is 101

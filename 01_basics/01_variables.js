const accountId = 771831 //costant keyword ko lekhne ke liye ek hi tarika hai ki hume (const) likhna padega

//Variables ke liye (let and var) use hota hai
let accountEmail = "ananya@google.com" //let is recommended becoz the block problem is solved in this
var accountPassword = "128745"
/* Prefer not to use var beacause of the issue in block scope({}) & functional scope
Ex= like agar kisi programmer ne accoundPassword likha aur phir kisine file mai condition deke
accoundPassword dia toh woh uss se replace ho jata tha.
Pura remove nhi hua hai bss kuch old code likha jata hai
*/

accountCity = "Bhubaneswarr" 
// In js hum variable ko bina (var) use krr ke bhi likh skte hai but it's not a good practice

let accountState; 
/* Let agar hume variable malum nhi hai aur hum isse bss declare krr ke chod dete hai toh 
iska value "undefined" aayega
*/
//js mai semicolon compulsory nhi hai hum usse na deke bhi chod skte hai..


// accountId = 2 // not allowed if already one account is existing

accountEmail = "an@ananya.com"
accountPassword = "76874479"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

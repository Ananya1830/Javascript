let myDate = new Date()
console.log(myDate); // 2024-07-18T18:47:45.241Z
console.log(myDate.toString()) // Fri Jul 19 2024 00:17:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Fri Jul 19 2024
console.log(myDate.toISOString()) // 2024-07-18T19:07:21.937Z
console.log(myDate.toJSON()) // 2024-07-18T19:08:25.238Z ,, same ouput as toISOString
console.log(myDate.toLocaleDateString()) // 19/7/2024
console.log(myDate.toLocaleString()); // 19/7/2024, 12:43:45 am
console.log(myDate.toLocaleTimeString()); // 12:43:45 am
console.log(myDate.toTimeString()); // 00:43:45 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); //Thu, 18 Jul 2024 19:13:45 GMT

console.log(typeof myDate); // Type is object


// We can also create random dates and after storing them in a variable we can get the required output as per our need by using methods.

let myCreatedDate = new Date (2024, 0, 14)
console.log(myCreatedDate); // 2024-01-13T18:30:00.000Z
// (In js months starts from 0 = January)
console.log(myCreatedDate.toDateString()); // Sun Jan 14 2024
console.log(myCreatedDate.toLocaleString()); // 14/1/2024, 12:00:00 am ,, can also add different time there



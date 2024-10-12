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
console.log(myCreatedDate.toLocaleString()); // 14/1/2024, 12:00:00 am 
// We can also add different time there
let mySecCreatedDate = new Date (2024, 0, 14, 7, 5)
console.log(mySecCreatedDate.toLocaleString()); // 14/1/2024, 7:05:00 am


// we can also put the date either in YY--MM--DD format or in MM--DD--YY format
let date = new Date("2024-01-26") // YY--MM--DD [Here month will start from 1 not zero]
console.log(date.toDateString())

let secondDate = new Date("02-01-2004") // MM--DD--YY
console.log(secondDate.toDateString())

// We can also put the time in hours minutes and seconds by giving it.

let mDate = new Date(12,7,85,14,50)  //  by giving the input while mentioning or separating the input by commas(,) it always takes the input as YY--MM--DD format
console.log(mDate.toLocaleString());// 10/24/1912, 2:50:00 PM


// TIME STAMP
// This is something by which we can get the particular time from start.

let myTimeStamp = Date.now() // 1721498631650(ms) We can declare a object date in this way
                    
console.log(myTimeStamp);
console.log(secondDate.getTime()); // 1075573800000

console.log(Math.floor(Date.now()/1000)); 
// By dividing with 1000 we will get time in seconds and Math.floor for not getting decimal value after dividing.

let newDate = new Date ()
console.log(newDate); // 2024-07-20T18:22:12.012Z
console.log(newDate.getMonth()); // only give month and month will start from 0
console.log(newDate.getMonth() + 1); // +1 krne se we will get exact month will not start from 0
console.log(newDate.getHours()); //23

 // `${newDate.getMonth()} and the time `



 // .tolocaleString() method is a type of method where we can actually customize our out as per our need.

let updatedTimeStamp = newDate.toLocaleString('default', {
    weekday:"long"
})

console.log(updatedTimeStamp); // Saturday



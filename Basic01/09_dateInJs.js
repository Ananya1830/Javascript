let theDate = new Date()
console.log(theDate);//2023-10-04T03:18:39.552Z
console.log(theDate.toString());//Wed Oct 04 2023 08:48:39 GMT+0530 (India Standard Time)

console.log(theDate.toDateString());//Wed Oct 04 2023

console.log(theDate.toISOString());//2023-10-04T03:25:58.807Z

console.log(theDate.toJSON());//2023-10-04T03:27:42.173Z (same output as .toISOString())

console.log(theDate.toLocaleString()); // 10/4/2023, 8:59:49 AM

console.log(theDate.toLocaleTimeString()); // 9:02:06 AM

console.log(theDate.toLocaleDateString()); // 10/4/2023 (Gives the date)

console.log(theDate.toTimeString());// 09:04:33 GMT+0530 (India Standard Time)
// for loop
//Loops can execute a block of code a number of times.

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    console.log(element);
    
}


for (let i = 0; i <8 ; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is a odd number");
    }
    console.log(element);
    
}



for (let i = 1; i <= 5; i++) {
    const element = i;
    
    for (let j = 1; j <= 10; j++) {
        const ele = j
        console.log(`${element} x ${ele} = ${element*ele}`);
 }
    
}


let myArray = ["IronMan" , "Captain america" , "Spiderman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    // IronMan , Captain america , Spiderman
}



// break keyword

for (let i = 0; i < 8; i++) {
    if(i === 5){
        console.log(`Got number 5`);
        break // code will stop after 5 comes
    }
    const element = i
    console.log(element);
    
}
/* op
0
1
2
3
4
Got the number 5
*/

// continue keyword

for (let i = 0; i < 7; i++) {
    if(i === 5){
        console.log(`got the 5`);
        continue // After 5 code will also continue
    }
    const element =i;
    console.log(element);
    
}

/*
0
1
2
3
4
got the 5
6
*/

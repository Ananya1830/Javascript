const accountNumber = 9867778897;
console.log(accountNumber);
//accountNumber = 746585674;
//console.log(accountNumber); // There is the error because a const cant be changed if assigned once.



var accountName = "Ananya";
//console.log(accountName);
if (2===2){
    accountName = "Virat";
    console.log(accountName);// the value of the variable changes even if we change it in the block or function scope.
    // var is not recommended at all.
}


let city = "Bangalore";
city = "Bhubaneswar";
 // city = bbsr

if( 9 === 9){
    city="Mumbai";
    console.log(city); // the value of vaiable changes.
}
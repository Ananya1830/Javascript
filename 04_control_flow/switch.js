//The switch statement is used to perform different actions based on different conditions.
// switch () {
//     case value:
        
//         break;

//     default:
//         break;
// }


// The value of the expression is compared with the values of each case.

//If there is a match, the associated block of code is executed , If there is no match, the default code block 
// is executed.

// When JavaScript reaches a break keyword, it breaks out of the switch block.

// This will stop the execution inside the switch block.

//It is not necessary to break the last or default  case in a switch block. The block breaks (ends) there anyway.

/* Note: If you omit the break statement, the next case will be executed even if the evaluation does not match 
the case. */

// The default keyword specifies the code to run if there is no case match:

// The default case doesnot have to be the last case in a switch block.

// If we leave the break key after the condition satisfied after that all code will executed except default.


let monthName = 4

  switch (monthName) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log( "February");
      break;
    case 3:
      console.log( "March");
      break;
    case 4:
      console.log( "April");
      break;
    case 5:
      console.log( "May");
      break;
    case 6:
      console.log( "June");
      break;
    default:
      console.log("default case match");
      break;
  }




  const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}



/*
  NOTE
  If multiple cases matches a case value, the first case is selected.

  If no matching cases are found, the program continues to the default label.

   If no default label is found, the program continues to the statement(s) after the switch.

   */

   // STRICT COMPARISION IN SWITCH (===)

   // Switch cases use strict comparison (===).

   //The values must be of the same type to match.


let k = "0";

switch (k) {
  case 0:
   console.log("Off");
    break;
  case 1:
  console.log("On");
    break;
  default:
    console.log("No value found");
} // No value found
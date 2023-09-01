// convert into number
let score = "30";
console.log(typeof score);
// the above one is the way way to check the type
console.log(typeof score);
let valueInNumber = Number(score);
console.log(valueInNumber);

/*
33 => 33
33abac => NaN
null => 0
undefined => NaN
true => 1
flase => 0
*/

// convert into boolean
let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// Here is what you need to take way

/*
   1 => true
   0 => false
   "" => false 
   "zahid" => true
*/

//convert into string

let stringName = 111;
let convertIntoNUmber = String(stringName);
console.log(convertIntoNUmber);
console.log(typeof convertIntoNUmber);

/*
  1113 => string 
  undefined => string 
  null => string 
*/

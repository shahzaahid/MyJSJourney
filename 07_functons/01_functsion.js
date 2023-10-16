// function greetings() {
//   console.log("Assalmauaalikum");
// }

// greetings;
//the above line is not going to print anything it is the reference only
// greetings();
//the above line is the execution only it execute the function

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumber();
//with the above call you can get the output that NaN means not a number

addTwoNumber(10, 20);
//30

addTwoNumber("10", +20);
//1020

addTwoNumber(10, "20");
//1020

function subtract(number1, number2) {
  return number1 - number2;
}

// let number3 = subtract(10, 5);
// console.log(number3);
console.log(subtract(30, 10));
//20

//control flow

// <, >, <=, >= ==, !=, 1==
// 3 != 2 ture

// console.log(5 !== 5);    // false, because 5 is equal to 5
// console.log(5 !== '5');  // true, because 5 (number) is not equal to '5' (string)
// console.log(5 !== 6);    // true, because 5 is not equal to 6

if (2 == "2") {
  console.log("Executed");
}

//above not care about the type

if (2 === "2") {
  console.log;
}
//the aboe one is not going to get the executed because the type is not same

const temperature = 50;

if (temperature < 50) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

console.log("---------------------------------------------");
const score = 200;

if (score > 100) {
  var power = "Fly";
  console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);
//it will not get execute as it is outside the scope

//shorthand notation
const balance = 1000;
if (balance > 500) console.log("test"); //implcit scope
//as we know there is no need of {} if you have only one line of code but in js you can wrie multiple lines of
//code without {} you have to seprate the line with the comma
//console.log("test1"), console.log("test2"), console.log('test3)

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("greather > 500");
}

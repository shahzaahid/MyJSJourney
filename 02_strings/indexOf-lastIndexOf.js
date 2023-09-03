let name = "shah zahid kirmani";
console.log(name);
let copyName = name;
console.log(copyName);
//-----------------------------------

//There are follwoing wasy to cancatente the strings
//Firs way
let nameone = "Shah";
let nameTwo = " Zahid";
console.log("my name is", nameone + nameTwo);

//second wasy
console.log("This is my name", nameone, nameTwo);
//The above one is adding the space by defualt
// , alwasy seprate the space

//Third wasy Using string interpolation
console.log(`My name is ${nameone}`);
console.log(`My name is sha ${(nameone, nameTwo)}`);

let myName = new String("Zahid Kirmani");
//the above one is the string object
console.log(myName);

let myFullName = "Shah Zahid Kirmani";
console.log(myFullName);

//functions of strings
console.log(myFullName[3]);
//Answer h
console.log(myFullName[4]);
//Answer space
console.log(myFullName[5]);
console.log(myFullName[19]);
//Answer will be undefined
console.log(myFullName.length);

console.log(myFullName.charAt(17));
//Answer will be i
console.log(myFullName.indexOf("i"));
//it will return the first index of the character

console.log(myFullName.includes("zahid"));
//it will return the false as first character is small z

console.log(myFullName.includes("Zahid"));
// it will return true back

console.log(myFullName.endsWith("Kirmani"));
//it will return back true as it ends with kirmani

console.log(myFullName.endsWith("kirmani"));
//it will return false as there is small k
console.log(myFullName.replace("Zahid", "zaahid"));
console.log(myFullName.replace("z", "Z"));

const url = "https://linktr.ee/shah_zahid/%20";

console.log(url.replace("%20", " "));
let zahid = `zahid`;
console.log(zahid);

let ex = "shah zahid Kirmani";
console.log(ex.charAt(10));
console.log(ex.indexOf("zahid"));

let varname = "The code undefined code code!";
console.log(varname.indexOf("code", -1));
console.log(varname.lastIndexOf("code"));

console.log(varname.indexOf(""));
console.log(varname.length);
console.log(varname.lastIndexOf(""));

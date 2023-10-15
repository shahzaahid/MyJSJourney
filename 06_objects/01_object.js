//Two ways to declar the objects
//1 Literal 2 constructor

//singleton through constructor alwasy become the singleton
//key value
//object literal
const mySym = Symbol("key1");

const jsUser = {
  name: "Shah Zahid",
  "full  name": "shah zahid kirmani",
  mySym: "mykey1",
  [mySym]: "mykey2",
  //actuall this is not the outside this is the string
  age: 26,
  location: "lalpora lolab",
  email: "shahzaahid038@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//now how to acces the the objects
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full  name"]);
//you can't access the full name using the dot operator
console.log(jsUser.mySym);
console.log(typeof jsUser.mySym);
//so the above one is the string not the symbol
//access the symbole
console.log(jsUser[mySym]);

//change values in the objects
jsUser.email = "shahzaahidku@gmail.com";
//you can lock the object
console.log(jsUser["email"]);
// Object.freeze(jsUser);
jsUser.email = "shahzaahid038@gmail.com";
console.log(jsUser["email"]);
//Althouth with the above two line you cange the email but it does not got reflected it will still
// contain the old vale

//functions
jsUser.greeting = function () {
  console.log("Assalamualkim js user");
};

jsUser.greetingTwo = function () {
  console.log(`Assalamualkim js user, ${this.name}`);
};

console.log(jsUser.greeting);
//the output will be the function anonymous
console.log(jsUser.greeting());
//Assalamuaalikm js user
//undefined

console.log(jsUser.greetingTwo());
//The output will be Aslamualim js user, Shah Zahid

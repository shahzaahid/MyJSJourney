/*
 we have two types of premitive and non premitive type 
 1 Premitive type 
   We are getting the copy of the value 
   2 Non premitive type or Reference type 
   we are getting the reference of the value 

   The thing which will go into the heap you will always get the reference
 */

//stack
let email = "shahzaahid038@gmail.com";
let anotherEmail = "shahzaahidku@gmail.com";
anotherEmail = email;
console.log(email);
console.log(anotherEmail);

//Heap memory

userOne = {
  name: "Zahid",
  email: "shahzaahid038@gmail.com",
};
userTwo = userOne;
userTwo.name = "Shah Zahid Kirmani";
console.log(userOne.name);

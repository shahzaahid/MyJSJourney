//arrow function
//1 () => {}
//const addTwo = (num1, num2) => {return num1 + num2}
const chai = () => {
  let username = "shah zahid";
  console.log(this.username);
  console.log(this);
};
chai();
//the answer will be undefined

//version of arrow function

//version 01
//*********************************************************88 */
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(10, 20));

//version -2
//************************************************** */
//implecit return
const subtraction = (num1, num2) => num1 - num2;
console.log(subtraction(100, 20));
//the curly braces and the return keyword are not necessary

//version 03
//******************************************* */
const divide = (num1, num2) => num1 / num2;
console.log(divide(10, 2));

const say = () => ({ username: "shah zahid" });
const user = say(); // Call the say function to get the object
console.log(user.username); // Access the "username" property and log it

//the moral of the story is whenever you are going to use the with wout the bracket curly braces in the arrow function you must have use
//the return keyword

//whenever you are not going to use the curley you don't need to type return even for this (num1, num2)

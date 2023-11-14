/*ES6 Class Syntax (First Approach):
This approach uses the newer ES6 class syntax introduced in ECMAScript 2015.
The class keyword is used to define a class, and the methods are defined inside the class.
The constructor method is used for initializing object properties.
Methods like encryptPassword and displayName are defined directly within the class.
*/

class user {
  constructor(userName, email, password) {
    this.userName = userName;
    this.password = password;
    this.email = email;
  }
  encryptPassord() {
    return `${this.password}Abc`;
  }
  displayName() {
    return this.userName;
  }
}

const chai = new user("shahzahid", "shahzaahid038@gmail.com", "1235abc");
console.log(chai.encryptPassord());
console.log(chai.displayName());

/*
   behind the scen
   Prototype-Based Approach (Second Approach):
   This approach uses the older prototype-based syntax.
The function keyword is used to define a constructor function (UserTwo in this case).
Methods such as encryptPassword and displayName are added to the prototype of the constructor function.
Instances of the object created with new UserTwo(...) inherit these methods from the prototype.
 */

function userTwo(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

userTwo.prototype.encryptPassord = function () {
  return `${this.password}aacc`;
};

userTwo.prototype.displayName = function () {
  return this.userName;
};

const tea = new userTwo("Anees", "anees@gmail.com", "12345");
console.log(tea.displayName());
console.log(tea.encryptPassord());

/*
Key Differences:

Syntax: The syntax for defining classes is different between the two approaches. The first approach uses the class keyword, while the second approach uses constructor functions and prototypes.
class vs. function: The first approach uses the class syntax, which can be more concise and is often considered more modern. The second approach uses traditional constructor functions and prototype inheritance.
Readability: The class syntax is generally considered more readable and is the preferred way of defining classes in modern JavaScript. It provides a more intuitive and organized structure.
In terms of functionality, both approaches achieve similar results – they define a user object with methods for displaying the username and encrypting the password. The choice between them often comes down to personal preference and the features you want to leverage in your code.
 */

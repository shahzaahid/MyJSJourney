// new key word

function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;
console.log(multipleBy5(10));
//50
console.log(multipleBy5.power);
//2
console.log(multipleBy5.prototype);
//{} -> method ka this hai(constex set)

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
}
//I can declar my function inside the function

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("Chai", 25);
const tea = new createUser("tea", 250);
// new keyword is very important if you want injec the new propertis
chai.printMe();

//this means jes ni be bolaya hai uski pass javo
//this matlab jes

//In arrays we don't write like this one myArray.prototype.map()
//we write myArray.map() behind the prototype is getting automatically

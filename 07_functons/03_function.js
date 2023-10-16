function calculateCartPrice(num1) {
  return num1;
}
console.log(calculateCartPrice(10, 20));
//here I will get only the 10 in output this is the problem to over come this problem we are writing

function calculateCartPriceTwo(...num1) {
  return num1;
}

console.log(calculateCartPriceTwo(10));
// console.log(calculateCartPriceTwo(val1, val2, vale3, ...val))
//in the above 10 20, 30 will go into the val1, val2, vale3 the rest values will go in the val
console.log(calculateCartPriceTwo(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
//even thought I have only one variable but still I am able to get all the variables
//[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
//these ... are called rest operator here

//how to pass the object to the function and handle it with function
const user = {
  username: "shah zahid",
  pricee: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.pricee}`
  );
}

handleObject(user);
//the output will be Username is shah zahid and price is 199
//another way to pass the object

handleObject({
  username: "sam",
  pricee: 399,
});

//now pass the array in the functon
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[3];
}
console.log(returnSecondValue(myNewArray));
//above one is the first way to pass the array to the function
console.log(returnSecondValue([1, 2, 3, 4, 5, 6]));
//the above one is the second way to pass the array to the function

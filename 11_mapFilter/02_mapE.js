const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Map call back function
const newNums = myNumbers.map((num) => num + 10);
console.log(newNums);
//when you use the {} do use the keyword called return

//now let use the method chaining
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(output);

const one = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const two = one
  .map((three) => three * 20)
  .map((four) => four + 3)
  .filter((num) => num >= 40);
console.log(two);

// true or false

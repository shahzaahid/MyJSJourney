// const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result1 = Nums.forEach((num) => num > 5);
// console.log(result1);
// you will get the undefined means you can't return anything when you use the forEach loop

//filter
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = myNumbers.filter((numbers) => numbers > 5);
console.log(result);
//above three lines are solving this probem which was coming from the forEach loop

//if you want to use the {} in the arrow you should explicty mention the the return keyword

const numberGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = numberGroup.filter((item) => {
  return item > 5;
});

console.log(output);

const group = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output2 = group.filter((value) => value > 5);
console.log(output2);

//if yo only want to do this only with foreach loop
const newNums = [];
group.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});
console.log(newNums);
//here you have doen the job but you have to wrote the logic to do that

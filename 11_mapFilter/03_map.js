//reduce

const myNums = [1, 2, 3];
const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);
//, means value will go into the acc
console.log(myTotal);

{
  const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let acc = 0;
  const toatal = myNums.reduce((acc, currentVal) => {
    return acc + currentVal;
  });
  console.log(toatal);
  //the above one is very very important
}

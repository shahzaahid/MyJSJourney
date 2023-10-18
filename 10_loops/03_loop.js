//for loop in array
const myArray = ["A", "B", "C", "D"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
//if yo go beyond the array in js you will get undefined

//keywords in js
//break and continue
for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`Value of i is ${i}`);
}

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i is ${i}`);
}

//continue pleas sorry ehk bar maafi do go ignore conditon skip

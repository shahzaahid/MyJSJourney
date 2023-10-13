// Arrays
//elements can be different type
// Array is an object it is resizable
// indexes start from zero
// shallow copy share same coop deep copy can't share the same referene
const myArr = [0, 1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < 8; i++) {
  console.log(myArr[i]);
}
// console.log(myArr[1]);

// sencond way to define
const friends = ["Arif", "Anees", "Waheed"];
const myArr2 = new Array(2, 3, 4, 5, 6);
console.log(myArr2[2]);

//calculate the length
console.log(myArr2.length);

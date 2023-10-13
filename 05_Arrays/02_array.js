const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Array methods
myArr.push(11);
console.log(myArr);

myArr.push(12);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(300);
console.log(myArr);
// The 300 will be in the first and we have to shift all the elements in the array

myArr.shift();
console.log(myArr);
// This will remove this 300 from the array

console.log(myArr.includes(9));
// The above method will tell you the wether the elements exists in the array or not
console.log(myArr.indexOf(5));
//The above method will tell you the index of the element

//****************************
const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);
//All the values got converted into the string
console.log("---------------------------------------------\n");
// you should disscuss it to make it clear

//slice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 4);
console.log(myn1);

console.log("B ", myArr);

//splice
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log(myArr);

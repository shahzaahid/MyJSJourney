const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

//here we can use the for in loop

for (const key in myObject) {
  console.log(key);
}
console.log("*****************************\n\n");
//you will get the keys like js cpp rb swift

for (const key in myObject) {
  console.log(myObject[key]);
}
//javscript
//c++
//ruby
//swift by apple

//when we use the for of you will get the values direclty

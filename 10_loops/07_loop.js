const programmingLanguages = ["c", "c++", "java", "Javascript"];
for (let pro in programmingLanguages) {
  console.log(pro);
}
console.log("*************");
//so here you will get the indexes of arrays

for (let pro in programmingLanguages) {
  console.log(programmingLanguages[pro]);
}
//here you will get the values

//in object we can't acees the values using for in it is not iteratiable

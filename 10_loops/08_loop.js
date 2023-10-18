//it is very important
//foreach loop
const coding = ["js", "ruby", "python", "cpp", "swift", "fullter"];

coding.forEach(function (item) {
  console.log(item);
});
//callback function has not a name
console.log("\n\n***********************\n\n");

const programmingLanguages = [
  "Javascript",
  "Python",
  "TypeScript",
  "C#",
  "Swift",
  "flutter",
];
//using arrow function
programmingLanguages.forEach((item) => console.log(item));

function printMe(item) {
  console.log(item);
}

// programmingLanguages.forEach(printMe())

programmingLanguages.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];
//now use the foreach loop
myCoding.forEach((item) => {
  console.log(item.languageFileName);
});

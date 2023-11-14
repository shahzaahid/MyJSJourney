function outer() {
  let name = "shah zahid";
  function inner() {
    console.log(`This is the outer variable is getting accessed ${name}`);
  }
  return inner;
}
const myFunc = outer();
myFunc();
//! closure
//? closure don't not mean only the the funtion will get reun the enite locial scope will get reutrn

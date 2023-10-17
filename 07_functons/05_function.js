//Immediately Invoked Function Expressions (IIFE)

(function chai() {
  //this one is called the named IIFE
  console.log(`Db Connected`);
})();

(function () {
  console.log("InshaAllah I am going to master the Js");
})();

(function () {
  console.log("Always be humbel");
})();

//somethimes there is problem with the global pollution declartion

(() => {
  console.log("Always be humbel and nice to the people");
})();
//above one is called the arrow function

((name) => {
  console.log(`Assalamaalikym ${name}`);
})("shah zahid");

//; this is mendatory if you want to execute the next function like this one

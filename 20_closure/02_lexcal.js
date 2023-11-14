//! lexical scoping
function outer() {
  let name = "shah zahid";
  function inner() {
    let secret = "my123";
    console.log(
      `This is the outer variable called ${name} getting accessed through the inside function called outer`
    );
  }
  function two() {
    console.log("Innder", name);
  }
  inner();
  two();
}
outer();

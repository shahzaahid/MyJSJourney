var c = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // c = 30 is same as the above line
  //insde the if it is called block scope
}

// console.log(a);
//see the above line is pretty good it is not going to allow you to acces the variavle that is good
// console.log(b);
// same is the case with the above line
console.log(c);
//but here is the problem you can still acces it although it is outside the scope

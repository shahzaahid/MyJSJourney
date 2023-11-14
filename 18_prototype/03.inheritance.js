//inheritance
const User = {
  name: "chai",
  email: "chaigoogle.com",
};
const Teacher = {
  makeVideo: true,
};

const Teachingsupport = {
  isAvailabel: false,
};

const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: Teachingsupport,
  //broww property
  //can access the property
};

Teacher.__proto__ = User;
// this is the called the prototypal inhertance
// this is the old approach

//moden syntax
Object.setPrototypeOf(Teachingsupport, Teacher);

let anotherUsername = "ChaiAurcode        ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`Ture length is: ${this.trim().length}`);
};
anotherUsername.trueLength();
"zhid".trueLength();
"iceTea".trueLength();

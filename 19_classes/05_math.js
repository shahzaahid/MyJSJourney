//interview question
//you can rewatch this video
console.log(Math.PI);
console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

//you can make the object like this way

const myNewObject = Object.create(null);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//now if someone want to change it in future he will not be able to change

for (let [key, value] of Object.entries(chai)) {
  if (typeof value != "function") {
    console.log(`${key} : ${value}`);
  }
}

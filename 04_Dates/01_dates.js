// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);
// the above one is object

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

let myDated = new Date("10-13-2023");
console.log(myDated.toLocaleDateString());
//10/13/2023
console.log(myDated.toISOString());
//2023-10-12T18:30:00.000Z
console.log(myDated.toLocaleString());
//10/13/2023, 12:00:00 AM
console.log(myDated.getFullYear());
//2023
console.log(myDated.getHours());
console.log(myDated.getMonth());
console.log(myDated.getDay());

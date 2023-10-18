//Array loops

// for of in array
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, "shah zahid"];
for (let i of myArray) {
  console.log(i);
}

// we can use this loop on sttring as well
const greetings = "Assalamuaalikum Word";
for (let greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//Maps
//like array

const map = new Map();
map.set("Ka", "Kashmir");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("Ka", "Kashmir");
// the above one line is not going to get reflected as it is not getting the duplicate values
console.log(map);

for (const key of map) {
  console.log(key);
}
//when you are going to try to print the map using the for of loop ti will give you the key value pair values in
//array and it will make seprate array for each key value
//suppose if you have three key values and will output three array with the key value pair

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
//if you use the key and vale in the for [] it will give you the key value pair

const myObject = {
  Game1: "Nfs",
  Game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// } it will say you it is not going to be iterative

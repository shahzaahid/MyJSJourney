const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// here it will consider the array only one element here not the add the array to the previous one
//it is going to add it like it added the item

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
//so in the number there you will get the all elements but that is going to be consider only one

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
//This will show them all in individual vales

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// The above lines are going to give you all the individual values

const another_arry = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
const real_another_array = another_arry.flat(Infinity);
console.log(real_another_array);
//this is going to use when you have too many sub arrays and you want to store them into the one array

console.log(Array.isArray("Shah Zahid Kirmani"));
//this will tell you is this a array
console.log(Array.from("shah zahid kirmani"));
//The above method will make the string array

console.log(Array.from({ name: "zahid" })); //interesting
//here it will return the empty bracket

let score1 = 100;
let score2 = 200;
let score3 = 300;

const number_array = Array.of(score1, score2, score3);
console.log(number_array);
//from this method I am able to make the array of individual variables

const phrase = "The morning is up on us";
console.log(phrase.slice(4));
//Answer: morning is up on us

console.log(phrase.length);
// The above one is going to give the length of the string

console.log(phrase.slice(24));
//It is out of bond the result will be bank

console.log(phrase.slice(-5));
//Answer: on use in the back side it gives the index with -1

//now lets try with two parameters
console.log(phrase.slice(4, 10));
// it goes from the index 4 tp 9

console.log(phrase.slice(10, 8));
//it will give you the blank because 10 is greater than 8

console.log(phrase.slice(10, 30));
//althouth it is much greater than the string lenth but it will return upto 23 only

//now with minus
console.log(phrase.slice(-5));
console.log(phrase.slice(-23, -1));
//it will go from the beggining to the end
console.log(phrase.slice(-5, 8));
//it will give the blank from -5 there is no 8
console.log(phrase.slice(8 - 1));

//now with substring
// the main difference slice and subsrings

//phrase
//1 value with - is alwasy considered 0
//it does swapping automatically

console.log(phrase.substring(3, 0));
//here is the thing it put the 0 to the starting and 3 to the last

console.log(phrase.substring(-5, 10));
//it will start from the 0 to 10
console.log(phrase.substring(-5, -8));
//I have confusion wit the above one it should retun the T instead of blank string
console.log(phrase.substring(-5));
//The above one it considered from zero

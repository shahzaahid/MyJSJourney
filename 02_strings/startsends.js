let phrase = "Books are the best for the reading";
console.log(phrase.startsWith("Books"));
//the above line is going to display true as it begins with Books
console.log(phrase.startsWith("Books", 1));
//This will return the false as it is going to check from the inde of one
console.log(phrase.startsWith(" "));
//This is going to disaply flase

//Now lets talk about ends with
console.log("---------------------------\n");
console.log(phrase.endsWith("reading"));
console.log(phrase.length);
console.log(phrase.endsWith("books, 33"));
//it is going to return fase as it is going to check upto 33 it is not going to check the 34 index the default length is the length of the string

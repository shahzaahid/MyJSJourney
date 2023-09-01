// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 >= 2);
// console.log(1 <= 2);
// console.log(1 != 2);

//lets do the check with strings
console.log("1" > 2);
console.log("2" < 2);
console.log(2 < "2");
console.log(2 > "3");
// lets check with the null
console.log("------------------------------------------------\n\n");
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0); // here >= this will make the null 0
console.log(null <= 0); //same is the case here
// lets check with undefined

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);

//strict chek
console.log("2" === 1);

/*
The output of the program will be `false`.

In this comparison:

- `"2"` is a string containing the character "2."
- `1` is a numeric value.

Using the strict equality operator `===`, JavaScript compares values of the same type. Since `"2"` is a string, and `1` is a number, they are of different types, so the comparison evaluates to `false`.
*/

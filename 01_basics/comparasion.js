// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 >= 2);
// console.log(1 <= 2);
// console.log(1 != 2);

//lets do the check with strings
console.log("1" > 2);
console.log("2" < 2);
console.log(2 < "2");
console.log(4 > "3");

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

/* 
  When comparing `undefined` with numeric values using comparison operators, JavaScript's behavior is different from that of `null`. Here's the output for the comparisons:

```javascript
console.log(undefined > 0);     // Outputs: false
console.log(undefined < 0);     // Outputs: false
console.log(undefined >= 0);    // Outputs: false
```

- `undefined > 0`: In this comparison, `undefined` is not automatically converted to a specific value like `null`. Instead, when you compare `undefined` to a number, JavaScript treats it as "Not-a-Number" (NaN), which is a special numeric value representing an unrepresentable or undefined value. Comparing `NaN` to any number, including 0, results in `false`.

- `undefined < 0`: Similarly, this comparison also involves `undefined` treated as `NaN`, so it evaluates to `false`.

- `undefined >= 0`: The greater than or equal operator (`>=`) checks if `undefined` is greater than or equal to 0. In this case, it returns `false` because `NaN` is not greater than or equal to any number.

In general, when working with `undefined` in numeric comparisons, you'll typically get `false` results because `undefined` is treated as `NaN`, and comparisons with `NaN` usually evaluate to `false`.
*/

//strict chek
console.log("2" === 1);

/*
The output of the program will be `false`.

In this comparison:

- `"2"` is a string containing the character "2."
- `1` is a numeric value.

Using the strict equality operator `===`, JavaScript compares values of the same type. Since `"2"` is a string, and `1` is a number, they are of different types, so the comparison evaluates to `false`.
*/

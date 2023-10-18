//Nullish coalescing operator(??): null operator

let val1;
val1 = 5 ?? 10;
console.log(val1);
//5
val1 = null ?? 10;
console.log(val1);
//10 it is checking the sefty
val1 = undefined ?? 15;
console.log(val1);
//15
val1 = null ?? 10 ?? 20;
console.log(val1);

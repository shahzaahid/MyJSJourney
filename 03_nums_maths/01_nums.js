const score = 300;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(typeof balance); // object

//Methods of string
console.log(balance.toString().length);
console.log(balance.toFixed(3));
// how much precesion you are going to give to the client

const otherNumber = 123.8966;
//Number methods
console.log(otherNumber.toPrecision(4));

const humdreds = 1000000;
console.log(humdreds.toLocaleString());
// the above method is used to see the number slice wise
// The method is India USA standward  wise
console.log(humdreds.toLocaleString("en-In"));
// The method is India Inian standward  wise

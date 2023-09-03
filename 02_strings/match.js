let phrase = "This is the coding  coding coding ";
console.log(phrase.match("coding"));
console.log(phrase.match(/coding/g));
console.log(phrase.match(/coding/gi));
console.log(phrase.matchAll("coding"));

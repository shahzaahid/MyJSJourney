let phrase = "This is the coding challange";
console.log(phrase.replace("coding", "Coding"));
//Answer: This is the Coding challange
phrase = "This is the Coding  Coding challange";
console.log(
  phrase.replace("Coding", (match) => {
    return match.toLocaleLowerCase();
  })
);

console.log(phrase.replaceAll("Coding", "coding"));

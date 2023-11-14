## JavaScript Proptotype

- By default the javascript has the prototypal behaviour from upper it goes uper level until it does not find the null. this works this way
- This is also called the prototypal inheritance

- In arrow funtion we don't have the this keyword

## new Keyword

- here's what happens behind the scenes when the new keyword is used:

- A new object is created: The new keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. this means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The costructor function is called with the specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor.JavaScript assumes this

- object is always link to the prototype

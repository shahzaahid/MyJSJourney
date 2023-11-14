//this current execution contex

function setUsername(username) {
  //complex DB calls
  this.setUsername = username;
  console.log("got called");
}

function createUser(username, email, password) {
  setUsername(username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

// see the abve one has a problem it gets the call and  it gets out from the call stack
// and we are not seeing the username to slove this problem we have to use the special keyword
//called call
//I will solve the above problm in the next file the name will be 05_call2.js

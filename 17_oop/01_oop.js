const user = {
  username: "shah zahid",
  loginCount: 8,
  singnedIn: true,
  //above are called the properties

  getUserDetails: function () {
    // console.log("user details");
    console.log(this);
  },
};

console.log(user.username);
console.log(user["username"]);
console.log(user.getUserDetails());
console.log(this);

//current context
//week1 monday
//week2 monday
//week3 monday
//this is we use the this keyword

// function user(username, loginCount, isLoggedIn) {
//   (this.username = username),
//     (this.loginCount = loginCount),
//     (this.isLoggedIn = isLoggedIn);
//   return this;
// }
// new constructor fucntion  allow ehk obj mulptiple instance

const userOne = ("Zahid", 12, true);
console.log(userOne);

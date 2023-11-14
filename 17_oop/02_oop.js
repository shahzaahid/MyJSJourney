function User(username, loginCount, isLoggedIn) {
  this.username = username;
  //this.username = new username
  this.loginCount = loginCount;
  //this.username = new username
  this.isLoggedIn = isLoggedIn;
  return this;
}

const useOne = User("shah zahid", 12, true);
const UseTwo = User("ChaiAurCode", 13, true);
console.log(useOne);

//this is very importnt
// if you are not going to use the new keyword
//it will modify the existing values and it is not
//going to create the new values

//you have to use the user

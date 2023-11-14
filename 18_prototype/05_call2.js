function setUserName(userName) {
  this.userName = userName;
  console.log("it is getting the call ");
}

function createUser(userName, email, password) {
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}

const userOne = new createUser("Shah", "shahzaahid038@gmail.com", "11111");
console.log(userOne);

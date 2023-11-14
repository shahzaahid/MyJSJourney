//pro properties
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
const zahid = new User("Zahid");
console.log(zahid.createid());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "i@laptop.com");
iphone.logMe();

//now yo are using the createId() with the name of the zahid but sometimes you don' want use the obj which got initiated you can use static
// static stop access

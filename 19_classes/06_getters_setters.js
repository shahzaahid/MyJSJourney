//getters and setters using lthe class
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  set password(value) {
    this._password = value;
  }
  get password() {
    return this._password.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
  get email() {
    return this._email.toUpperCase();
  }
}

const zahid = new User("shahzaahid038@gmai.com", "ABC");
console.log(zahid.email);
console.log(zahid.password);

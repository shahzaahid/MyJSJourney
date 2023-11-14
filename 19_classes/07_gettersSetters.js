const User = {
  _email: "shahzaahid038@gmail.com",
  _password: "ABC",

  get email() {
    return this._email;
  },

  set email(value) {
    this_email = value;
  },
};
//Objec.create is called the factory function
const tea = Object.create(User);
console.log(tea.email);

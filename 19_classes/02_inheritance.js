class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME IS ${this.username}`);
  }
}
//sometimes you have to make this user teacher, admin, student

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "Chai@teacher.com", "123");
chai.addCourse();

const masalachai = new User("masalaChai");

masalachai.logMe();
chai.logMe();

console.log(chai instanceof Teacher);
// true
console.log(chai instanceof User);
//true

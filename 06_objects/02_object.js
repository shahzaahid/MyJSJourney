// const tinderUser = new Object();
// console.log(tinderUser);
//the above two lines is  singleton or constructor
//{}

// const tinderUserTwo = {};
// console.log(tinderUserTwo);
//The above two lines is non singleton
{
}

const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//next objrct
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firsname: "shah zahid",
      lastname: "Kirmani",
    },
  },
};

//values access
// console.log(regularUser.fullname);
//here you acces the full object including the sub object
console.log(regularUser.fullname.userfullname.firsname);
console.log(regularUser.fullname.userfullname.lastname);

//combine objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//1 way to merge the object
const obj3 = { obj1, obj2 };
console.log(obj3);
//now same problem it will contain the same like the in array object in the object

//2 seond way to merge the object
const obj4 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2);
//the {} are optional the purpose is it will show as it is
console.log(obj4);

//3 Third way to mere the objects using spread operator
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

//Array of objects
const users = [
  {
    id: 1,
    email: "shahzaahid038@gmail.com",
  },
  {
    id: 2,
    email: "shahzaahidku@gmail.com",
  },
  {
    id: 3,
    email: "shahzaahidiust@mgmail.com",
  },
];
//access vales
console.log(users[0].email);
console.log(users[1].email);
console.log(users[2].email);

//acces the all keys of the objects
console.log(tinderUser);
//here you will get the entire object with all key value pair
console.log(Object.keys(tinderUser));
//here you will get all the keys in the array
console.log(Object.values(tinderUser));
//here you will get all the values
console.log(Object.entries(tinderUser));
//here you will all get the key vale in the big array like [['id', '12345'], ['name', 'sammy']etc]
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
//ture
console.log(tinderUser.hasOwnProperty("isLoggedin"));

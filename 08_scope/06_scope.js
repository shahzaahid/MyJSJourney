//Arrow functions

//This keyword refer the currernt object /current context refer karta hai

const user = {
  username: "shahzahid",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this);
  },
};
user.welcomeMessage();
//shahzahid, welcome to wesite
user.username = "sam"; //here we change the context kis bara mai hai
user.welcomeMessage();
//sam, welcome to website

// console.log(this); {} we don't have any global context that is why it is empty
//above line will be the empty object
//it is in the node environemnt
//in brower there is a global object called window

function chai() {
  let username = "shah zahid";
  // console.log(this.username);
  //can't use in the function
  console.log(this);
}
chai();
//when you display this inside the function you will get all the vales

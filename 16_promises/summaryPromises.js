//Senerio 01.
const promiseOne = new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("Asyc one");
    reslove();
  }, 2000);
});
promiseOne.then(function () {
  console.log("Promise one is resolved");
});

//senerio 02.
const promiseTwo = new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("Asyc Two");
    reslove();
  }, 2000);
}).then(function () {
  console.log("Promise two is resolved");
});

//senerio03
const promiseThree = new Promise(function (reslove, reject) {
  setTimeout(function () {
    console.log("Asyc three");
    reslove({
      name: "shah zahid",
      email: "shahzaahid038@gmail.com",
    });
  }, 2000);
})
  .then(function (user) {
    console.log(user);
    return user.name;
  })
  .then(function (name) {
    console.log(name);
    console.log("---------------------------------\n");
  });

//04 sernerio
const promiseFour = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      reslove({
        name: "Kirmani Zahid",
        email: "shahzaahidku@gmail.com",
      });
    } else {
      reject("There has been an error");
    }
  }, 2000);
})
  .then(function (obj) {
    console.log(obj);
    return obj.name;
  })
  .then(function (name) {
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("this is the finally block");
  });

// senerio 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        name: "Shah zahid",
        email: "shahzaahiust@gmail.com",
      });
    } else {
      reject("this one is related to the error\n\n");
    }
  }, 2000);
});

async function promiseFiveExecute() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

promiseFiveExecute();

async function consumeAPI() {
  const url = "https://api.github.com/users/shahzaahid";
  const response = await fetch(url);
  console.log(response);
}
consumeAPI();

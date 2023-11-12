const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;
    if (!error) {
      resolve({
        name: "shah Zahid",
        email: "shahzaahid038@gmail.com",
      });
    } else reject("This is the error message ERROR ");
  });
}, 1000)
  .then(function (user) {
    console.log(user);
    return user.email;
  })
  .then((email) => {
    console.log(email);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });

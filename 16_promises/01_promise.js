//Most of the times you consume the promises example
//Creation of promises

/* This is the definition of the fetch()
The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

Error is only going to occur when there is not be able to make the request

you can read the full article on fetch() 
https://developer.mozilla.org/en-US/docs/Web/API/fetch
*/

const onePromise = new Promise(function (resolve, rejecct) {
  //Do an sync task
  //DB calls, cryptography, nework
  setTimeout(function () {
    console.log("Async tas is complete");
    resolve();
  }, 1000);
});

//now you can consume this promise
onePromise.then(function () {
  console.log("Promise consumed\n");
});
//onePromise.then() this has the realtion with the resolve what every that funtions does it returns in the then

//second way to do the create the promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async tas is completed");
});

//thrid promise
const promiseThree = new Promise(function (reslove, reject) {
  setTimeout(function () {}, 1000);
  reslove({
    username: "shah zahid",
    email: "shahzaahid038@gmail.com",
  });
});
promiseThree.then(function (user) {
  console.log(user);
  console.log("\n\n\n");
});
//reslove is directly connecte dot the then

//fourth way to create the promise

const promiseFive = new Promise(function (reslove, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      reslove({
        name: "zahid kirmani",
        email: "shahzaahidku@gmail.com",
      });
    } else reject("There is the problem with the js error");
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
//async can't handle erros direclty

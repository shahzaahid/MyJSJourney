//Following are the two way to fetch the data from the url using async function
//Example are below
//You can check there output as well

async function consumeAPI() {
  const url = "https://api.github.com/users/shahzaahid";
  let response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.followers);
}
consumeAPI();

async function consumeAPISecond() {
  const url = "https://api.github.com/users/hiteshchoudhary";
  try {
    let response = await fetch(url);
    const data = await response.json();
    console.log(data.followers);
  } catch (error) {
    console.log(`There is an error the error is ${error}`);
  }
}
consumeAPISecond();

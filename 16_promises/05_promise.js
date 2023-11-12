//get the data from the url using the fetch method
const url = "https://api.github.com/users/hiteshchoudhary";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
    return obj.followers;
  })
  .then(function (followers) {
    console.log(followers);
  })
  .catch(function (error) {
    console.log("there is an erro while fetching the data");
  });

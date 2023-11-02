const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const text = document.querySelector("h1");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
      text.innerHTML = `Color Scheme Switcher (${e.target.id})`;
    } else if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
      text.innerHTML = `Color Scheme Switcher (${e.target.id})`;
    } else if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
      text.innerHTML = `Color Scheme Switcher (${e.target.id})`;
    } else if (e.target.id == "orange") {
      body.style.backgroundColor = e.target.id;
      text.innerHTML = `Color Scheme Switcher (${e.target.id})`;
    } else if (e.target.id == "white") {
      body.style.backgroundColor = "white";
      text.innerHTML = `Color Scheme Switcher (${e.target.id})`;
    } else {
      body.style.backgroundColor = "purple";
      text.innerHTML = `Color Scheme Switcher (purple)`;
    }
  });
});

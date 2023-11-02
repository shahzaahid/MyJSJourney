const clock = document.querySelector("#clock");
setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//document.getElementsByClassName('clock');
//const store = document.getElementById('clock');
//const store = document.querySelector("#clock");

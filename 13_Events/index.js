//01 First Approach

//onclick="alert('own')"

//02 Second approach
const photoshop = document.getElementById("photoshop");
photoshop.onclick = function () {
  alert("this is the picture of photoshop");
};
//document.getElementById("photoshop").onclick = function(){ alert("this is the photoshop")}

//onclick = less information

//03 Third Approach
document.getElementById("japan").addEventListener(
  "click",
  function (e) {
    console.log(e);
    // alert("This is the picture of japan");
  },
  false
);
//mostly You get the browser events and the Environment events
//Environment events where I click the mouse kounsi postion which one was view

//addEventLisgener can listen a lots of events like mouse events, keyword events, drag and drop events
//in the addEventListener the third parameter is by default false
//fasle true in some applications are necessary

//You can use this attachEvent early time was used
//JQuery - onEvent

//events you should study
//1. type, timestamp, defaultPrevented, target, toElement srcElement, currentTarget, clientX, clientY, screenX, screenY,
//altKey, ctrlKey, shifKey, keyCode

//Now what is the event propagration
//01 It has one event bubbling dearult false  bubbling means from bottom to bottom ---------------> top
//in the below example the first the bottom one will get execute then the top one will get execute
//02 Event Caputuaring this one is from top to bottom
//means first top will get execute then last one top ------------> bottom

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("owl clicked");
    e.stopPropagation(); // this will not execute the first one form the top one I mean
  },
  false
);

document.getElementById("google").addEventListener("click", function (e) {
  e.preventDefault(); //used to not go to the site
  e.stopPropagation(); //if you don't want to bubbling
  console.log("google clicked");
});

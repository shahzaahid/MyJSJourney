//this is the first way to create the promise
const promieOne = new Promise(function(reslove, reject){
  setTimeout(function(){
    console.log("This is the promise in Prome")
  },1000)
  reslove();
})
promiseOne.then(function(){
  console.log("This is the prone one completed")
})
// This is the second way to create the promise
new Promise(function(reslove, reject){
  setTimeout(function(){
    console.log("This is the second promise")
  }, 1000)
  reslove();
}).then(function(){
  console.log("The second promise is completed now ")
})

//!closure
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
  //ALL THE SCOPE WILL GET RETURN
}

const myFunc = makeFunc();
myFunc();

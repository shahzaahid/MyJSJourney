//true // false
//assume ture //assume false

const userEmail = " ";

if (userEmail) {
  // here I assume in stirng value true if not
  console.log("Got user email");
} else {
  console.log("Don't have user eamil");
}

//empty array true
//empty string false

//Falsy values
//1 false, 0, -0, BigInt 0n-> falsy null, undefined, Nan, ""
//everything accept the above one is truthy
//truthy values
//1 "0", 'false', " ", [], {}, function() {}-> empty function

//usermail = [1, 2,3 3]
//check the array if(useremail.lenth === 0)

//objcet const  emptyobj = {}
//if(Object.keys(emptyObj). length ===0)
//console.log("object empty ")

//false == 0  -> true
//false == "" -> true
//0 =="" true

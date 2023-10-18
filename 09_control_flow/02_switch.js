const month = 3;

switch (month) {
  case 1:
    //if monthe contain = "march" then you can write case "jan":
    console.log("January");
    break;
  case 2:
    console.log("Febuary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("default cawse match");
    break;
}

// If there is no break statement added before the default case, default will also be executed. In this example, the default case was not executed because the break keyword was used before it.

//true // false
//assume ture //assume false

let num1 = 12;
let num2 = 22;

// num1 > num2
//   ? console.log("1 larger")
//   : num1 < num2
//   ? console.log("2 larger")
//   : console.log("equal");

switch (true) {
  case num1 > num2:
    console.log("1 larger");
    break;
  case num1 < num2:
    console.log("2 larger");
    break;
  default:
    console.log("Equal");
}

// switch parameter and case value should be equivalent

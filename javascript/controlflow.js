// var greeting = "good morning";

// if (greeting == "good morning") {
//   return console.log(true);
// } else {
//   return console.log(false);
// }

// function print() {
//   let x = 10,
//     y = 20;

//   if (x == y) {
//     console.log("x is equal to y");
//   } else if (x != y) {
//     console.log("x is not equal to y");
//   }

//   print()
// }

let age = 18;
if (age >= 18) {
  console.log("person is eligible for voting");
} else if (age < 18) {
  console.log("person is not eligible for voting");
} else if ((age = 18 && age < 21)) {
  console.log("person can enrol for voting");
}

//nested condition
let state = "CA";

// if (state == "CA") {
//   if (age > 17) {
//     console.log("person can drive ");
//   }
// }

if (state == "CA" && age > 17) {
  console.log("person can drive ");
}

let browser = "Chrome";

switch (browser) {
  case "Chrome":
    console.log("execute scripts on chrome browser");
    break;
  case "FF":
    console.log("execute scripts on FF browser");
    break;
  case "MSEdge":
    console.log("execute scripts on MSEdge browser");
    break;
  default:
    console.log("execute scripts on Safari browser");
    break;
}

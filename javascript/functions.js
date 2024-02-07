// function userLogin() {
//   // logic
//   console.log("enter username");
//   console.log("enter password");
//   console.log("click login");
// }

// userLogin();

const User = {
  firstName: "John",
  lastName: "Doe",

  getUserinfo: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(User.getUserinfo());

function userLogin(username, password) {
  // parameters
  return console.log(
    "user successfully logged in with given credentials: " +
      username +
      " " +
      password
  );
}

userLogin("Admin", "admin123");

// arrows keys function
const count = (a, b) => {
  return console.log(a + b);
};

count(10, 20);

let add = (x, y) => x + y; // es6 module

console.log(add(10, 20));

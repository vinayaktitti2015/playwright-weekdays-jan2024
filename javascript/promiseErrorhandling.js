function getUserById(id) {
  if (typeof id !== "number" || id < 0) {
    throw new Error("id is not a number");
  }

  return new Promise((resolve, reject) => {
    resolve({
      id: id,
      username: "Admin",
    });
  });
}

try {
  getUserById("thousand").then((user) => console.log(user.username));
} catch (error) {
  console.log(`Caught by try/catch error: ${error}`); // try/catch error
}

// try/catch error

try {
  let result = add(10, 20);
  console.log(result);
} catch (error) {
  console.log({ name: error.name, message: error.message }); // try/catch error
}

// try/catch/finally

let result = 0;
try {
  result = add(50, 50);
} catch (error) {
  console.log({ name: error.name, message: error.message }); //
} finally {
  console.log("execute final block of code");
  console.log({ result: result });

  console.log("logout of application");
  console.log("db connection closed");
}

// throw keyword for custom exceptions
function add(x, y) {
  if (typeof x != "number") {
    throw new "x is not a number and stop the execution"();
  }

  if (typeof y != "number") {
    throw new "y is not a number"();
  }

  return console.log(x + y);
}

function substract(x, y) {

}

add("10", 20)
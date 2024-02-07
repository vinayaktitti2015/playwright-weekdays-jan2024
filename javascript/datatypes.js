/**
 * var
 * const - ES6 module
 * let - ES6 module
 */

const firstName = "Saileela";
const lastName = "";
const email = "saileela@gmail.com";
const phone = 9123232322;

let price = "1000 USD";

const bool = true;
const elementExist = false;
const homeButtonExist = true;

const nul = null;
const iphone16 = undefined;

const Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "London",
  country: "United Kingdom",
  address: "123 Main St",
};

// console.log(
//   "Person details are " +
//     Person.firstName +
//     " " +
//     Person.lastName +
//     " " +
//     Person.age +
//     " " +
//     Person.city +
//     " " +
//     Person.country
// );

let message;

message = "Good Morning!";

var day, month, year;

day = "Tuesday";
month = "January";
year = 2024;

let message2 = "good afternoon!",
  count = 2,
  total = 100;
message2 = 10;
message2 = "Good night!";

console.log(message2);

let greet;
console.log(greet);

// const means fixed value
const workday = 5;

// workday = 10;
// console.log(workday);

/**
 * const to store fixed values
 * arrays
 * objects
 * block scope
 * redeclare values
 * cannot hoist values
 *
 */

let counter = 120;
console.log(typeof counter);
counter = false;
console.log(typeof counter);
counter = "hello world";
console.log(typeof counter);

// JS is dynamically typed language
let price1 = 1000;
let price2 = 2000.0;

// Number.MAX_VALUE

/**
 * TypeError
 * Undefined
 * Arthematic error
 * Assertion errors
 * Reference errors
 *
 */

console.log("a" / 2); // NaN

greet = "hello";
console.log(Boolean(greet));
console.log(Boolean({ foo: 100 }));

let hugeNumber = 903434345454533353n;
console.log(typeof hugeNumber);

let contact = {
  firstName: "John",
  lastName: "Doe",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
    postcode: {
      pc1: 100,
      pc2: 200,
      pc3: 300,
    },
  },
};

console.log(contact.address.postcode.pc1);




// const promise = new Promise((resolve, reject) => {
//   if (success) {
//     resolve(success);
//   } else {
//     reject(error);
//   }
// });

function getNumberType(currency) {
  return new Promise(function (resolve, reject) {
    if (typeof currency != 'number') {
      reject(new Error("Invalid currency"));
    } else  {
      resolve(currency);
    }
  });
}

getNumberType(2000).then((value) => {
  console.log("print the status", value);
});

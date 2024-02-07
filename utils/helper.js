const waitFor = () => {
  console.log("wait for few secs");
};

const click = () => {
  console.log("click element");
};

const type = () => {
  console.log("input data");
};

export const getSystemDate = () => {
  console.log("get system date");

  var today = new Date();
  var todayDate = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  console.log(new Date());

  return console.log(`system date: ${todayDate}/${month}/${year}`);
};

export { waitFor, click, type };

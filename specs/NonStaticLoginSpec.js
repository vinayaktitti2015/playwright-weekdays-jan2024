import LoginPage from "../javascript/loginClass.js";
//import { waitFor, click, type } from "../javascript/utils";

function loginTests() {
  const login = new LoginPage();

  login.userSignup();
  login.userLogin();
  login.userLogout();
}
function buyProduct() {
    // write the code here
}

function addToCart() {

}

loginTests();

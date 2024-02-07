import LoginPage from "../javascript/staticMethods.js";
//import { waitFor, click, type } from "../javascript/utils";

function loginTests() {
  LoginPage.userSignup();
  LoginPage.userLogin();
  LoginPage.userLogout()
}

loginTests()



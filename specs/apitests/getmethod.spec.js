import { test, expect } from "@playwright/test";
import "dotenv/config";
test("should fetch the data from the server", async ({ request }) => {
  const response = await request.get(process.env.IG_BASEURL + "/api/users/2", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(200);

  const JSONResponse = await response.json();
  expect(JSONResponse.data.email).toEqual("janet.weaver@reqres.in");
  expect(JSONResponse.data.first_name).toEqual("Janet");

  expect(JSONResponse.data.email).toMatch(/[A-Za-z0-9]/i)
  expect(JSONResponse.data.first_name).toMatch(/[A-Za-z]/i)

  if (API_BASEURL == "facebook") {

  } else if(API_BASEURL == "twitter") {
    
  }
});

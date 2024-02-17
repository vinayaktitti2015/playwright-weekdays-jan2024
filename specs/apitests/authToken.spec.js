import { test, expect } from "@playwright/test";
import { fs } from "fs";
test("register user and fetch token", async ({ request }) => {
  const response = await request.post(
    process.env.API_BASEURL + "/api/register",
    {
      data: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    }
  );

  const JSONResponse = await response.json();
  const token = JSONResponse.token;
  console.log("token created: " + token);

  fs.writeFile("./testdata/token.json", { token: token }, function (err, data) {
    if (err) throw err;

    console.log("token created: " + JSON.stringify(data));
    
  });
});

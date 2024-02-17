import { test, expect } from "@playwright/test";
import { request } from "http";

test("should create a record in the database", async ({ request }) => {
  const response = await request.post(
    process.env.API_BASEURL + process.env.CREATE_RECORD,
    {
      data: {
        name: "morpheus",
        job: "leader",
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer jsssdsdj343434333sd"
      },
    }
  );

  const JSONResponse = await response.json();
  expect(response.status()).toBe(201);

  expect(JSONResponse.name).toEqual("morpheus");
  expect(JSONResponse.job).toEqual("leader");

  expect(JSONResponse.id).toMatch(/[0-9]/);
  expect(JSONResponse.createdAt).toMatch(/[A-Za-z0-9.:-]/);
});

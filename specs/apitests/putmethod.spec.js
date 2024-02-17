import { test, expect } from "@playwright/test";
import { request } from "http";

test("should create a record in the database", async ({ request }) => {
  const response = await request.put(
    process.env.API_BASEURL + process.env.UPDATED_RECORD,
    {
      data: {
        name: "morpheus",
        job: "SDET",
      },
      
    }
  );

  const JSONResponse = await response.json();
  expect(response.status()).toBe(200);

  expect(JSONResponse.name).toEqual("morpheus");
  expect(JSONResponse.job).toEqual("SDET");

  expect(JSONResponse.updatedAt).toMatch(/[A-Za-z0-9.:-]/);
});

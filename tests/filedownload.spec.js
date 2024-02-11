import { test, expect } from "@playwright/test";
import fs from "fs";

test("should download file", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/download");

  // promise download
  const downloadPromise = page.waitForEvent("download");
  await page.getByText("some-file.txt").click();
  const download = await downloadPromise;

  const fileName = download.suggestedFilename();
  await download.saveAs("./downloads/" + fileName);

  const filePath = "./downloads/" + fileName;

  // switch to file systems
  fs.readFile(filePath, (err, data) => {
    // es6 module
    if (err) {
      throw err;
    }

    console.log(data.toString());
  });

  fs.unlink(filePath, (err) => {
    if (err) {
      throw err;
    }

    expect(fs.existsSync(filePath)).toBeFalsy();
  });
});

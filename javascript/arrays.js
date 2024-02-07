const Tools = ["selenium", "cypress", "playwright", "mabl", "protractor"];
const prices = [800, 900, 1000, 1100, 1200];
const mixedArray = ["Selenium", 1, "cypress", 2, "playwright", 3, "mabl", 4];

console.log(Tools[2])

Tools.forEach((value) => {
    if(value == "playwright") {
        console.log("Execute Playwright tests");
        // break;
    }
})

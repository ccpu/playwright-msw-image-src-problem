import bodyParser from "body-parser";
import express from "express";
// import playwright from "playwright";

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/screenshot", async (req: any, res: any) => {
//   const browser = await playwright.chromium.launch();

//   const page = await browser.newPage();
//   await page.goto(`http://192.168.1.120:3000/?playwright=true`);
//   await page.waitForTimeout(200);
//   const buffer = await page.screenshot();
//   const base64 = buffer.toString("base64");
//   page.on("console", (c) => {
//     console.log(c.text());
//   });
//   res.send({ base64 });
// });

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

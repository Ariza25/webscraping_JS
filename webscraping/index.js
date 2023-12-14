const pup = require("puppeteer");
const fs = require("fs");

const url = "https://www.mercadolivre.com.br";
const searchFor = "macbook";

let c = 1;
let objArray = []; // Define an array to store the objects

(async () => {
  const browser = await pup.launch({ headless: false});
  const page = await browser.newPage();
  await page.setViewport({ width: 1580, height: 1024 });
  console.log("iniciado");

  await page.goto(url);
  console.log("url acessada");

  await page.waitForSelector("#cb1-edit"); //só digita após carregar a página

  await page.type("#cb1-edit", searchFor); //vai ser digitado "macbook"

  await Promise.all([
    page.waitForNavigation(),
    page.click(".nav-search-btn"), //clique no botão de pesquisar
  ]);

  const links = await page.$$eval(".ui-search-link__title-card", (el) =>
    el.map((link) => link.href)
  );
  for (const link of links) {
    if (c === 10) continue;

    console.log("Página", c);
    await page.goto(link);

    const title = await page.$eval(".ui-pdp-title", (element) => element.innerText);
    const price = await page.$eval(".andes-money-amount__fraction", (element) => element.innerText);
    const seller = await page.evaluate(() => {
      const el = document.querySelector(".ui-pdp-seller__link-trigger");
      if (!el) return null;
      return el.innerText;
    });

    const obj = {
      title,
      price,
      seller,
      link,
    };

    objArray.push(obj); // Push the object to the array

    console.log(obj);

    c++;
  }

  await page.waitForTimeout(5000);
  await browser.close();

  fs.writeFile("data.json", JSON.stringify(objArray), (err) => {
    if (err) throw err;
    console.log("sucessfully saved JSON");
  });
})();

const puppeteer = require('puppeteer');
const my_module = require('./myModule');

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage({
    waitUntil: 'domcontentloaded'
  });
  //youtube 紳士向け MMD
  await page.goto('https://www.youtube.com/results?search_query=%E7%B4%B3%E5%A3%AB%E5%90%91%E3%81%91+MMD&sp=EgIIAg%253D%253D');

  let items = await page.$$('.text-wrapper');
  let dates = await my_module.createDates(items);

  console.log(dates);

  await browser.close();
})();

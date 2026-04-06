import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(`
    <html>
      <body style="margin: 0; padding: 0; background-color: #000; font-family: sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 1200px; height: 630px;">
        <div style="font-size: 64px; font-weight: bold; color: white; margin-bottom: 20px; text-align: center;">
          Joshua Canterbury | Software Engineer
        </div>
        <div style="font-size: 40px; color: #aaa; text-align: center;">
          Node.js & React Developer
        </div>
      </body>
    </html>
  `);
  await page.screenshot({ path: 'public/images/og-image.png' });
  await browser.close();
  console.log('Successfully generated public/images/og-image.png');
})();

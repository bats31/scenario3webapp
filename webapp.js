const http = require("http");
const puppeteer = require("puppeteer");

//const host = 'https://lbbawebtest1.azurewebsites.net';
const port = process.env.PORT || 800;
 
 
http.createServer(function (req, res) {
 
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close()


  // HTTP response header - the content will be HTML MIME type
  res.writeHead(200, { 'Content-Type': "text/html" });
  // Write out the HTTP response body
  res.write("@@STR@@");
 
  // End of HTTP response
  res.end();
 
}).listen(port);

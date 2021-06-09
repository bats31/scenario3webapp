const http = require("http");

//const host = 'https://lbbawebtest1.azurewebsites.net';
const port = process.env.PORT || 800;
 
 
http.createServer(function (req, res) {

  // HTTP response header - the content will be HTML MIME type
  res.writeHead(200, { 'Content-Type': "text/html" });
  // Write out the HTTP response body
  res.write("@@TEST@@");
 
  // End of HTTP response
  res.end();
 
}).listen(port);

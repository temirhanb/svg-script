const http = require('http');
const open = require('open');
const fs = require('fs');
fs.readFile('index.html', function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function (request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(8000);
});

(async () => {
  await open('index.html', {"wait": true });
})();

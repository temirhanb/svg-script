const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3006;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  // res.sendFile(path.join(__dirname + '/form.html'));
});
app.use("/src", express.static('./src'));
app.use("/", express.static('./'));

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));

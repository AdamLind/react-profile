const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})
app.listen(port, () => console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env));

console.log("server started");
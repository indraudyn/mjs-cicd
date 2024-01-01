var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('( "response": "Halo Semua!" )');
});

app.get("/will", function (req, res) {
  res.send('( "response": "Selamat Datang" )');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": "YESSSSSSSS MAUUUUUUUUUU" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;

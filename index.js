var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('( "response": "Halo SEMETON!" )');
});

app.get("/will", function (req, res) {
  res.send('( "response": "Selamat Tidur!" )');
});
app.get("/ready", function (req, res) {
    res.send('{ "response": "AKHIRNYA selesai" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;

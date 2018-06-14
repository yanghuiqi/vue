/**
 * Created by hasee on 2017/5/19.
 */
var express = require("express");
var app = express();

var appData = require("../data.json");
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get("/seller", function(req, res) {
  res.json({
    errno: 0,
    data: seller
  });
});

apiRoutes.get("/goods", function(req, res) {
  res.json({
    errno: 0,
    data: goods
  });
});

apiRoutes.get("/ratings", function(req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use("/api", apiRoutes);

app.listen(9991);
console.log("server run at  port :8080");

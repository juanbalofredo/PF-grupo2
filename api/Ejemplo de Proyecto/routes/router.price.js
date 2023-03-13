const { Router } = require('express')
const routerPrice = Router();
const { getPrice, postPrice } = require("../controllers/controller.price.js");


// routerPrice.get("/", getPrices);
routerPrice.post("/", postPrice);
routerPrice.get("/", getPrice);

module.exports = { routerPrice };
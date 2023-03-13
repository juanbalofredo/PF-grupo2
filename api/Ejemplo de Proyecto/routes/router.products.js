const { Router } = require('express')
const routerProducts = Router();
const { getProducts, postProducts } = require("../controllers/controller.products.js");


// routerPrice.get("/", getPrices);
routerProducts.post("/", postProducts);
routerProducts.get("/", getProducts);

module.exports = { routerProducts };
const { Router } = require('express')
const routerSmarket = Router();
const { getSmarket, postSmarket } = require('../controllers/controller.smarket.js');


// routerPrice.get("/", getPrices);
routerSmarket.post("/", postSmarket);
routerSmarket.get("/", getSmarket);

module.exports = { routerSmarket };
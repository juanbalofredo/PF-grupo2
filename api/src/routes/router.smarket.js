import { Router } from 'express';
import { getSmarket, postSmarket } from'../controllers/controller.smarket.js';

const routerSmarket = Router();

// routerPrice.get("/", getPrices);
routerSmarket.post("/", postSmarket);
routerSmarket.get("/", getSmarket);

export default routerSmarket;
import { Router } from 'express'
const routerProducts = Router();
import { getProducts, postProducts, getProductId, getByName, getByCategory, getByBrand } from "../controllers/controller.products.js";


routerProducts.post("/", postProducts);
routerProducts.get("/", getProducts);
routerProducts.get("/id/:id", getProductId);
routerProducts.get("/name", getByName);
routerProducts.get("/category/:category/:brand/:order", getByCategory);
routerProducts.get("/brand/:brand/:order", getByBrand);

export default routerProducts;
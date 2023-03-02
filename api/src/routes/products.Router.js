import { Router } from "express";
// //importar los controller
import { getByName, getProductId, getProducts, getByCategory} from "../controllers/product.controller.js";


const products= Router();

products.get("/", getProducts);
products.get("/id/:id", getProductId);
products.get("/name=?", getByName);
products.get("/category/:category", getByCategory);


export default products;


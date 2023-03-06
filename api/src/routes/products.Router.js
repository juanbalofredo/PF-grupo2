import { Router } from "express";
// //importar los controller
import { getByName, getProductId, getProducts, getByCategory,getByBrand,getProductsAll} from "../controllers/product.controller.js";


const products= Router();

products.get("/", getProducts);
products.get("/all", getProductsAll);
products.get("/id/:id", getProductId);
products.get("/name=?", getByName);
products.get("/category/:category/:brand/:order", getByCategory);
products.get("/brand/:brand/:order", getByBrand);


export default products;


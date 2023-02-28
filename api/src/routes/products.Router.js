import { Router } from "express";
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
//importar los controller
console.log("s")

const products = Router();

products.get("/", /*aqui va el controller */)
products.get("/id/:id", /*aqui va el controller */)
products.get("/name?", /*aqui va el controller */)
products.get("/category", /*aqui va el controller */)

export default products;
=======
import { numberPage } from "../controllers/page.controller.js";
>>>>>>> Stashed changes
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


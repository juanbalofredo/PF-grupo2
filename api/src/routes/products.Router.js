import { Router } from "express";
// //importar los controller
import { getByName, getProductId, getProducts} from "../controllers/product.controller.js";


const products= Router();

products.get("/", getProducts);
products.get("/id/:id", getProductId);
products.get("/name=?", getByName);
// products.get("/category", /*aqui va el controller */)

export default products;


// app.get("/reviews", allProducts)
// app.get("/reviews/:id", allProducts)
// app.post("/reviews", allProducts)
// app.delete("/reviews/:id", allProducts)
// app.get("/supermarket", allProducts)
// app.get("/supermarket/:id", allProducts)
// app.put("/supermarket/:id", allProducts)
// app.delete("/supermarket/:id", allProducts)


// products.get("/id/:id", /*aqui va el controller */)

import { Router } from "express";
// //importar los controller
// console.log("s")
import allProducts from "../controllers/allProducts.js"
import ProductId from "../controllers/ProductId.js";


const products= Router();

products.get("/", allProducts);
products.get("/id/:id", ProductId);
// products.get("/name?", /*aqui va el controller */)
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

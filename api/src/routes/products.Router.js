import { Router } from "express";
// //importar los controller
// console.log("s")
import allProducts from "../controllers/allProducts.js"
import ProductId from "../controllers/ProductId.js";
import allUsers from "../controllers/allUsers.js";
import postUser from "../controllers/postUser.js"


const app = Router();

app.get("/products", allProducts)
app.get("/products/:id", ProductId)
app.get("/users", allUsers)


app.post("/users", postUser)


app.get("/users/:id", allProducts)
app.delete("/users/:id", allProducts)
app.get("/reviews", allProducts)
app.get("/reviews/:id", allProducts)
app.post("/reviews", allProducts)
app.delete("/reviews/:id", allProducts)
app.get("/supermarket", allProducts)
app.get("/supermarket/:id", allProducts)
app.put("/supermarket/:id", allProducts)
app.delete("/supermarket/:id", allProducts)


// products.get("/id/:id", /*aqui va el controller */)
// products.get("/name?", /*aqui va el controller */)
// products.get("/category", /*aqui va el controller */)

export default app;
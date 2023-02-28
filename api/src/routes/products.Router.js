import { Router } from "express";
//importar los controller

const products = Router();

products.get("/", /*aqui va el controller */)
products.get("/id/:id", /*aqui va el controller */)
products.get("/name?", /*aqui va el controller */)
products.get("/category", /*aqui va el controller */)

export default products;
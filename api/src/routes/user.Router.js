import { Router } from "express";
import postUser from "../controllers/postUser.js";
import { getById, getAllUsers } from "../controllers/users.controller.js";

const users = Router();

users.get("/", getAllUsers)
users.get("/id/:id", getById)
users.post("/postUsers", postUser)

//app.delete("/users/:id", allProducts)
//users.get("/email", funcion)

export default users;
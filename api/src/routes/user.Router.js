import { Router } from "express";
import allUsers from "../controllers/users.js";
import postUser from "../controllers/postUser.js";
import { getById } from "../controllers/users.js";

const users = Router();

users.get("/", allUsers)
users.get("/id/:id", getById)
users.post("/postUsers", postUser)

//app.delete("/users/:id", allProducts)

export default users;
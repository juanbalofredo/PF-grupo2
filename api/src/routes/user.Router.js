import { Router } from "express";
import allUsers from "../controllers/users.js";
import postUser from "../controllers/postUser.js";
import { getById } from "../controllers/users.js";

const users = Router();

users.get("/", allUsers)
users.post("/postUsers", postUser)
users.get("/id/:id", getById)

//app.delete("/users/:id", allProducts)

export default users;
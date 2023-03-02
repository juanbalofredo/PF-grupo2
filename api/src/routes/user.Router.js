import { Router } from "express";
import postUser from "../controllers/postUser.js";
import { getById, getAllUsers, getByEmail, deleteUser } from "../controllers/users.controller.js";

const users = Router();

users.get("/", getAllUsers);
users.get("/id/:id", getById);
users.get("/email/:email", getByEmail);

users.post("/postUsers", postUser);

users.delete("/deleteUser", deleteUser);
// users.put

//app.delete("/users/:id", allProducts)

export default users;
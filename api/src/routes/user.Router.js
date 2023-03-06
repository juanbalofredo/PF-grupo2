import { Router } from "express";
import postUser from "../controllers/postUser.js";
import { getById, getAllUsers, getByEmail, deleteUser, updateUser } from "../controllers/users.controller.js";

const users = Router();

users.get("/", getAllUsers);
users.get("/id/:id", getById);
users.get("/email", getByEmail);
users.post("/postUsers", postUser);
users.delete("/deleteUser", deleteUser);
users.put("/update", updateUser);

export default users;
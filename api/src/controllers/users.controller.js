import Users from "../models/users.js";
import { getUserById } from "../helpers/users.helper.js";


export async function getAllUsers(req, res) {
    const allUsers = await Users.findAll()
    if (allUsers.length == 0) return res.status(400).send("No existen usuarios")
    return res.status(200).json(allUsers)
}


export async function getById(req, res){
    const {id} = req.params;
    try{
        const response = await getUserById(id.toUpperCase());
        if(!response) return res.status(404).send("Not found 404");
        return res.status(200).json(response);
    } catch {
        return res.status(500).json({err: error.message}) };
    };
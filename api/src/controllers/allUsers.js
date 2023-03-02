import Users from "../models/users.js";



export default async function getAllUsers(req, res) {
    const allUsers = await Users.findAll()
    if (allUsers.length == 0) return res.status(400).send("No existen usuarios")
    return res.status(200).json(allUsers)
}
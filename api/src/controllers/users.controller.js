import Users from "../models/users.js";
import { getUserById, getUserByEmail, deleteUserById, updateUserByTypeAccount } from "../helpers/users.helper.js";

export async function getAllUsers(req, res) {
    const allUsers = await Users.findAll()
    if (allUsers.length == 0) return res.status(400).send("No existen usuarios")
    return res.status(200).json(allUsers)
}

export async function getById(req, res) {
    const { id } = req.params;
    try {
        const response = await getUserById(id.toUpperCase());
        if (!response) return res.status(404).send("Not found 404");
        return res.status(200).json(response);
    } catch {
        return res.status(500).json({ err: error.message })
    };
};

export async function getByEmail(req, res) {
    const { email } = req.params;
    try {
        const response = await getUserByEmail(email);
        if (!response) return res.status(400).send("this email is not registered");
        return res.status(200).json(response);
    } catch {
        return res.status(500).json({ err: error.message })
    };
};

export async function deleteUser(req, res) {
    const { id } = req.body;
    try {
        const deleteId = await deleteUserById(id)
        console.log("esto es deleteId ==>", deleteId)
        if (deleteId === 0) {
            throw Error("No se encontro ningun usuario con ese iD")
        }
        res.status(200).json("Se ha borrado el usuario exitosamente");
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
};

export async function updateUser(req, res) {
    // const { id } = req.params;
    const dataToUpdate = req.body;
    // console.log("esto es ==> dataToUpdate",dataToUpdate)
    try {
        const updatingUser = await updateUserByTypeAccount(dataToUpdate)
        console.log("esto es deleteId ==>", updatingUser)
        res.status(200).json("Se actualizo correctamente");
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}
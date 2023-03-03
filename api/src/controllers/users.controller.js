import Users from "../models/users.js";
import { getUserById, getUserByEmail, deleteUserById, updateUserByTypeAccount } from "../helpers/users.helper.js";

export async function getAllUsers(req, res) {
    const allUsers = await Users.findAll()
    if (allUsers.length == 0) return res.status(400).send("There are no users")
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
        if (deleteId === 0) {
            throw Error("No user found with that ID")
        }
        res.status(200).json("The user has been deleted successfully");
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
};

export async function updateUser(req, res) {
    // const { id } = req.params;
    const dataToUpdate = req.body;
    // console.log("esto es ==> dataToUpdate",dataToUpdate)
    try {
        await updateUserByTypeAccount(dataToUpdate)
        res.status(200).json("The user was successfully updated");
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
}
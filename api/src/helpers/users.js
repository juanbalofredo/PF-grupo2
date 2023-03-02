import Users from "../models/users.js";

export async function getUserById(id){
    const userById = await Users.findOne({
        where: {id}
    });
    return userById;
}
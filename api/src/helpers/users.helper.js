import Users from "../models/users.js";

export function getUserById(id) {
    const userById = Users.findOne({
        where: { id }
    });
    return userById;
}

export function getUserByEmail(email) {
    const userByEmail = Users.findOne({
        where: { email }
    });
    return userByEmail;
};

export function deleteUserById(id) {
    const userDelete = Users.destroy({ where: { id } })
    return userDelete;
};

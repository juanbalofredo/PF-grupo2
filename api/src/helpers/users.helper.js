import Users from "../models/users.js";

export function getUserById(id) {
    const userById = Users.findOne({
        where: { id }
    });
    return userById;
}

export function getUserByEmail(comparing) {
    const { email, password } = comparing;
    if (email && !password) {
        let userByEmail = Users.findOne({
            where: {
                email
            }
        });
        return userByEmail;
    }
    let userByEmail = Users.findOne({
        where: {
            email,
            password
        }
    });
    return userByEmail;
};

export function deleteUserById(id) {
    const userDelete = Users.destroy({ where: { id } })
    return userDelete;
};

export function updateUserByTypeAccount({ activity, email, name, last_name, password, avatar, type_account, notifications, id, type_account_logged }) {
    if (type_account_logged === "3") {
        let datas = { activity, email, name, last_name, password, avatar, type_account, notifications }
        const dataForChange = {}

        for (let key in datas) {
            if (datas[key] !== undefined) {
                dataForChange[key] = datas[key]
            }
        }
        let updatedAdmin = Users.update(
            dataForChange,
            { where: { id } }
        )
        return updatedAdmin;
    } else {
        let datas = { email, name, last_name, password, avatar, notifications }
        let dataForChange = {}
        for (let key in datas) {
            if (datas[key] !== undefined) {
                dataForChange[key] = datas[key]
            }
        }
        let updatedUser = Users.update(
            dataForChange,
            { where: { id } }
        )
        return updatedUser;
    }
}



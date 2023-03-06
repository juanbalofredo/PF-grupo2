import Users from "../models/users.js";

export function getUserById(id) {
    const userById = Users.findOne({
        where: { id }
    });
    return userById;
}

export async function getUserByEmail(comparing) {
    const { email, password } = comparing;
    console.log(email, password);
    let userByEmail = await Users.findOne({
        where: {
            email,
            password
        }
    });
    console.log(userByEmail)
    return userByEmail;
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



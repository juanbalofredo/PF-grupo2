import Users from "../models/users.js"

export default async function createUser({ hashgoogle, name, last_name, avatar, email, password, type_account, notifications, activity }) {
    // console.log("esto es hasgoogle",hashgoogle)
    let creatingUser;
    if (!last_name) {
        const fullName = name.split(" ");
        creatingUser = await Users.create({
            name: fullName[0],
            last_name: fullName[1],
            avatar,
            email,
            password,
            type_account,
            notifications,
            activity,
            hashgoogle
        })
    } else {
        creatingUser = await Users.create({
            name,
            last_name,
            avatar,
            email,
            password,
            type_account,
            notifications,
            activity,
            hashgoogle
        })
    }
    return creatingUser;
}
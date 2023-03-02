import Users from "../models/users.js"

export default async function createUser({ name, last_name, avatar, email, password, type_account, notifications, activity }) {

    await Users.create({
        name,
        last_name,
        avatar,
        email,
        password,
        type_account,
        notifications,
        activity
    })
    
}
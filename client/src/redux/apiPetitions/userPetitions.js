import axios from "axios";
import {
    oneUsers,
    changeTheme
} from "../slice/persistSlice";

import {
    allUsers,
    oneComment,
    loggedOut,
} from "../slice/globalSlice";

import { firebase, googleAuthProvider } from "../../views/Firebase/ConfigFirebase";

export async function logearse(input, dispatch) {
    try {
        dispatch(oneUsers(input))
    } catch (error) {
        return error.response;
    }
}
export function changeColor(dispatch) {
    dispatch(changeTheme)
}

export async function logOut(dispatch) {
    try {
        dispatch(loggedOut())
    } catch (error) {
        return error.response;
    }
}
export async function crearUser(input) {
    if (input.avatar.length < 5) {
        input.avatar =
            "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677690070/v55uvjjvoopg3pgmitz2.webp";
    }
    try {
        const user = await axios.post("http://localhost:3001/user/postUsers", {
            name: input.name,
            avatar: input.avatar,
            email: input.email,
            last_name: input.last_name,
            password: input.password,
            type_account: "1",
        }).then(e => {
        })
    } catch (error) {
        return error.message;
    }
}
export async function getUsers(dispatch) {
    try {
        const pedir = axios.get("http://localhost:3001/user");
        dispatch(allUsers(pedir?.data));
    } catch (error) {
        return error.message;
    }
}
export async function getUserByEmail(email, password) {
    try {
        const user = await axios({
            method: 'post',
            url: "http://localhost:3001/user/email",
            data: { "email": email, "password": password }
        })
        return user
    } catch (error) {
        return error.message;
    }
}

export async function getUserSoloByEmail(email) {
    try {
        const user = await axios({
            method: 'post',
            url: "http://localhost:3001/user/soloemail",
            data: { "email": email }
        })
        return user
    } catch (error) {
        return error.message;
    }
}

export async function StartGoogleAuth(dispatch) {
    try {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                axios.post("http://localhost:3001/user/soloemail", {
                    name: user.displayName,
                    avatar: user.photoURL,
                    email: user.email,
                    hashgoogle: user.uid,
                    type_account: "1",
                })
                    .then(res => res)
                    .then(info => {
                        dispatch(oneUsers(info.data))
                        return info.data
                    })
            })
    } catch (error) {
        return error.response;
    }
}

export async function getComments(dispatch, id) {
    try {
        let response = axios.get(
            `http://localhost:3001/reviews/id/${id}`,
            dispatch
        );
        dispatch(oneComment(response?.data));
    } catch (error) {
        return error.message;
    }
}

export async function postComments(dispatch, id) {
    try {
        let json = await axios.post(
            `http://localhost:3001/reviews/id/${id}`,
            dispatch
        );
        return json;
    } catch (error) {
        console.log(error);
    }
}

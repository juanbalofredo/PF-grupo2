import axios from "axios";
import {
  allProducts,
  allUsers,
  LoginWithGoogle,
  oneComment,
} from "./slice";
import { firebase, googleAuthProvider } from "../views/Firebase/ConfigFirebase";

export async function getAllProducts(dispatch) {
  try {
    const peticion = await axios.get("http://localhost:3001/products");
    dispatch(allProducts(peticion?.data));
  } catch (error) {
    return error.response;
  }
}

export async function crearUser(dispacth, input) {
  if (input.avatar.lenght < 5) {
    input.avatar =
      "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677690070/v55uvjjvoopg3pgmitz2.webp";
  }
  try {
    return await axios.post("http://localhost:3001/user/postUsers", {
      name: input.name,
      avatar: input.avatar,
      email: input.email,
      last_name: input.last_name,
      password: input.password,
      type_account: "1",
    });
  } catch (error) {
    return error.message;
  }
}
//get usuarios
export async function getUsers(dispatch) {
  try {
    const pedir = axios.get("http://localhost:3001/user");
    dispatch(allUsers(pedir?.data));
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
        console.log(user);
        dispatch(LoginWithGoogle(user.displayName));
      });
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

export async function getProductId(dispatch, id) {
  try {
    let json = await axios.get(
      `http://localhost:3001/products/id/${id}`,
      dispatch
    );
    dispatch(oneComment(json?.data));
    return json;
  } catch (error) {
    console.log(error);
  }
}

// export async function getNameQuery(dispatch, getNameQuery) {
//   console.log(getNameQuery + "estas entrando?");
//   try {
//     let json = await axios.get(
//       `http://localhost:3001/products/name?name=${getNameQuery}`
//     );
//     dispatch(allProducts(json?.data));
//     return json;
//   } catch (error) {
//     console.log(error);
//   }
// }
export const getNameQuery = async (dispacth, name) => {
  try {
    const petition = await axios.get(
      `http://localhost:3001/products/name?name=${name}`
    );
    dispacth(allProducts(petition?.data));
  } catch (error) {
    return error.response;
  }
};
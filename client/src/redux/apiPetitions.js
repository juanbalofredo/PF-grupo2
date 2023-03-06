import axios from "axios";
import {
  allProducts,
  allUsers,
  LoginWithGoogle,
  oneComment,
  getName,
  filterCategory,
  oneUsers,
  resetFilter,
  nuevoDetail,
  productsGenerales,
  Category,
  Brand
} from "./slice";
import { firebase, googleAuthProvider } from "../views/Firebase/ConfigFirebase";

export async function getProductosGenerales(dispatch) {
  try {
    const peticion = await axios.get("http://localhost:3001/products");
    dispatch(productsGenerales(peticion?.data));
  } catch (error) {
    return error.response;
  }
}
export async function getnuevoDetail(laQuePaso,dispatch) {
  try {
    
    dispatch(nuevoDetail(laQuePaso));
  } catch (error) {
    return error.response;
  }
}
export async function getProductsAll(dispatch) {
  try {
    const peticion = await axios.get("http://localhost:3001/products/all");
    dispatch(allProducts(peticion?.data));
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

export async function getUsers(dispatch) {
  try {
    const pedir = axios.get("http://localhost:3001/user");
    dispatch(allUsers(pedir?.data));
  } catch (error) {
    return error.message;
  }
}

export async function getUserByEmail(dispatch, email, password) {
  const pedir = await axios.get(`http://localhost:3001/user/email/${email}`);
  try {
    if(password === pedir.data.password) { 
    dispatch(oneUsers(pedir?.data)); 
    } else {alert("ContraseÃ±a incorrectos")}
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

export const getNameQuery = async (dispatch, name) => {
  try {
    const petition = await axios.get(
      `http://localhost:3001/products/name?name=${name}`
    );
    dispatch(getName(petition?.data.filter(a=>a.supermarket ==="General")));
  } catch (error) {
    return error.response;
  }
};

export const getCategoryParams = async (dispatch, category,supermarket,valor) => {
  try {
    const petition = await axios.get(
      `http://localhost:3001/products/category/${category}/${supermarket}/${valor}`
    );
    dispatch(filterCategory(petition?.data));
    dispatch(Category(petition.data[1].category))
    dispatch(Brand(petition?.data[0].brand))
  } catch (error) {
    return error.response;
  }
};

export const rsetFilters = async (dispatch) => {
  try {
    const petition = await axios.get(
      "http://localhost:3001/products"
    );
    dispatch(resetFilter(petition?.data.filter(a=>a.supermarket ==="General")));
    dispatch(Brand("all"))
    dispatch(Category("all"))
  } catch (error) {
    return error.response;
  }
};


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
  Brand,
  loggedOut
} from "./slice";
import { firebase, googleAuthProvider } from "../views/Firebase/ConfigFirebase";
export async function getProductos(dispatch) {
  try {
    const peticion = await axios.get("http://localhost:3001/products");
    dispatch(allProducts(peticion?.data));
  } catch (error) {
    return error.response;
  }
}

export async function logearse(input,dispatch) {
  try {
    dispatch(oneUsers(input))
  } catch (error) {
    return error.response;
  }
}

export async function numberPage(num) {
  try {
    const json = await fetch(`http://localhost:3001/products/page/${num}`)
    const jsonRes = await json.json()
    dispatch(paginate(num + 1))
    
  } catch (error) {
    return error.response;
  }
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
    }).then(e=>{
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
      data: { "email": email}
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
        axios.post("http://localhost:3001/user/soloemail",{
        name: user.displayName,
        avatar: user.photoURL,
        email: user.email,
        hashgoogle: user.uid,
        type_account: "1",
       })
       .then(res=> res)
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
      if (category !== "all") {
        dispatch(Category(petition?.data[0].category))
        dispatch(filterCategory(petition?.data));
      }if(supermarket !== "all"){
        dispatch(Brand(petition?.data[0].brand))
        dispatch(filterCategory(petition?.data));

      }else{
        dispatch(filterCategory(petition?.data));
      }
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

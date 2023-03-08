import axios from "axios";
import {
  allProducts,
  getName,
  filterCategory,
  resetFilter,
  Category,
  oneComment,
  Brand,
  addProduct,
} from "../slice/globalSlice";

export async function getProductos(dispatch) {
  try {
    const peticion = await axios.get("http://localhost:3001/products");
    dispatch(allProducts(peticion?.data));
  } catch (error) {
    return error.response;
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

export const getNameQuery = async (dispatch, name, order) => {
  try {
    const petition = await axios.get(
      `http://localhost:3001/products/name?name=${name}&order=${order}`
    );
    dispatch(
      getName(petition?.data.filter((a) => a.supermarket === "General"))
    );
  } catch (error) {
    return error.response;
  }
};

export const getCategoryParams = async (
  dispatch,
  category,
  supermarket,
  valor
) => {
  try {
    const petition = await axios.get(
      `http://localhost:3001/products/category/${category}/${supermarket}/${valor}`
    );
    if (category !== "all") {
      dispatch(Category(petition?.data[0].category));
      dispatch(filterCategory(petition?.data));
    }
    if (supermarket !== "all") {
      dispatch(Brand(petition?.data[0].brand));
      dispatch(filterCategory(petition?.data));
    } else {
      dispatch(filterCategory(petition?.data));
    }
  } catch (error) {
    return error.response;
  }
};

export const rsetFilters = async (dispatch) => {
  try {
    const petition = await axios.get("http://localhost:3001/products");
    dispatch(
      resetFilter(petition?.data.filter((a) => a.supermarket === "General"))
    );
    dispatch(Brand("all"));
    dispatch(Category("all"));
  } catch (error) {
    return error.response;
  }
};

export const postProduct = (payload) => {
  return async () => {
    try {
      const petition = await axios.post(
        "http://localhost:3001/products/",
        payload
      );
      return petition;
    } catch (error) {
      console.log(error);
    }
  };
};

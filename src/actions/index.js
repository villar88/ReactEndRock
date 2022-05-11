import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    GET_CART,
    UPDATE_CART
} from "./types";

import ApiService from "../services/api.service";

export const productsHome = () => async (dispatch) => {
  try {
    const res = await ApiService.getAllHome();
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = () => async (dispatch) => {
    try {
      const res = await ApiService.getAll();
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};
  
export const getProduct = (id) => async (dispatch) => {
    try {
      const res = await ApiService.get(id);
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
};

export const getCart = () => async (dispatch) => {
  try {
    const res = await ApiService.getCart();
    let data = [];
    let total = 0;

    for (const [key, value] of Object.entries(res.data.products)) {
      const product = await ApiService.get(value.productId);
      product.data.quantity = value.quantity;
      total = total + product.data.price;
      product.data.total = total;
      data[key] = product.data;
    }

    dispatch({
      type: GET_CART,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addCart = () => async (dispatch) => {
  try {
    const res = await ApiService.getCart();
    dispatch({
      type: GET_CART,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCart = (data) => async (dispatch) => {
  try {
    const res = await ApiService.updateCart(data);
    console.log(res.data);
    dispatch({
      type: UPDATE_CART,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
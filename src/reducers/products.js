import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT
  } from "../actions/types";

const defaultState = [];

function productReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_ALL_PRODUCTS:
        return payload;
      case GET_PRODUCT:
        return state.filter(({ id }) => id !== payload.id);
      default:
        return state;
    }
};

export default productReducer;
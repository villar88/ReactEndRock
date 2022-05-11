import {
    GET_CART
} from "../actions/types";

const defaultState = [];

function cartReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_CART:
        return payload;
      default:
        return state;
    }
};

export default cartReducer;
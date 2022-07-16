import { mockData } from "./mockData";
import {
  SET_NAME,
  SET_TYPE,
  SET_PRICE,
  SET_THUMB,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from "./constant";

export const initState = {
  id: "",
  name: "",
  type: "",
  price: "",
  thumb: "",
  products:
    localStorage.products && localStorage.products.length > 0
      ? JSON.parse(localStorage.products)
      : mockData,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case SET_THUMB:
      return {
        ...state,
        thumb: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case DELETE_PRODUCT:
      const nextState = state.products.filter(
        (product) => product.id !== action.payload
      );

      return {
        ...state,
        products: nextState,
      };
    default:
      throw new Error("Invalid action");
  }
};

export default reducer;

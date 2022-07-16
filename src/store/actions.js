import {
  SET_NAME,
  SET_TYPE,
  SET_PRICE,
  SET_THUMB,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from "./constant";

export const setName = (payload) => {
  return {
    type: SET_NAME,
    payload,
  };
};

export const setType = (payload) => {
  return {
    type: SET_TYPE,
    payload,
  };
};

export const setPrice = (payload) => {
  return {
    type: SET_PRICE,
    payload,
  };
};

export const setThumb = (payload) => {
  return {
    type: SET_THUMB,
    payload,
  };
};

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

export const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  };
};

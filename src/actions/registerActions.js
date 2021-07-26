import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  EMAIL_INPUT,
  PASSWORD_INPUT,
  NAME_INPUT,
} from "./registerTypes";

export const registerReq = (name, email, password) => {
  console.log("actions", name, email, password);
  return {
    type: REGISTER_REQUEST,
    payload: password,
    email: email,
    name: name,
  };
};

export const registerSucces = (name, email, id) => {
  console.log("helo:", name, email);
  return {
    type: REGISTER_SUCCESS,
    payload: name,
    email: email,
    id: id,
  };
};

export const registerError = (error) => {
  return {
    type: REGISTER_ERROR,
    payload: error,
  };
};
export const registerLoading = (loading) => {
  return {
    type: REGISTER_LOADING,
    payload: loading,
  };
};

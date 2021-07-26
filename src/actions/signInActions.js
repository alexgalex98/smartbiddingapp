import {
  SIGNIN_LOADING,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  EMAIL_INPUT,
  PASSWORD_INPUT,
  SIGNIN_REQUEST,
} from "./signInTypes";

export const signInReq = (password, email) => {
  return {
    type: SIGNIN_REQUEST,
    payload: password,
    email: email,
  };
};
// export const signInEmail = email => {
//     return {
//       type: EMAIL_INPUT,
//       payload : email
//     }
//   }
export const signinSucces = (id, name, is_admin) => {
  console.log("helo:", name, id);
  return {
    type: SIGNIN_SUCCESS,
    payload: id,
    name: name,
    is_admin: is_admin,
  };
};

export const signInError = (error) => {
  return {
    type: SIGNIN_ERROR,
    payload: error,
  };
};
export const signInLoading = (loading) => {
  return {
    type: SIGNIN_LOADING,
    payload: loading,
  };
};

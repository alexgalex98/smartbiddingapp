import {
  SIGNIN_ERROR,
  SIGNIN_LOADING,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from "../actions/signInTypes";

const initialState = {
  loading: false,
  password: "",
  email: "",
  error: "",
  isSuccess: false,
  success: { id: "", name: "" },
};
const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        password: action.payload,
        email: action.email,
        isSuccess: false,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSuccess: false,
      };
    case SIGNIN_LOADING:
      return {
        ...state,
        loading: action.payload,
        isSuccess: false,
      };
    case SIGNIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: {
          id: action.payload,
          name: action.name,
          is_admin: action.is_admin,
        },
        error: "",
        isSuccess: true,
      };

    default:
      return state;
  }
};
export default signInReducer;

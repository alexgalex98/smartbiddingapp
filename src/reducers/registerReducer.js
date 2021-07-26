import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../actions/registerTypes";

const initialState = {
  loading: false,
  name: "",
  email: "",
  password: "",
  error: "",
  isSuccess: false,
  success: { name: "", email: "" },
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.payload,
        isSuccess: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSuccess: false,
      };
    case REGISTER_LOADING:
      return {
        ...state,
        loading: action.payload,
        isSuccess: false,
      };
    case REGISTER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: {
          name: action.payload,
          email: action.email,
          id: action.id,
        },
        error: "",
        isSuccess: true,
      };

    default:
      return state;
  }
};
export default registerReducer;

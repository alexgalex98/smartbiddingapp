import {
  APPROVEITEM_ERROR,
  APPROVEITEM_LOADING,
  APPROVEITEM_REQUEST,
  APPROVEITEM_SUCCESS,
  DISAPPROVEITEM_ERROR,
  DISAPPROVEITEM_LOADING,
  DISAPPROVEITEM_REQUEST,
  DISAPPROVEITEM_SUCCESS,
} from "../actions/approveItemType";

const initialState = {
  loading: false,
  id: 0,
  error: "",
  success: {
    id: 0,
  },
  isSuccess: false,
};

const ApproveItemReducer = (state = initialState, action) => {
  console.log("reducer");
  switch (action.type) {
    case APPROVEITEM_REQUEST:
      console.log("test", action.payload);
      return {
        ...state,
        id: action.payload,
      };
    case DISAPPROVEITEM_REQUEST:
      console.log("test", action.payload);
      return {
        ...state,
        id: action.payload,
      };
    case APPROVEITEM_ERROR:
      return {
        ...state,
        loading: action.payload,
      };
    case DISAPPROVEITEM_ERROR:
      return {
        ...state,
        loading: action.payload,
      };
    case APPROVEITEM_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case DISAPPROVEITEM_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case APPROVEITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        succes: {
          id: action.payload,
        },
        error: "",
        isSuccess: true,
      };
    case DISAPPROVEITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        succes: {
          id: action.payload,
        },
        error: "",
        isSuccess: true,
      };

    default:
      return state;
  }
};
export default ApproveItemReducer;

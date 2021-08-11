import {
  LASTITEMS_ERROR,
  LASTITEMS_FETCH,
  LASTITEMS_SUCCESS,
  LASTITEMS_PENDING,
} from "../actions/lastItemsTypes";

const initialState = {
  loading: false,
  lastItems: [],
  error: "",
};
const LastItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LASTITEMS_FETCH:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case LASTITEMS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case LASTITEMS_PENDING:
      return {
        ...state,
        loading: action.payload,
      };
    case LASTITEMS_SUCCESS:
      return {
        loading: false,
        lastItems: action.payload,
        error: "",
      };

    default:
      return state;
  }
};
export default LastItemsReducer;

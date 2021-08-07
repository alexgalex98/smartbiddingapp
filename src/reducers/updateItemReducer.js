import {
  UPDATEITEM_ERROR,
  UPDATEITEM_LOADING,
  UPDATEITEM_REQUEST,
  UPDATEITEM_SUCCESS,
} from "../actions/updateItemTypes";

const initialState = {
  loading: false,
  id: 0,
  name: "",
  category: "",
  description: "",
  condition: "",
  startprice: 0,
  buynowprice: 0,
  secondsleft: 0,
  error: "",
  isSucces: false,
  success: {
    id: 0,
    name: "",
    category: "",
    description: "",
    condition: "",
    startprice: 0,
    buynowprice: 0,
    secondsleft: 0,
  },
};

const UpdateItemReducer = (state = initialState, action) => {
  console.log(action.type, "TYPEEE");
  switch (action.type) {
    case UPDATEITEM_REQUEST:
      console.log("REDUCER");
      return {
        ...state,
        id: action.payload,
        name: action.name,
        category: action.category,
        description: action.description,
        condition: action.condition,
        startprice: action.startprice,
        buynowprice: action.buynowprice,
        secondsleft: action.secondsleft,
      };
    case UPDATEITEM_ERROR:
      return {
        ...state,
        loading: action.name,
      };
    case UPDATEITEM_LOADING:
      return {
        ...state,
        loading: action.name,
      };
    case UPDATEITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: {
          id: action.payload,
          name: action.name,
          category: action.category,
          description: action.description,
          condition: action.condition,
          startprice: action.startprice,
          buynowprice: action.buynowprice,
          secondsleft: action.secondsleft,
        },
        error: "",
        isSucces: true,
      };

    default:
      console.log("DEAFULT");
      return state;
  }
};
export default UpdateItemReducer;

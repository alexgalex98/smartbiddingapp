import {
  NEWBID_ERROR,
  NEWBID_LOADING,
  NEWBID_REQUEST,
  NEWBID_SUCCESS,
} from "../actions/NewBidTypes";

const initialState = {
  loading: false,
  name: "",
  category: "",
  description: "",
  condition: "",
  startPrice: 0,
  buyNowPrice: 0,
  bidDuration: 0,
  image: "",
  error: "",
  isSuccess: false,
  success: {
    name: "",
    category: "",
    description: "",
    condition: "",
    startPrice: 0,
    buyNowPrice: 0,
    bidDuration: 0,
    image: "",
  },
};

const newBidReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWBID_REQUEST:
      return {
        ...state,
        name: action.payload,
        category: action.category,
        description: action.description,
        condition: action.condition,
        startPrice: action.startPrice,
        buyNowPrice: action.buyNowPrice,
        bidDuration: action.bidDuration,
        image: action.image,
        created_by: action.created_by,
        // isSuccess: false
      };
    case NEWBID_ERROR:
      return {
        ...state,
        loading: action.payload,
        // isSuccess: false
      };
    case NEWBID_LOADING:
      return {
        ...state,
        loading: action.payload,
        //isSuccess: false
      };
    case NEWBID_SUCCESS:
      return {
        ...state,
        loading: false,
        succes: {
          name: action.payload,
          category: action.category,
          description: action.description,
          condition: action.condition,
          startPrice: action.startPrice,
          buyNowPrice: action.buyNowPrice,
          bidDuration: action.bidDuration,
          image: action.image,
          created_by: action.created_by,
        },
        error: "",
        isSuccess: true,
      };
    default:
      return state;
  }
};
export default newBidReducer;

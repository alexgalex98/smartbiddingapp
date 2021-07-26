import { BID_ERROR,BID_FETCH,BID_PENDING,BID_SUCCESS } from "../actions/bidTypes"


const initialState= {
  loading: false,
  bid: [],
  error:''
}
const BidReducer =(state=initialState, action) =>{
    switch (action.type) {
        case BID_FETCH:
          return {
            ...state,
            loading: true,
            error: ''
          }
          case BID_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload
          }
        case BID_PENDING:
            return {
                ...state,
                loading: action.payload,
        }
        case BID_SUCCESS:
          console.log("succes")
          return {
            ...state,
            loading: false,
            bid: action.payload,
            error: '' 
          }
        
        default: return state
      }
}
export default BidReducer

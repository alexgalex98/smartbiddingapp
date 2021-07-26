import { GETBIDDERS_ERROR,GETBIDDERS_FETCH,GETBIDDERS_PENDING,GETBIDDERS_SUCCESS } from "../actions/getBiddersTypes"


const initialState= {
  loading:false,
  bidders:[],
  error:''
}

const GetBiddersReducer =(state=initialState, action) =>{
    console.log("sunt in reducewr")
    switch (action.type) {
        case GETBIDDERS_FETCH:
          return {
            ...state,
            loading: true,
            error: ''
          }
          case GETBIDDERS_ERROR:
          return {
            loading: false,
            error: action.payload
          }
        case GETBIDDERS_PENDING:
            return {
                ...state,
                loading: action.payload,
        }
        case GETBIDDERS_SUCCESS:
          console.log("dhffyh",action.payload)
          return {
            ...state,
            loading: false,
            bidders: action.payload,
            error: ''
            
          }
         console.log(state)
        
        default: return state
      }
}
export default GetBiddersReducer

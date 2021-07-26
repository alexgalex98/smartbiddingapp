import { ITEMS_ERROR, ITEMS_FETCH, ITEMS_SUCCESS,ITEMS_PENDING } from "../actions/itemTypes"


const initialState= {
  loading:false,
  items:[],
  error:''
}
const ItemsReducer =(state=initialState, action) =>{
    switch (action.type) {
        case ITEMS_FETCH:
          return {
            ...state,
            loading: true,
            error: ''
          }
          case ITEMS_ERROR:
          return {
            loading: false,
            error: action.payload
          }
        case ITEMS_PENDING:
            return {
                ...state,
                loading: action.payload,
        }
        case ITEMS_SUCCESS:
          return {
            loading: false,
            items: action.payload,
            error: ''
          }
        
        default: return state
      }
}
export default ItemsReducer

import { combineReducers } from 'redux'
import ItemsReducer from './ItemsReducer'
import signInReducer from './signInReducer'
import registerReducer from './registerReducer'
import newBidReducer from './NewBidReducer'
import BidReducer from './bidReducer'
import GetBiddersReducer from './getBiddersReducer'
import BidForItemReducer from './bidForItemReducer'
const rootReducer = combineReducers({
  items: ItemsReducer,
  signIn: signInReducer,
  register: registerReducer,
  newBid: newBidReducer,
  bid: BidReducer,
  getBidders: GetBiddersReducer,
  bidForItem: BidForItemReducer
})

export default rootReducer
import { combineReducers } from "redux";
import ItemsReducer from "./ItemsReducer";
import signInReducer from "./signInReducer";
import registerReducer from "./registerReducer";
import newBidReducer from "./NewBidReducer";
import BidReducer from "./bidReducer";
import GetBiddersReducer from "./getBiddersReducer";
import BidForItemReducer from "./bidForItemReducer";
import ApproveItemReducer from "./approveItemReducer";
import MyItemsReducer from "./myItemsReducer";
import OnBiddedItemsReducer from "./onBiddedItemsReducer";
import UpdateItemReducer from "./updateItemReducer";

const rootReducer = combineReducers({
  items: ItemsReducer,
  signIn: signInReducer,
  register: registerReducer,
  newBid: newBidReducer,
  bid: BidReducer,
  getBidders: GetBiddersReducer,
  bidForItem: BidForItemReducer,
  approveItem: ApproveItemReducer,
  myItems: MyItemsReducer,
  onBiddedItems: OnBiddedItemsReducer,
  updateItem: UpdateItemReducer,
});

export default rootReducer;

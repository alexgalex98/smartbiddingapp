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
import BuyItemReducer from "./buyItemReducer";
import ExpiredItemsReducer from "./expiredItemsReducer";
import WonItemsReducer from "./wonItemsReducer";
import LastItemsReducer from "./lastItemsReducer";
import SimilarItemsReducer from "./similarItemsReducer";
import MostPopularItemsReducer from "./mostPopularItemsReducer";

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
  buyItem: BuyItemReducer,
  expiredItem: ExpiredItemsReducer,
  wonItems: WonItemsReducer,
  lastItems: LastItemsReducer,
  similarItems: SimilarItemsReducer,
  mostPopularItems: MostPopularItemsReducer,
});

export default rootReducer;

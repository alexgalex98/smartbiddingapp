import { all } from "@redux-saga/core/effects";
import { watchFetchBidAsync } from "./bidPageSaga";
import { watchFetchBiddersAsync } from "./getBiddersSaga";
import { watchFetchItemsAsync } from "./ItemsPageSaga";
import { watchnewBidAsync } from "./NewBidPageSaga";
import { watchRegisterAsync } from "./registerPageSaga";
import { watchSignInAsync } from "./singInPageSaga";
import { watchbidForItemAsync } from "./bidForItemSaga";
import { watchFetchOnBiddedItemsAsync } from "./onBiddedItemsPageSaga";
import {
  watchApproveItemAsync,
  watchDisApproveItemAsync,
} from "./approveItemSaga";
import { watchFetchMyItemsAsync } from "./myItemsPageSaga";
import { watchFetchUpdateItemAsync } from "./updateItemSaga";

export default function* rootSaga() {
  yield all([
    watchFetchItemsAsync(),
    watchSignInAsync(),
    watchRegisterAsync(),
    watchnewBidAsync(),
    watchFetchBidAsync(),
    watchFetchBiddersAsync(),
    watchbidForItemAsync(),
    watchApproveItemAsync(),
    watchDisApproveItemAsync(),
    watchFetchMyItemsAsync(),
    watchFetchOnBiddedItemsAsync(),
    watchFetchUpdateItemAsync(),
  ]);
}

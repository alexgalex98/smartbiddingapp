import { all } from "@redux-saga/core/effects";
import { watchFetchBidAsync } from "./bidPageSaga";
import { watchFetchBiddersAsync } from "./getBiddersSaga";
import { watchFetchExpiredAsync, watchFetchItemsAsync } from "./ItemsPageSaga";
import { watchnewBidAsync } from "./NewBidPageSaga";
import { watchRegisterAsync } from "./registerPageSaga";
import { watchSignInAsync } from "./singInPageSaga";
import { watchbidForItemAsync, watchbuyItemAsync } from "./bidForItemSaga";
import { watchFetchOnBiddedItemsAsync } from "./onBiddedItemsPageSaga";
import {
  watchApproveItemAsync,
  watchDisApproveItemAsync,
} from "./approveItemSaga";
import { watchFetchMyItemsAsync } from "./myItemsPageSaga";
import { watchFetchUpdateItemAsync } from "./updateItemSaga";
import { watchFetchWonItemsAsync } from "./wonItemsPageSaga";
import { watchFetchLastItemsAsync } from "./lastItemsPageSaga";
import { watchFetchSimilarItemsAsync } from "./similarItemsPageSaga";
import { watchFetchMostPopularItemsAsync } from "./mostPopularItemsPageSaga";

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
    watchbuyItemAsync(),
    watchFetchExpiredAsync(),
    watchFetchWonItemsAsync(),
    watchFetchLastItemsAsync(),
    watchFetchSimilarItemsAsync(),
    watchFetchMostPopularItemsAsync(),
  ]);
}

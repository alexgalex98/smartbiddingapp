import { all } from "@redux-saga/core/effects";
import { watchFetchBidAsync } from "./bidPageSaga";
import { watchFetchBiddersAsync } from "./getBiddersSaga";
import { watchFetchItemsAsync } from "./ItemsPageSaga";
import { watchnewBidAsync } from "./NewBidPageSaga";
import { watchRegisterAsync } from "./registerPageSaga";
import { watchSignInAsync } from "./singInPageSaga";
import {watchbidForItemAsync} from './bidForItemSaga'


export default function* rootSaga(){
    yield all([
        watchFetchItemsAsync(),
        watchSignInAsync(),
        watchRegisterAsync(),
        watchnewBidAsync(),
        watchFetchBidAsync(),
        watchFetchBiddersAsync(),
        watchbidForItemAsync()
    ]);
}
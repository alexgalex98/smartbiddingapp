import { ONBIDDEDITEMS_FETCH } from "../actions/onBiddedItemsTypes";
import { fetchOnBiddedItemsAPI } from "../endpoints/onBiddedItemsAPI";
import {
  fetchItemsFailure,
  fetchItemsSuccess,
} from "../actions/onBiddedItemsActions";
import { put, takeLatest, call } from "redux-saga/effects";

function* fetchOnBiddedItems() {
  console.log("SAGAMY");
  try {
    const response = yield call(() =>
      fetchOnBiddedItemsAPI(localStorage.getItem("user"))
    );
    yield put(fetchItemsSuccess(response));
    console.log("SAGA", response);
  } catch (error) {
    console.log("error", error);
    yield put(fetchItemsFailure("error"));
  }
}

export function* watchFetchOnBiddedItemsAsync() {
  yield takeLatest(ONBIDDEDITEMS_FETCH, fetchOnBiddedItems);
}

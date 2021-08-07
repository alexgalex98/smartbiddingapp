import { MYITEMS_FETCH } from "../actions/myItemsTypes";
import { fetchMyItemsAPI } from "../endpoints/myItemsAPI";
import {
  fetchItemsFailure,
  fetchItemsSuccess,
} from "../actions/myItemsActions";
import { put, takeLatest, call } from "redux-saga/effects";

function* fetchMyItems() {
  console.log("SAGAMY");
  try {
    const response = yield call(() =>
      fetchMyItemsAPI(localStorage.getItem("user"))
    );
    yield put(fetchItemsSuccess(response));
    console.log("SAGA", response);
  } catch (error) {
    console.log("error", error);
    yield put(fetchItemsFailure("error"));
  }
}

export function* watchFetchMyItemsAsync() {
  yield takeLatest(MYITEMS_FETCH, fetchMyItems);
}

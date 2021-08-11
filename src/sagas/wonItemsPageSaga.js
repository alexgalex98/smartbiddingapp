import { WONITEMS_FETCH } from "../actions/wonItemsTypes";
import { fetchWonItemsAPI } from "../endpoints/wonItemsAPI";
import {
  fetchWonItemsFailure,
  fetchWonItemsSuccess,
} from "../actions/wonItemsAction";
import { put, takeLatest, call } from "redux-saga/effects";

function* fetchWonItems() {
  console.log("SAGAWONNN");
  try {
    const response = yield call(() =>
      fetchWonItemsAPI(localStorage.getItem("user"))
    );
    yield put(fetchWonItemsSuccess(response));
    console.log("SAGA", response);
  } catch (error) {
    console.log("error", error);
    yield put(fetchWonItemsFailure("error"));
  }
}

export function* watchFetchWonItemsAsync() {
  yield takeLatest(WONITEMS_FETCH, fetchWonItems);
}

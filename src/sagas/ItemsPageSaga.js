import { EXPIRED_FETCH, ITEMS_FETCH } from "../actions/itemTypes";
import { put, takeLatest, call } from "redux-saga/effects";
import { fetchExpiredAPI, fetchItemsAPI } from "../endpoints/ItemsAPI";
import {
  fetchExpiredFailure,
  fetchExpiredSuccess,
  fetchItemsFailure,
  fetchItemsSuccess,
} from "../actions/ItemsActions";

function* fetchItems() {
  console.log("saga");
  try {
    const response = yield call(() => fetchItemsAPI());
    console.log("response", response);
    yield put(fetchItemsSuccess(response));
  } catch (error) {
    console.log("error", error);
    yield put(fetchItemsFailure("error"));
  }
}

function* fetchExpired(props) {
  try {
    const response = yield call(() => fetchExpiredAPI(props.payload));
    if (response) {
      yield put(fetchExpiredSuccess(response));
    } else {
      console.log("fuck me wtf s");
      throw "Something went wrong";
    }
  } catch (error) {
    console.log("error", error);
    yield put(fetchExpiredFailure("error"));
  }
}

export function* watchFetchItemsAsync() {
  yield takeLatest(ITEMS_FETCH, fetchItems);
}

export function* watchFetchExpiredAsync() {
  yield takeLatest(EXPIRED_FETCH, fetchExpired);
}

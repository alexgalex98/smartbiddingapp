import { ITEMS_FETCH } from "../actions/itemTypes";
import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchItemsAPI } from "../endpoints/ItemsAPI";
import { fetchItemsFailure, fetchItemsSuccess } from "../actions/ItemsActions";

function* fetchItems() {
    console.log("saga")
  try {
    const response= yield call(() => fetchItemsAPI());
    console.log("response",response)
    yield put(fetchItemsSuccess(response));
  } catch (error) {
    console.log("error", error)
    yield put(fetchItemsFailure("error"));
  }
}

export function* watchFetchItemsAsync() {
  yield takeLatest(ITEMS_FETCH, fetchItems);
}
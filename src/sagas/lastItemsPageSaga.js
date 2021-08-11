import {
  LASTITEMS_ERROR,
  LASTITEMS_FETCH,
  LASTITEMS_PENDING,
  LASTITEMS_SUCCESS,
} from "../actions/lastItemsTypes";
import { put, takeLatest, call } from "redux-saga/effects";
import { fetchLastItemsAPI } from "../endpoints/lastItemsAPI";
import {
  fetchLastItemsSuccess,
  fetchLastItemsFailure,
} from "../actions/lastItemsActions";

function* fetchLastItems() {
  console.log("saga");
  try {
    const response = yield call(() => fetchLastItemsAPI());
    console.log("response", response);
    yield put(fetchLastItemsSuccess(response));
  } catch (error) {
    console.log("error", error);
    yield put(fetchLastItemsFailure("error"));
  }
}

export function* watchFetchLastItemsAsync() {
  yield takeLatest(LASTITEMS_FETCH, fetchLastItems);
}

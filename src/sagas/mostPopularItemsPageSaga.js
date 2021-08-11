import {
  MOSTPOPULARITEMS_ERROR,
  MOSTPOPULARITEMS_FETCH,
  MOSTPOPULARITEMS_PENDING,
  MOSTPOPULARITEMS_SUCCESS,
} from "../actions/homePageTypes";
import { put, takeLatest, call } from "redux-saga/effects";
import { fetchMostPopularItemsAPI } from "../endpoints/mostPopularItemsAPI";
import {
  fetchMostPopularItemsSuccess,
  fetchMostPopularItemsFailure,
} from "../actions/homePageActions";

function* fetchMostPopularItems() {
  console.log("saga");
  try {
    const response = yield call(() => fetchMostPopularItemsAPI());
    console.log("response", response);
    yield put(fetchMostPopularItemsSuccess(response));
  } catch (error) {
    console.log("error", error);
    yield put(fetchMostPopularItemsFailure("error"));
  }
}

export function* watchFetchMostPopularItemsAsync() {
  yield takeLatest(MOSTPOPULARITEMS_FETCH, fetchMostPopularItems);
}

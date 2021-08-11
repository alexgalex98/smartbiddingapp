import { SIMILARITEMS_FETCH } from "../actions/homePageTypes";
import { fetchSimilarItemsAPI } from "../endpoints/similarItemsAPI";
import {
  fetchSimilarItemsFailure,
  fetchSimilarItemsSuccess,
} from "../actions/homePageActions";
import { put, takeLatest, call } from "redux-saga/effects";

function* fetchSimilarItems(props) {
  console.log("SAGAMY");
  let id = props.payload;
  try {
    const response = yield call(() => fetchSimilarItemsAPI(id));
    yield put(fetchSimilarItemsSuccess(response));
    console.log("SAGA", response);
  } catch (error) {
    console.log("error", error);
    yield put(fetchSimilarItemsFailure("error"));
  }
}

export function* watchFetchSimilarItemsAsync() {
  yield takeLatest(SIMILARITEMS_FETCH, fetchSimilarItems);
}

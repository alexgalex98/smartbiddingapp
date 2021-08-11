import { GETBIDDERS_FETCH, GETBIDDERS_LOAD } from "../actions/getBiddersTypes";
import { put, takeLatest, call } from "redux-saga/effects";
import { fetchgetBiddersAPI } from "../endpoints/getBiddersAPI";
import {
  fetchBiddersSuccess,
  fetchBiddersFailure,
} from "../actions/getBiddersAction";

function* fetchBidders(props) {
  console.log("sagaGetBidders", props.payload);
  let id = props.payload;
  try {
    const response = yield call(() => fetchgetBiddersAPI(id));
    console.log("responseGetBidders1223", response);
    yield put(fetchBiddersSuccess(response));
  } catch (error) {
    console.log("error", error);
    yield put(fetchBiddersFailure("error"));
  }
}

export function* watchFetchBiddersAsync() {
  yield takeLatest(GETBIDDERS_LOAD, fetchBidders);
}

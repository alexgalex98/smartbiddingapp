import { BID_FETCH, LOAD_BID } from "../actions/bidTypes";
import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchBidAPI } from "../endpoints/BidAPI";
import { fetchBidFailure, fetchBidSuccess, loadBid } from "../actions/bidActions";

function* fetchBid(props) {
    console.log("sagafetchBid", props.payload)
    let id = props.payload
  
  try {
    const response= yield call(() => fetchBidAPI(id));
    console.log("responsebid",response)
    yield put(fetchBidSuccess(response));
  } catch (error) {
    console.log("error", error)
    yield put(fetchBidFailure("error"));
  }
}

export function* watchFetchBidAsync() {
  yield takeLatest(LOAD_BID, fetchBid);
}
import { put, takeLatest, call } from "redux-saga/effects";
import { NewBidAPI } from "../endpoints/NewBidAPI";

import { newBidError, newBidSucces } from "../actions/NewBidActions";
import { NEWBID_REQUEST } from "../actions/NewBidTypes";

function* newBidRequest(props) {
  console.log("saga");
  console.log(props);
  console.log(props.payload);
  console.log(props.description);
  console.log(props.image, "nebidpagesaga IMAGE");
  try {
    const response = NewBidAPI(
      props.payload,
      props.category,
      props.description,
      props.condition,
      props.startPrice,
      props.buyNowPrice,
      props.bidDuration,
      props.image,
      props.created_by
    );
    console.log("RESPP", response);
    if (response !== undefined) {
      console.log("response", response);
      yield put(
        newBidSucces(
          response.name,
          response.category,
          response.description,
          response.condition,
          response.startPrice,
          response.buyNowPrice,
          response.bidDuration,
          response.image,
          response.created_by
        )
      );
    } else {
      console.log("fuck me wtf s");
      throw "Something went wrong";
    }
  } catch (error) {
    console.log("errorrrrrrrrrrr", error);
    yield put(newBidError("error"));
  }
}

export function* watchnewBidAsync() {
  yield takeLatest(NEWBID_REQUEST, newBidRequest);
}

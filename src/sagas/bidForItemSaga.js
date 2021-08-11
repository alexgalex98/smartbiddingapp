import { put, takeLatest, call } from "redux-saga/effects";
import { bidForItemAPI } from "../endpoints/bidForItemAPI";

import {
  bidForItemFailure,
  bidForItemSuccess,
  buyItemFailure,
  buyItemSuccess,
} from "../actions/bidForItemActions";
import {
  BIDFORITEM_REQUEST,
  BUYITEM_REQUEST,
} from "../actions/bidForItemTypes";
import { buyItemAPI } from "../endpoints/buyItemAPI";

function* bidForItemRequest(props) {
  console.log("saga");
  console.log(props);
  console.log("/////////", props.currentItem, props.currentUser);
  console.log(props.payload);
  try {
    const response = bidForItemAPI(
      props.payload,
      props.currentItem,
      props.currentUser
    );
    console.log("RESPP", response);
    if (response != undefined) {
      console.log("response", response);
      yield put(
        bidForItemSuccess(
          response.price,
          response.currentItem,
          response.currentUser
        )
      );
    } else {
      console.log("fuck me wtf s");
      throw "Something went wrong";
    }
  } catch (error) {
    console.log("errorrrrrrrrrrr", error);
    yield put(bidForItemFailure("error"));
  }
}

function* buyItemRequest(props) {
  console.log("saga");
  // console.log(props);
  // console.log("/////////", props.currentItem, props.currentUser);
  // console.log(props.payload);
  try {
    const response = buyItemAPI(props.currentItem, props.currentUser);
    console.log("RESPP", response);
    if (response != undefined) {
      console.log("response", response);
      yield put(buyItemSuccess(response.currentItem, response.currentUser));
    } else {
      console.log("fuck me wtf s");
      throw "Something went wrong";
    }
  } catch (error) {
    console.log("errorrrrrrrrrrr", error);
    yield put(buyItemFailure("error"));
  }
}

export function* watchbidForItemAsync() {
  yield takeLatest(BIDFORITEM_REQUEST, bidForItemRequest);
}

export function* watchbuyItemAsync() {
  yield takeLatest(BUYITEM_REQUEST, buyItemRequest);
}

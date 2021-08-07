import { put, takeLatest, call } from "redux-saga/effects";
import { approveItemAPI } from "../endpoints/approveItemAPI";

import {
  approveItemFailure,
  approveItemSuccess,
  disapproveItemFailure,
  disapproveItemSuccess,
} from "../actions/approveItemActions";
import {
  APPROVEITEM_REQUEST,
  DISAPPROVEITEM_REQUEST,
} from "../actions/approveItemType";
import { disapproveItemAPI } from "../endpoints/disapproveItemAPI";

function* approveItemRequest(props) {
  console.log("saga");
  console.log(props);
  console.log("/////////", props.payload);
  console.log(props.payload);
  try {
    const response = approveItemAPI(props.payload);
    console.log("RESPP", response);
    if (response != undefined) {
      console.log("response", response);
      yield put(approveItemSuccess(response.id));
    } else {
      console.log("fuck me wtf s");
      throw "Something went wrong";
    }
  } catch (error) {
    console.log("errorrrrrrrrrrr", error);
    yield put(approveItemFailure("error"));
  }
}

function* disapproveItemRequest(props) {
  console.log("saga");
  console.log(props);
  console.log("/////////", props.payload);
  console.log(props.payload);
  try {
    const response = disapproveItemAPI(props.payload);
    console.log("RESPP", response);
    if (response != undefined) {
      console.log("response", response);
      yield put(disapproveItemSuccess(response.id));
    } else {
      console.log("fuck me wtf s");
      throw "Something went wrong";
    }
  } catch (error) {
    console.log("errorrrrrrrrrrr", error);
    yield put(disapproveItemFailure("error"));
  }
}

export function* watchApproveItemAsync() {
  yield takeLatest(APPROVEITEM_REQUEST, approveItemRequest);
}

export function* watchDisApproveItemAsync() {
  yield takeLatest(DISAPPROVEITEM_REQUEST, disapproveItemRequest);
}

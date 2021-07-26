import { put, takeLatest, call } from "redux-saga/effects";
import { registerAPI } from "../endpoints/registerAPI";
import { registerError, registerSucces } from "../actions/registerActions";
import { REGISTER_REQUEST } from "../actions/registerTypes";

function* registerReq(props) {
  console.log("saga");
  console.log(props);
  console.log(props.payload);
  console.log(props.email);
  try {
    const response = yield call(() =>
      registerAPI(props.name, props.email, props.payload)
    );
    if (response != undefined) {
      console.log("response", response);
      yield put(registerSucces(response.name, response.email, response.id));
    } else {
      throw "Wrong credentials";
    }
  } catch (error) {
    console.log("errorrrrrrrrrrr", error);
    yield put(registerError("error"));
  }
}

export function* watchRegisterAsync() {
  yield takeLatest(REGISTER_REQUEST, registerReq);
}

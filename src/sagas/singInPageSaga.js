import { put, takeLatest, call } from "redux-saga/effects";
import { SIGNIN_REQUEST } from "../actions/signInTypes";
import { signInError, signinSucces } from "../actions/signInActions";
import { signInAPI } from "../endpoints/signInAPI";

function* signInReq(props) {
  console.log("saga");
  console.log(props);
  console.log(props.payload);
  console.log(props.email);
  // const history = useHistory();
  try {
    const response = yield call(() => signInAPI(props.payload, props.email));
    if (response !== undefined) {
      console.log("response", response);
      yield put(signinSucces(response.id, response.name, response.is_admin));
    } else {
      throw "Wrong credentials";
    }
  } catch (error) {
    console.log("errorrrrrrrrrrr", error);
    yield put(signInError("error"));
  }
}

export function* watchSignInAsync() {
  yield takeLatest(SIGNIN_REQUEST, signInReq);
}

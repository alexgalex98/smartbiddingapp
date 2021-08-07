import {
  updateItemFailure,
  updateItemSuccess,
} from "../actions/updateItemActions";
import { updateItemAPi } from "../endpoints/updateItemAPI";
import { put, takeLatest } from "redux-saga/effects";
import { UPDATEITEM_REQUEST } from "../actions/updateItemTypes";

function* updateItemRequest(props) {
  console.log(
    "SAGA",
    props.payload,
    props.name,
    props.category,
    props.description,
    props.condition,
    props.startprice,
    props.buynowprice,
    props.secondsleft
  );
  try {
    const response = updateItemAPi(
      props.payload,
      props.name,
      props.category,
      props.description,
      props.condition,
      props.startprice,
      props.buynowprice,
      props.secondsleft
    );
    if (response !== undefined) {
      yield put(
        updateItemSuccess(
          response.id,
          response.name,
          response.category,
          response.description,
          response.condition,
          response.startprice,
          response.buynowprice,
          response.secondsleft
        )
      );
    } else {
      console.log("ERRROR");
      throw "Something went wrong";
    }
  } catch (error) {
    console.log("CATCH ERROR", error);
    yield put(updateItemFailure("error"));
  }
}
export function* watchFetchUpdateItemAsync() {
  yield takeLatest(UPDATEITEM_REQUEST, updateItemRequest);
}

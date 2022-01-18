import { combineReducers } from "redux";
import products, { productSaga } from "./products";
import auth, { authSaga } from "./auth";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ products, auth });

export function* rootSaga() {
  yield all([authSaga(), productSaga()]);
}

export default rootReducer;

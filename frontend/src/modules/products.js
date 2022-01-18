import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/create_request_saga";
import * as product from "../lib/api/product";
import { takeLatest } from "redux-saga/effects";

const initialState = {
  products: [],
  productsError: null,
};

const [GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE] =
  createRequestActionTypes("products/GET_PRODUCT_LIST");

export const getProductList = createAction(GET_PRODUCT_LIST);

const productListSaga = createRequestSaga(
  GET_PRODUCT_LIST,
  product.getProductList
);

export function* productSaga() {
  yield takeLatest(GET_PRODUCT_LIST, productListSaga);
}

const products = handleActions(
  {
    [GET_PRODUCT_LIST_SUCCESS]: (state, { payload: products }) => ({
      ...state,
      products: products,
      productsError: null,
    }),
    [GET_PRODUCT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      productsError: error,
    }),
  },
  initialState
);

export default products;

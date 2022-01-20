import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/create_request_saga";
import * as product from "../lib/api/product";
import { takeLatest } from "redux-saga/effects";

const initialState = {
  products: [],
  productsError: null,
  readProduct: null,
  readProductError: null,
  productCount: 1,
  buyProductError: null,
};

const [GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE] =
  createRequestActionTypes("products/GET_PRODUCT_LIST");
const [READ_PRODUCT, READ_PRODUCT_SUCCESS, READ_PRODUCT_FAILURE] =
  createRequestActionTypes("products/READ_PRODUCT");
const [CHANGE_PRODUCT_COUNT] = "products/CHANGE_PRODUCT_COUNT";
const [BUY_PRODUCT, BUY_PRODUCT_SUCCESS, BUY_PRODUCT_FAILURE] =
  createRequestActionTypes("products/BUY_PRODUCT");

export const getProductList = createAction(GET_PRODUCT_LIST);
export const readProduct = createAction(READ_PRODUCT);
export const changeProductCount = createAction(
  CHANGE_PRODUCT_COUNT,
  (num) => num
);
export const buyProduct = createAction(BUY_PRODUCT);

const productListSaga = createRequestSaga(
  GET_PRODUCT_LIST,
  product.getProductList
);
const readProductSaga = createRequestSaga(READ_PRODUCT, product.readProduct);
const buyProductSaga = createRequestSaga(BUY_PRODUCT, product.buyProduct);

export function* productSaga() {
  yield takeLatest(GET_PRODUCT_LIST, productListSaga);
  yield takeLatest(READ_PRODUCT, readProductSaga);
  yield takeLatest(BUY_PRODUCT, buyProductSaga);
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
    [READ_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      readProduct: product,
    }),
    [READ_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      readProductError: error,
    }),
    [CHANGE_PRODUCT_COUNT]: (state, { payload: num }) => ({
      ...state,
      productCount: num,
    }),
    [BUY_PRODUCT_SUCCESS]: (state) => ({
      ...state,
    }),
    [BUY_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      buyProductError: error,
    }),
  },
  initialState
);

export default products;
